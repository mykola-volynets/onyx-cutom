# custom_extensions/backend/main.py
from fastapi import FastAPI, HTTPException, Depends, Request, status, File, UploadFile, Query
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse, JSONResponse

from typing import List, Optional, Dict, Any, Union, Type, ForwardRef, Set
from pydantic import BaseModel, Field, RootModel
import re
import os
import asyncpg
from datetime import datetime, timezone
import httpx
# import traceback # No longer explicitly calling traceback.print_exc()
import json
import uuid
import shutil
import logging

# --- CONTROL VARIABLE FOR PRODUCTION LOGGING ---
# SET THIS TO True FOR PRODUCTION, False FOR DEVELOPMENT
IS_PRODUCTION = True  # Or True for production

# --- Logger ---
logger = logging.getLogger(__name__)
if IS_PRODUCTION:
    logging.basicConfig(level=logging.ERROR) # Production: Log only ERROR and CRITICAL
else:
    logging.basicConfig(level=logging.INFO)  # Development: Log INFO, WARNING, ERROR, CRITICAL


# --- Constants & DB Setup ---
CUSTOM_PROJECTS_DATABASE_URL = os.getenv("CUSTOM_PROJECTS_DATABASE_URL")
ONYX_API_SERVER_URL = "http://api_server:8080" # Adjust if needed
ONYX_SESSION_COOKIE_NAME = os.getenv("ONYX_SESSION_COOKIE_NAME", "fastapiusersauth")

# --- LLM Configuration for JSON Parsing ---
LLM_API_KEY = os.getenv("COHERE_API_KEY")
LLM_API_KEY_FALLBACK = os.getenv("COHERE_API_KEY_FALLBACK")
LLM_API_URL = os.getenv("COHERE_API_URL", "https://api.cohere.com/v1/chat")
LLM_DEFAULT_MODEL = os.getenv("COHERE_DEFAULT_MODEL", "command-r-plus")

DB_POOL = None


# --- Directory for Design Template Images ---
STATIC_DESIGN_IMAGES_DIR = "static_design_images"
os.makedirs(STATIC_DESIGN_IMAGES_DIR, exist_ok=True)

def inspect_list_items_recursively(data_structure: Any, path: str = ""):
    if isinstance(data_structure, dict):
        for key, value in data_structure.items():
            new_path = f"{path}.{key}" if path else key
            if key == "items": # Focus on 'items' keys
                logger.info(f"PDF Deep Inspect: Path: {new_path}, Type: {type(value)}, Is List: {isinstance(value, list)}, Value (first 100): {str(value)[:100]}")
                if not isinstance(value, list) and value is not None:
                    logger.error(f"PDF DEEP ERROR: Non-list 'items' at {new_path}. Type: {type(value)}, Value: {str(value)[:200]}")
            if isinstance(value, (dict, list)):
                inspect_list_items_recursively(value, new_path)
    elif isinstance(data_structure, list):
        for i, item in enumerate(data_structure):
            new_path = f"{path}[{i}]"
            if isinstance(item, (dict, list)):
                inspect_list_items_recursively(item, new_path)

DEFAULT_TRAINING_PLAN_JSON_EXAMPLE_FOR_LLM = """
{
  "mainTitle": "Example Training Program",
  "sections": [
    {
      "id": "№1",
      "title": "Introduction to Topic",
      "totalHours": 5.5,
      "lessons": [
        {
          "title": "Lesson 1.1: Basic Concepts",
          "check": {"type": "test", "text": "Knowledge Test"},
          "contentAvailable": {"type": "yes", "text": "100%"},
          "source": "Internal Documentation",
          "hours": 2.0
        }
      ]
    }
  ],
  "detectedLanguage": "en"
}
"""

DEFAULT_PDF_LESSON_JSON_EXAMPLE_FOR_LLM = """
{
  "lessonTitle": "Example PDF Lesson with Nested Lists",
  "contentBlocks": [
    { "type": "headline", "level": 1, "text": "Main Title of the Lesson" },
    { "type": "paragraph", "text": "This is an introductory paragraph explaining the main concepts." },
    {
      "type": "bullet_list",
      "items": [
        "Top level item 1, demonstrating a simple string item.",
        {
          "type": "bullet_list",
          "iconName": "chevronRight",
          "items": [
            "Nested item A: This is a sub-item.",
            "Nested item B: Another sub-item to show structure.",
            {
              "type": "numbered_list",
              "items": [
                "Further nested numbered item 1.",
                "Further nested numbered item 2."
              ]
            }
          ]
        },
        "Top level item 2, followed by a nested numbered list.",
        {
          "type": "numbered_list",
          "items": [
            "Nested numbered 1: First point in nested ordered list.",
            "Nested numbered 2: Second point."
          ]
        },
        "Top level item 3."
      ]
    },
    { "type": "alert", "alertType": "info", "title": "Important Note", "text": "Alerts can provide contextual information or warnings." },
    {
      "type": "numbered_list",
      "items": [
        "Main numbered point 1.",
        {
          "type": "bullet_list",
          "items": [
            "Sub-bullet C under numbered list.",
            "Sub-bullet D, also useful for breaking down complex points."
          ]
        },
        "Main numbered point 2."
      ]
    },
    { "type": "section_break", "style": "dashed" }
  ],
  "detectedLanguage": "en"
}
"""

async def get_db_pool():
    if DB_POOL is None:
        detail_msg = "Database service not available." # Generic enough for production
        raise HTTPException(status_code=503, detail=detail_msg)
    return DB_POOL

app = FastAPI(title="Custom Extension Backend")

app.mount(f"/{STATIC_DESIGN_IMAGES_DIR}", StaticFiles(directory=STATIC_DESIGN_IMAGES_DIR), name="static_design_images")

try:
    from app.services.pdf_generator import generate_pdf_from_html_template
    from app.core.config import settings
except ImportError:
    logger.warning("Could not import pdf_generator or settings from 'app' module. Using dummy implementations for PDF generation.")
    class DummySettings:
        CUSTOM_FRONTEND_URL = os.environ.get("CUSTOM_FRONTEND_URL", "http://custom_frontend:3001")
    settings = DummySettings()
    async def generate_pdf_from_html_template(template_name: str, context_data: Dict[str, Any], output_filename: str) -> str:
        logger.info(f"PDF Generation Skipped (Dummy Service): Would generate for template {template_name} to {output_filename}")
        dummy_path = os.path.join("/app/tmp_pdf", output_filename)
        os.makedirs(os.path.dirname(dummy_path), exist_ok=True)
        with open(dummy_path, "w") as f: f.write(f"Dummy PDF for {output_filename} using context: {str(context_data)[:200]}")
        return dummy_path

@app.on_event("startup")
async def startup_event():
    global DB_POOL
    logger.info("Custom Backend starting...")
    if not CUSTOM_PROJECTS_DATABASE_URL:
        logger.critical("CRITICAL: CUSTOM_PROJECTS_DATABASE_URL env var not set.")
        return
    try:
        DB_POOL = await asyncpg.create_pool(dsn=CUSTOM_PROJECTS_DATABASE_URL, min_size=1, max_size=10,
                                            init=lambda conn: conn.set_type_codec(
                                                'jsonb',
                                                encoder=lambda value: json.dumps(value) if value is not None else None,
                                                decoder=lambda value: json.loads(value) if value is not None else None,
                                                schema='pg_catalog',
                                                format='text'
                                            ))
        async with DB_POOL.acquire() as connection:
            col_type_row = await connection.fetchrow(
                "SELECT data_type FROM information_schema.columns "
                "WHERE table_name = 'projects' AND column_name = 'microproduct_content';"
            )
            if col_type_row and col_type_row['data_type'] != 'jsonb':
                logger.info("Attempting to alter 'microproduct_content' column type to JSONB...")
                await connection.execute("ALTER TABLE projects ALTER COLUMN microproduct_content TYPE JSONB USING microproduct_content::text::jsonb;")
                logger.info("Successfully altered 'microproduct_content' to JSONB.")

            await connection.execute("""
                CREATE TABLE IF NOT EXISTS projects (
                    id SERIAL PRIMARY KEY,
                    onyx_user_id TEXT NOT NULL,
                    project_name TEXT NOT NULL,
                    product_type TEXT,
                    microproduct_type TEXT,
                    microproduct_name TEXT,
                    microproduct_content JSONB,
                    design_template_id INTEGER REFERENCES design_templates(id) ON DELETE SET NULL,
                    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
                );
            """)
            await connection.execute("ALTER TABLE projects ADD COLUMN IF NOT EXISTS microproduct_name TEXT;")
            await connection.execute("ALTER TABLE projects ADD COLUMN IF NOT EXISTS product_type TEXT;")
            await connection.execute("ALTER TABLE projects ADD COLUMN IF NOT EXISTS microproduct_type TEXT;")
            await connection.execute("ALTER TABLE projects ADD COLUMN IF NOT EXISTS design_template_id INTEGER REFERENCES design_templates(id) ON DELETE SET NULL;")
            await connection.execute("CREATE INDEX IF NOT EXISTS idx_projects_onyx_user_id ON projects(onyx_user_id);")
            await connection.execute("CREATE INDEX IF NOT EXISTS idx_projects_design_template_id ON projects(design_template_id);")
            logger.info("'projects' table ensured and updated.")

            await connection.execute("""
                CREATE TABLE IF NOT EXISTS microproduct_pipelines (
                    id SERIAL PRIMARY KEY,
                    pipeline_name TEXT NOT NULL,
                    pipeline_description TEXT,
                    is_prompts_data_collection BOOLEAN DEFAULT FALSE,
                    is_prompts_data_formating BOOLEAN DEFAULT FALSE,
                    prompts_data_collection JSONB,
                    prompts_data_formating JSONB,
                    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
                );
            """)
            await connection.execute("CREATE INDEX IF NOT EXISTS idx_pipelines_name ON microproduct_pipelines(pipeline_name);")
            logger.info("'microproduct_pipelines' table ensured.")

            await connection.execute("""
                CREATE TABLE IF NOT EXISTS design_templates (
                    id SERIAL PRIMARY KEY,
                    template_name TEXT NOT NULL UNIQUE,
                    template_structuring_prompt TEXT NOT NULL,
                    design_image_path TEXT,
                    microproduct_type TEXT,
                    component_name TEXT NOT NULL,
                    date_created TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
                );
            """)
            await connection.execute("CREATE INDEX IF NOT EXISTS idx_design_templates_name ON design_templates(template_name);")
            await connection.execute("CREATE INDEX IF NOT EXISTS idx_design_templates_mptype ON design_templates(microproduct_type);")
            logger.info("'design_templates' table ensured.")

        logger.info("Custom DB pool initialized & tables ensured.")
    except Exception as e:
        logger.critical(f"Failed to initialize custom DB pool or ensure tables: {e}", exc_info=not IS_PRODUCTION)
        DB_POOL = None

@app.on_event("shutdown")
async def shutdown_event():
    if DB_POOL:
        await DB_POOL.close()
        logger.info("Custom projects DB pool closed.")

effective_origins = list(set(filter(None, [
    "http://localhost:3001",
    "http://143.198.59.56:3001",
    "http://143.198.59.56:8088",
    os.environ.get("WEB_DOMAIN", "http://localhost:3000"),
    settings.CUSTOM_FRONTEND_URL if 'settings' in globals() and hasattr(settings, 'CUSTOM_FRONTEND_URL') else os.environ.get("CUSTOM_FRONTEND_URL", "http://custom_frontend:3001")
])))
if not effective_origins: effective_origins = ["http://localhost:3001"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=effective_origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# --- Pydantic Models ---
class StatusInfo(BaseModel):
    type: str = "unknown"
    text: str = ""
    model_config = {"from_attributes": True}

class LessonDetail(BaseModel):
    title: str
    check: StatusInfo = Field(default_factory=StatusInfo)
    contentAvailable: StatusInfo = Field(default_factory=StatusInfo)
    source: str = ""
    hours: float = 0.0
    model_config = {"from_attributes": True}

class SectionDetail(BaseModel):
    id: str
    title: str
    totalHours: float = 0.0
    lessons: List[LessonDetail] = Field(default_factory=list)
    autoCalculateHours: bool = True
    model_config = {"from_attributes": True}

class TrainingPlanDetails(BaseModel):
    mainTitle: Optional[str] = None
    sections: List[SectionDetail] = Field(default_factory=list)
    detectedLanguage: Optional[str] = None
    model_config = {"from_attributes": True}

ListItem = Union[str, 'HeadlineBlock', 'ParagraphBlock', 'BulletListBlock', 'NumberedListBlock', 'AlertBlock', 'SectionBreakBlock']

class BaseContentBlock(BaseModel):
    type: str
    model_config = {"from_attributes": True}

class HeadlineBlock(BaseContentBlock):
    type: str = "headline"
    level: int = Field(ge=1, le=4)
    text: str
    iconName: Optional[str] = None
    backgroundColor: Optional[str] = None
    textColor: Optional[str] = None
    isImportant: Optional[bool] = Field(default=False, description="Set to true if this headline (typically Level 4) and its immediately following single block (list or paragraph) form an important section to be visually boxed.")

class ParagraphBlock(BaseContentBlock):
    type: str = "paragraph"
    text: str
    isRecommendation: Optional[bool] = Field(default=False, description="Set to true if this paragraph is a 'recommendation' within a numbered list item, to be styled distinctly.")

class BulletListBlock(BaseContentBlock):
    type: str = "bullet_list"
    items: List[ListItem] = Field(default_factory=list)
    iconName: Optional[str] = None

class NumberedListBlock(BaseContentBlock):
    type: str = "numbered_list"
    items: List[ListItem] = Field(default_factory=list)

class AlertBlock(BaseContentBlock):
    type: str = "alert"
    title: Optional[str] = None
    text: str
    alertType: str = "info"
    iconName: Optional[str] = None
    backgroundColor: Optional[str] = None
    borderColor: Optional[str] = None
    textColor: Optional[str] = None
    iconColor: Optional[str] = None

class SectionBreakBlock(BaseContentBlock):
    type: str = "section_break"
    style: Optional[str] = "solid"

AnyContentBlockValue = Union[
    HeadlineBlock, ParagraphBlock, BulletListBlock, NumberedListBlock, AlertBlock, SectionBreakBlock
]

class PdfLessonDetails(BaseModel):
    lessonTitle: str
    contentBlocks: List[AnyContentBlockValue] = Field(default_factory=list)
    detectedLanguage: Optional[str] = None
    model_config = {"from_attributes": True}

class VideoLessonSlideData(BaseModel):
    slideId: str
    slideNumber: int
    slideTitle: str
    displayedText: Optional[str] = None
    imagePath: Optional[str] = None
    videoPath: Optional[str] = None
    voiceoverText: Optional[str] = None
    displayedPictureDescription: Optional[str] = None
    displayedVideoDescription: Optional[str] = None
    model_config = {"from_attributes": True}

class VideoLessonData(BaseModel):
    mainPresentationTitle: str
    slides: List[VideoLessonSlideData] = Field(default_factory=list)
    currentSlideId: Optional[str] = None # To store the active slide from frontend
    detectedLanguage: Optional[str] = None
    model_config = {"from_attributes": True}

MicroProductContentType = Union[TrainingPlanDetails, PdfLessonDetails, VideoLessonData, None]

class DesignTemplateBase(BaseModel):
    template_name: str
    template_structuring_prompt: str
    microproduct_type: str
    component_name: str
    model_config = {"from_attributes": True}

class DesignTemplateCreate(DesignTemplateBase):
    design_image_path: Optional[str] = None

class DesignTemplateUpdate(BaseModel):
    template_name: Optional[str] = None
    template_structuring_prompt: Optional[str] = None
    microproduct_type: Optional[str] = None
    component_name: Optional[str] = None
    design_image_path: Optional[str] = None
    model_config = {"from_attributes": True}

class DesignTemplateResponse(DesignTemplateBase):
    id: int
    design_image_path: Optional[str] = None
    date_created: datetime

class ProjectCreateRequest(BaseModel):
    projectName: str
    design_template_id: int
    microProductName: Optional[str] = None
    aiResponse: str
    model_config = {"from_attributes": True}

class ProjectDB(BaseModel):
    id: int
    onyx_user_id: str
    project_name: str
    product_type: Optional[str] = None
    microproduct_type: Optional[str] = None
    microproduct_name: Optional[str] = None
    microproduct_content: Optional[MicroProductContentType] = None
    design_template_id: Optional[int] = None
    created_at: datetime
    model_config = {"from_attributes": True}

class MicroProductApiResponse(BaseModel):
    name: str
    slug: str
    project_id: int
    design_template_id: int
    component_name: str
    webLinkPath: Optional[str] = None
    pdfLinkPath: Optional[str] = None
    details: Optional[MicroProductContentType] = None
    model_config = {"from_attributes": True}

class ProjectApiResponse(BaseModel):
    id: int
    projectName: str
    projectSlug: str
    microproduct_name: Optional[str] = None
    design_template_name: Optional[str] = None
    design_microproduct_type: Optional[str] = None
    created_at: datetime
    design_template_id: Optional[int] = None
    model_config = {"from_attributes": True}

class ProjectDetailForEditResponse(BaseModel):
    id: int
    projectName: str
    microProductName: Optional[str] = None
    design_template_id: Optional[int] = None
    microProductContent: Optional[MicroProductContentType] = None
    createdAt: Optional[datetime] = None
    design_template_name: Optional[str] = None
    design_component_name: Optional[str] = None
    design_image_path: Optional[str] = None
    model_config = {"from_attributes": True}

class ProjectUpdateRequest(BaseModel):
    projectName: Optional[str] = None
    design_template_id: Optional[int] = None
    microProductName: Optional[str] = None
    microProductContent: Optional[MicroProductContentType] = None
    model_config = {"from_attributes": True}

BulletListBlock.model_rebuild()
NumberedListBlock.model_rebuild()
PdfLessonDetails.model_rebuild()
ProjectDB.model_rebuild()
MicroProductApiResponse.model_rebuild()
ProjectDetailForEditResponse.model_rebuild()
ProjectUpdateRequest.model_rebuild()

class ErrorDetail(BaseModel):
    detail: str

class ProjectsDeleteRequest(BaseModel):
    project_ids: List[int]

class MicroproductPipelineBase(BaseModel):
    pipeline_name: str
    pipeline_description: Optional[str] = None
    is_discovery_prompts: bool = Field(False, alias="is_prompts_data_collection")
    is_structuring_prompts: bool = Field(False, alias="is_prompts_data_formating")
    discovery_prompts_list: Optional[List[str]] = Field(default_factory=list)
    structuring_prompts_list: Optional[List[str]] = Field(default_factory=list)
    model_config = {"from_attributes": True, "populate_by_name": True}

class MicroproductPipelineCreateRequest(MicroproductPipelineBase):
    pass

class MicroproductPipelineUpdateRequest(MicroproductPipelineBase):
    pass

class MicroproductPipelineDBRaw(BaseModel):
    id: int
    pipeline_name: str
    pipeline_description: Optional[str] = None
    is_prompts_data_collection: bool
    is_prompts_data_formating: bool
    prompts_data_collection: Optional[Dict[str, str]] = None
    prompts_data_formating: Optional[Dict[str, str]] = None
    created_at: datetime
    model_config = {"from_attributes": True}

class MicroproductPipelineGetResponse(BaseModel):
    id: int
    pipeline_name: str
    pipeline_description: Optional[str] = None
    is_discovery_prompts: bool
    is_structuring_prompts: bool
    discovery_prompts_list: List[str] = Field(default_factory=list)
    structuring_prompts_list: List[str] = Field(default_factory=list)
    created_at: datetime
    model_config = {"from_attributes": True}

    @classmethod
    def from_db_model(cls, db_model: MicroproductPipelineDBRaw) -> "MicroproductPipelineGetResponse":
        discovery_list = [db_model.prompts_data_collection[key] for key in sorted(db_model.prompts_data_collection.keys(), key=int)] if db_model.prompts_data_collection else []
        structuring_list = [db_model.prompts_data_formating[key] for key in sorted(db_model.prompts_data_formating.keys(), key=int)] if db_model.prompts_data_formating else []
        return cls(
            id=db_model.id,
            pipeline_name=db_model.pipeline_name,
            pipeline_description=db_model.pipeline_description,
            is_discovery_prompts=db_model.is_prompts_data_collection,
            is_structuring_prompts=db_model.is_prompts_data_formating,
            discovery_prompts_list=discovery_list,
            structuring_prompts_list=structuring_list,
            created_at=db_model.created_at
        )

# --- Authentication and Utility Functions ---
async def get_current_onyx_user_id(request: Request) -> str:
    session_cookie_value = request.cookies.get(ONYX_SESSION_COOKIE_NAME)
    if not session_cookie_value:
        dev_user_id = request.headers.get("X-Dev-Onyx-User-ID")
        if dev_user_id: return dev_user_id
        detail_msg = "Authentication required." if IS_PRODUCTION else f"Onyx session cookie '{ONYX_SESSION_COOKIE_NAME}' missing."
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail=detail_msg)

    onyx_user_info_url = f"{ONYX_API_SERVER_URL}/me"
    cookies_to_forward = {ONYX_SESSION_COOKIE_NAME: session_cookie_value}
    try:
        async with httpx.AsyncClient(timeout=10.0) as client:
            response = await client.get(onyx_user_info_url, cookies=cookies_to_forward)
            response.raise_for_status()
            user_data = response.json()
            onyx_user_id = user_data.get("userId") or user_data.get("id")
            if not onyx_user_id:
                logger.error("Could not extract user ID from Onyx user data.")
                detail_msg = "User ID extraction failed." if IS_PRODUCTION else "Could not extract user ID from Onyx."
                raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail=detail_msg)
            return str(onyx_user_id)
    except httpx.HTTPStatusError as e:
        logger.error(f"Onyx API '{onyx_user_info_url}' call failed. Status: {e.response.status_code}, Response: {e.response.text[:500]}", exc_info=not IS_PRODUCTION)
        detail_msg = "Onyx user validation failed." if IS_PRODUCTION else f"Onyx user validation failed ({e.response.status_code})."
        raise HTTPException(status_code=e.response.status_code, detail=detail_msg)
    except httpx.RequestError as e:
        logger.error(f"Error requesting user info from Onyx '{onyx_user_info_url}': {e}", exc_info=not IS_PRODUCTION)
        detail_msg = "Could not connect to Onyx auth service." if IS_PRODUCTION else f"Could not connect to Onyx auth service: {str(e)[:100]}"
        raise HTTPException(status_code=status.HTTP_503_SERVICE_UNAVAILABLE, detail=detail_msg)
    except Exception as e:
        logger.error(f"Unexpected error in get_current_onyx_user_id: {e}", exc_info=not IS_PRODUCTION)
        detail_msg = "Internal user validation error." if IS_PRODUCTION else f"Internal user validation error: {str(e)[:100]}"
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail=detail_msg)

def create_slug(text: Optional[str]) -> str:
    if not text: return "default-slug"
    text_processed = str(text).lower()
    text_processed = re.sub(r'\s+', '-', text_processed)
    text_processed = re.sub(r'[^\wа-яёa-z0-9\-]+', '', text_processed, flags=re.UNICODE | re.IGNORECASE)
    return text_processed or "generated-slug"

LANG_CONFIG = {
    'ru': {'MODULE_KEYWORD': "Модуль",
           'TIME_UNIT_SINGULAR': "час",'TIME_UNIT_DECIMAL_PLURAL': "часа",'TIME_UNIT_GENERAL_PLURAL': "часов",
           'LESSONS_HEADER_KEYWORD': "Уроки", 'TOTAL_TIME_KEYWORD': "Общее время", 'TIME_KEYWORD': "время"},
    'en': {'MODULE_KEYWORD': "Module",
           'TIME_UNIT_SINGULAR': "hour",'TIME_UNIT_DECIMAL_PLURAL': "hours",'TIME_UNIT_GENERAL_PLURAL': "hours",
           'LESSONS_HEADER_KEYWORD': "Lessons", 'TOTAL_TIME_KEYWORD': "Total time", 'TIME_KEYWORD': "time"},
    'uk': {'MODULE_KEYWORD': "Модуль",
           'TIME_UNIT_SINGULAR': "година",
           'TIME_UNIT_DECIMAL_PLURAL': "години",
           'TIME_UNIT_GENERAL_PLURAL': "годин",
           'LESSONS_HEADER_KEYWORD': "Уроки",
           'TOTAL_TIME_KEYWORD': "Загальний час",
           'TIME_KEYWORD': "час"}
}

VIDEO_SCRIPT_LANG_STRINGS = {
    'ru': {
        'VIDEO_LESSON_SCRIPT_DEFAULT_TITLE': 'Видео урок',
        'SLIDE_NUMBER_PREFIX': 'СЛАЙД №',
        'DISPLAYED_TEXT_LABEL': 'Отображаемый текст:',
        'DISPLAYED_IMAGE_LABEL': 'Отображаемая картинка:',
        'DISPLAYED_VIDEO_LABEL': 'Отображаемое видео:',
        'VOICEOVER_TEXT_LABEL': 'Текст озвучки:',
        'NO_SLIDES_TEXT': 'Нет слайдов для отображения.',
        'EMPTY_CONTENT_PLACEHOLDER': '...',
    },
    'en': {
        'VIDEO_LESSON_SCRIPT_DEFAULT_TITLE': 'Video Lesson Script',
        'SLIDE_NUMBER_PREFIX': 'SLIDE №',
        'DISPLAYED_TEXT_LABEL': 'Displayed Text:',
        'DISPLAYED_IMAGE_LABEL': 'Displayed Image:',
        'DISPLAYED_VIDEO_LABEL': 'Displayed Video:',
        'VOICEOVER_TEXT_LABEL': 'Voiceover Text:',
        'NO_SLIDES_TEXT': 'No slides to display.',
        'EMPTY_CONTENT_PLACEHOLDER': '...',
    },
    'uk': {
        'VIDEO_LESSON_SCRIPT_DEFAULT_TITLE': 'Відео урок',
        'SLIDE_NUMBER_PREFIX': 'СЛАЙД №',
        'DISPLAYED_TEXT_LABEL': 'Текст, що відображається:',
        'DISPLAYED_IMAGE_LABEL': 'Зображення, що відображається:',
        'DISPLAYED_VIDEO_LABEL': 'Відео, що відображається:',
        'VOICEOVER_TEXT_LABEL': 'Текст озвучення:',
        'NO_SLIDES_TEXT': 'Немає слайдів для відображення.',
        'EMPTY_CONTENT_PLACEHOLDER': '...',
    }
}

def detect_language(text: str, configs: Dict[str, Dict[str, str]] = LANG_CONFIG) -> str:
    en_score = 0; ru_score = 0; uk_score = 0
    en_config = configs.get('en', {})
    ru_config = configs.get('ru', {})
    uk_config = configs.get('uk', {})

    if en_config.get('MODULE_KEYWORD') and en_config.get('LESSONS_HEADER_KEYWORD') and en_config.get('TOTAL_TIME_KEYWORD'):
        if en_config['MODULE_KEYWORD'] in text and \
           en_config['LESSONS_HEADER_KEYWORD'] in text and \
           en_config['TOTAL_TIME_KEYWORD'] in text:
            en_score += 3
    if ru_config.get('MODULE_KEYWORD') and ru_config.get('LESSONS_HEADER_KEYWORD') and ru_config.get('TOTAL_TIME_KEYWORD'):
        if ru_config['MODULE_KEYWORD'] in text and \
           ru_config['LESSONS_HEADER_KEYWORD'] in text and \
           ru_config['TOTAL_TIME_KEYWORD'] in text:
            ru_score += 3
    if uk_config.get('MODULE_KEYWORD') and uk_config.get('LESSONS_HEADER_KEYWORD') and uk_config.get('TOTAL_TIME_KEYWORD'):
        if uk_config['MODULE_KEYWORD'] in text and \
           uk_config['LESSONS_HEADER_KEYWORD'] in text and \
           uk_config['TOTAL_TIME_KEYWORD'] in text:
            uk_score += 3
    if en_score == 0 and ru_score == 0 and uk_score == 0:
        if en_config.get('MODULE_KEYWORD') and en_config['MODULE_KEYWORD'] in text: en_score +=1
        if ru_config.get('MODULE_KEYWORD') and ru_config['MODULE_KEYWORD'] in text: ru_score +=1
        if uk_config.get('MODULE_KEYWORD') and uk_config['MODULE_KEYWORD'] in text: uk_score +=1
        if en_config.get('TIME_KEYWORD') and en_config['TIME_KEYWORD'] in text: en_score +=1
        if ru_config.get('TIME_KEYWORD') and ru_config['TIME_KEYWORD'] in text: ru_score +=1
        if uk_config.get('TIME_KEYWORD') and uk_config['TIME_KEYWORD'] in text: uk_score +=1
        if en_score == 0 and ru_score == 0 and uk_score == 0:
            en_chars = sum(1 for char_ in text if 'a' <= char_.lower() <= 'z')
            cyrillic_chars = sum(1 for char_ in text if 'а' <= char_.lower() <= 'я' or char_.lower() in ['і', 'ї', 'є', 'ґ'])
            if en_chars > cyrillic_chars and en_chars > 10 :
                 en_score += 0.1
            elif cyrillic_chars > en_chars and cyrillic_chars > 10:
                if uk_score == 0: uk_score += 0.05
                if ru_score == 0: ru_score += 0.05
                ukrainian_specific_chars = sum(1 for char_ in text if char_.lower() in ['і', 'ї', 'є', 'ґ'])
                if ukrainian_specific_chars > 0:
                    uk_score += 0.05 * ukrainian_specific_chars
    if en_score > ru_score and en_score > uk_score: return 'en'
    if ru_score > en_score and ru_score > uk_score: return 'ru'
    if uk_score > en_score and uk_score > ru_score: return 'uk'
    if uk_score > 0 and uk_score >= ru_score and uk_score >= en_score: return 'uk'
    if ru_score > 0 and ru_score >= en_score : return 'ru'
    if en_score > 0 : return 'en'
    logger.warning("detect_language could not reliably determine language. Defaulting to 'en'.")
    return 'en'

def parse_training_plan_from_string(original_content_str: str, main_table_title: str) -> Optional[TrainingPlanDetails]:
    logger.warning("Old 'parse_training_plan_from_string' called. Ensure this is intended for legacy data.")
    return TrainingPlanDetails(mainTitle=f"Content for {main_table_title} (Old Parser)", sections=[], detectedLanguage='ru')

async def parse_ai_response_with_llm(
    ai_response: str,
    project_name: str,
    target_model: Type[BaseModel],
    default_error_model_instance: BaseModel,
    dynamic_instructions: str,
    target_json_example: str
) -> BaseModel:
    # Create a list of API keys to try, filtering out any that are not set
    api_keys_to_try = [key for key in [LLM_API_KEY, LLM_API_KEY_FALLBACK] if key]

    if not api_keys_to_try:
        logger.error(f"LLM_API_KEY not configured for {project_name}. Cannot parse AI response with LLM.")
        return default_error_model_instance

    prompt_message = f"""
You are a highly accurate text-to-JSON parsing assistant. Your task is to convert the *entirety* of the following unstructured text into a single, structured JSON object.
Ensure *all* relevant information from the "Raw text to parse" is included in your JSON output.
Pay close attention to data types: strings should be quoted, numerical values should be numbers, and lists should be arrays. Null values are not permitted for string fields; use an empty string "" instead if text is absent but the field itself is required according to the example structure.
Maintain the original language of the input text for all textual content in the JSON.

Specific Instructions for this Content Type ({target_model.__name__}):
---
{dynamic_instructions}
---

The desired JSON output format is exemplified below. This example is CRUCIAL and your output MUST strictly follow this JSON format and structure.
---
{target_json_example}
---

Raw text to parse:
---
{ai_response}
---

Return ONLY the JSON object corresponding to the parsed text. Do not include any other explanatory text or markdown formatting (like ```json ... ```) around the JSON.
The entire output must be a single, valid JSON object and must include all relevant data found in the input, with textual content in the original language.
    """
    payload = { "model": LLM_DEFAULT_MODEL, "message": prompt_message, "temperature": 0.2 }
    detected_lang_by_rules = detect_language(ai_response)
    last_exception = None

    for i, api_key in enumerate(api_keys_to_try):
        attempt_number = i + 1
        logger.info(f"Attempting LLM call for '{project_name}' using API key #{attempt_number}.")
        headers = { "Authorization": f"Bearer {api_key}", "Content-Type": "application/json" }

        try:
            # --- Attempt the API Call and Full Processing ---
            async with httpx.AsyncClient(timeout=120.0) as client:
                response = await client.post(LLM_API_URL, headers=headers, json=payload)
                response.raise_for_status()
            llm_api_response_data = response.json()

            # --- Process the Response ---
            json_text_output = None
            if "text" in llm_api_response_data: json_text_output = llm_api_response_data["text"]
            elif "chatHistory" in llm_api_response_data and llm_api_response_data["chatHistory"]:
                last_message = next((msg for msg in reversed(llm_api_response_data["chatHistory"]) if msg.get("role") == "CHATBOT"), None)
                if last_message and "message" in last_message: json_text_output = last_message["message"]
            elif llm_api_response_data.get("generations") and isinstance(llm_api_response_data["generations"], list) and llm_api_response_data["generations"][0].get("text"):
                json_text_output = llm_api_response_data["generations"][0]["text"]

            if json_text_output is None:
                # If the response structure is unexpected, raise an error to be caught below
                raise ValueError("LLM response did not contain an expected text field.")

            json_text_output = re.sub(r"^```json\s*|\s*```$", "", json_text_output.strip(), flags=re.MULTILINE)
            
            # --- Parse and Validate the JSON data ---
            parsed_json_data = json.loads(json_text_output)
            logger.debug(f'Cohere response: {parsed_json_data}')

            if 'detectedLanguage' not in parsed_json_data or not parsed_json_data['detectedLanguage']:
                parsed_json_data['detectedLanguage'] = detected_lang_by_rules

            if target_model == TrainingPlanDetails and ('mainTitle' not in parsed_json_data or not parsed_json_data['mainTitle']):
                parsed_json_data['mainTitle'] = project_name
            elif target_model == PdfLessonDetails and ('lessonTitle' not in parsed_json_data or not parsed_json_data['lessonTitle']):
                parsed_json_data['lessonTitle'] = project_name
            
            # If everything is successful, validate and return the model
            validated_model = target_model.model_validate(parsed_json_data)
            logger.info(f"LLM parsing for '{project_name}' succeeded on attempt #{attempt_number}.")
            return validated_model

        except Exception as e:
            # --- Catch ANY exception that occurs during the attempt ---
            last_exception = e
            logger.warning(
                f"LLM parsing attempt #{attempt_number} for '{project_name}' failed with {type(e).__name__}. "
                f"Details: {str(e)[:250]}. Trying next key if available."
            )
            # Continue to the next iteration to try the fallback key, regardless of the error type.
            continue

    # --- Handle Final Failure ---
    # This block is reached only if the loop completes without a successful return.
    logger.error(f"All LLM API call attempts failed for '{project_name}'. Last error: {last_exception}")
    if hasattr(default_error_model_instance, 'detectedLanguage'):
        default_error_model_instance.detectedLanguage = detected_lang_by_rules
    return default_error_model_instance

# --- API Endpoints ---
@app.post("/api/custom/pipelines/add", response_model=MicroproductPipelineDBRaw, status_code=status.HTTP_201_CREATED)
async def add_pipeline(pipeline_data: MicroproductPipelineCreateRequest, pool: asyncpg.Pool = Depends(get_db_pool)):
    discovery_prompts_json_for_db = {str(i+1): prompt for i, prompt in enumerate(pipeline_data.discovery_prompts_list) if prompt.strip()} if pipeline_data.discovery_prompts_list else None
    structuring_prompts_json_for_db = {str(i+1): prompt for i, prompt in enumerate(pipeline_data.structuring_prompts_list) if prompt.strip()} if pipeline_data.structuring_prompts_list else None
    db_is_discovery = pipeline_data.model_fields['is_discovery_prompts'].alias if pipeline_data.model_fields['is_discovery_prompts'].alias else 'is_discovery_prompts'
    db_is_structuring = pipeline_data.model_fields['is_structuring_prompts'].alias if pipeline_data.model_fields['is_structuring_prompts'].alias else 'is_structuring_prompts'
    query = f"""
        INSERT INTO microproduct_pipelines (pipeline_name, pipeline_description, {db_is_discovery}, {db_is_structuring}, prompts_data_collection, prompts_data_formating, created_at)
        VALUES ($1, $2, $3, $4, $5, $6, $7)
        RETURNING id, pipeline_name, pipeline_description, is_prompts_data_collection, is_prompts_data_formating, prompts_data_collection, prompts_data_formating, created_at;
    """
    try:
        async with pool.acquire() as conn:
            current_time = datetime.now(timezone.utc)
            row = await conn.fetchrow(query, pipeline_data.pipeline_name, pipeline_data.pipeline_description,
                                      pipeline_data.is_discovery_prompts, pipeline_data.is_structuring_prompts,
                                      discovery_prompts_json_for_db, structuring_prompts_json_for_db, current_time)
        if not row:
            raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail="Failed to create pipeline.")
        return MicroproductPipelineDBRaw(**dict(row))
    except Exception as e:
        logger.error(f"Error inserting pipeline: {e}", exc_info=not IS_PRODUCTION)
        detail_msg = "An error occurred while adding the pipeline." if IS_PRODUCTION else f"DB error on pipeline insert: {str(e)}"
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail=detail_msg)

@app.get("/api/custom/pipelines", response_model=List[MicroproductPipelineGetResponse])
async def get_pipelines(pool: asyncpg.Pool = Depends(get_db_pool)):
    query = "SELECT id, pipeline_name, pipeline_description, is_prompts_data_collection, is_prompts_data_formating, prompts_data_collection, prompts_data_formating, created_at FROM microproduct_pipelines ORDER BY created_at DESC;"
    try:
        async with pool.acquire() as conn: rows = await conn.fetch(query)
        pipelines_list = [MicroproductPipelineGetResponse.from_db_model(MicroproductPipelineDBRaw(**dict(row))) for row in rows]
        return pipelines_list
    except Exception as e:
        logger.error(f"Error fetching pipelines: {e}", exc_info=not IS_PRODUCTION)
        detail_msg = "An error occurred while fetching pipelines." if IS_PRODUCTION else f"DB error fetching pipelines: {str(e)}"
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail=detail_msg)

@app.get("/api/custom/pipelines/{pipeline_id}", response_model=MicroproductPipelineGetResponse)
async def get_pipeline(pipeline_id: int, pool: asyncpg.Pool = Depends(get_db_pool)):
    query = "SELECT id, pipeline_name, pipeline_description, is_prompts_data_collection, is_prompts_data_formating, prompts_data_collection, prompts_data_formating, created_at FROM microproduct_pipelines WHERE id = $1;"
    try:
        async with pool.acquire() as conn: row = await conn.fetchrow(query, pipeline_id)
        if not row:
            raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Pipeline not found.")
        return MicroproductPipelineGetResponse.from_db_model(MicroproductPipelineDBRaw(**dict(row)))
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Error fetching pipeline {pipeline_id}: {e}", exc_info=not IS_PRODUCTION)
        detail_msg = "An error occurred while fetching the pipeline." if IS_PRODUCTION else f"DB error fetching pipeline: {str(e)}"
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail=detail_msg)

@app.put("/api/custom/pipelines/update/{pipeline_id}", response_model=MicroproductPipelineDBRaw)
async def update_pipeline(pipeline_id: int, pipeline_data: MicroproductPipelineUpdateRequest, pool: asyncpg.Pool = Depends(get_db_pool)):
    discovery_prompts_json_for_db = {str(i+1): prompt for i, prompt in enumerate(pipeline_data.discovery_prompts_list) if prompt.strip()} if pipeline_data.discovery_prompts_list else None
    structuring_prompts_json_for_db = {str(i+1): prompt for i, prompt in enumerate(pipeline_data.structuring_prompts_list) if prompt.strip()} if pipeline_data.structuring_prompts_list else None
    db_is_discovery = pipeline_data.model_fields['is_discovery_prompts'].alias if pipeline_data.model_fields['is_discovery_prompts'].alias else 'is_discovery_prompts'
    db_is_structuring = pipeline_data.model_fields['is_structuring_prompts'].alias if pipeline_data.model_fields['is_structuring_prompts'].alias else 'is_structuring_prompts'
    query = f"""
        UPDATE microproduct_pipelines SET pipeline_name = $1, pipeline_description = $2, {db_is_discovery} = $3, {db_is_structuring} = $4, prompts_data_collection = $5, prompts_data_formating = $6
        WHERE id = $7 RETURNING id, pipeline_name, pipeline_description, is_prompts_data_collection, is_prompts_data_formating, prompts_data_collection, prompts_data_formating, created_at;
    """
    try:
        async with pool.acquire() as conn:
            row = await conn.fetchrow(query, pipeline_data.pipeline_name, pipeline_data.pipeline_description,
                                      pipeline_data.is_discovery_prompts, pipeline_data.is_structuring_prompts,
                                      discovery_prompts_json_for_db, structuring_prompts_json_for_db, pipeline_id)
        if not row:
            raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Pipeline not found or update failed.")
        return MicroproductPipelineDBRaw(**dict(row))
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Error updating pipeline {pipeline_id}: {e}", exc_info=not IS_PRODUCTION)
        detail_msg = "An error occurred while updating the pipeline." if IS_PRODUCTION else f"DB error on pipeline update: {str(e)}"
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail=detail_msg)

@app.delete("/api/custom/pipelines/delete/{pipeline_id}", status_code=status.HTTP_200_OK)
async def delete_pipeline(pipeline_id: int, pool: asyncpg.Pool = Depends(get_db_pool)):
    query = "DELETE FROM microproduct_pipelines WHERE id = $1 RETURNING id;"
    try:
        async with pool.acquire() as conn: deleted_id = await conn.fetchval(query, pipeline_id)
        if deleted_id is None:
            raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Pipeline not found.")
        return {"detail": f"Successfully deleted pipeline with ID {pipeline_id}."}
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Error deleting pipeline {pipeline_id}: {e}", exc_info=not IS_PRODUCTION)
        detail_msg = "An error occurred while deleting the pipeline." if IS_PRODUCTION else f"DB error on pipeline deletion: {str(e)}"
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail=detail_msg)

@app.post("/api/custom/design_templates/upload_image", responses={200: {"description": "Image uploaded successfully", "content": {"application/json": {"example": {"file_path": f"/{STATIC_DESIGN_IMAGES_DIR}/your_image_name.png"}}}},400: {"description": "Invalid file type or other error", "model": ErrorDetail},413: {"description": "File too large", "model": ErrorDetail}})
async def upload_design_template_image(file: UploadFile = File(...)):
    allowed_extensions = {".png", ".jpg", ".jpeg", ".gif", ".webp"}; max_file_size = 5 * 1024 * 1024
    file_content = await file.read()
    if len(file_content) > max_file_size:
        detail_msg = "File too large." if IS_PRODUCTION else f"File too large. Max size {max_file_size // (1024*1024)}MB."
        raise HTTPException(status_code=status.HTTP_413_REQUEST_ENTITY_TOO_LARGE, detail=detail_msg)
    await file.seek(0)
    file_extension = os.path.splitext(file.filename)[1].lower() if file.filename else ".png"
    if file_extension not in allowed_extensions:
        detail_msg = "Invalid file type." if IS_PRODUCTION else f"Invalid file type. Allowed: {', '.join(allowed_extensions)}"
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail=detail_msg)
    safe_filename_base = str(uuid.uuid4()); unique_filename = f"{safe_filename_base}{file_extension}"; file_path_on_disk = os.path.join(STATIC_DESIGN_IMAGES_DIR, unique_filename)
    try:
        with open(file_path_on_disk, "wb") as buffer: shutil.copyfileobj(file.file, buffer)
    except Exception as e:
        logger.error(f"Error saving design image: {e}", exc_info=not IS_PRODUCTION)
        detail_msg = "Could not save image." if IS_PRODUCTION else f"Could not save image: {str(e)}"
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail=detail_msg)
    finally:
        await file.close()
    web_accessible_path = f"/{STATIC_DESIGN_IMAGES_DIR}/{unique_filename}"
    return {"file_path": web_accessible_path}

@app.post("/api/custom/design_templates/add", response_model=DesignTemplateResponse, status_code=status.HTTP_201_CREATED)
async def add_design_template(template_data: DesignTemplateCreate, pool: asyncpg.Pool = Depends(get_db_pool)):
    query = "INSERT INTO design_templates (template_name, template_structuring_prompt, design_image_path, microproduct_type, component_name, date_created) VALUES ($1, $2, $3, $4, $5, $6) RETURNING id, template_name, template_structuring_prompt, design_image_path, microproduct_type, component_name, date_created;"
    try:
        async with pool.acquire() as conn:
            current_time = datetime.now(timezone.utc)
            row = await conn.fetchrow(query, template_data.template_name, template_data.template_structuring_prompt, template_data.design_image_path, template_data.microproduct_type, template_data.component_name, current_time)
        if not row:
            raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail="Failed to create design template.")
        return DesignTemplateResponse(**dict(row))
    except asyncpg.exceptions.UniqueViolationError:
        detail_msg = "Design template with this name already exists." if IS_PRODUCTION else f"Design template with name '{template_data.template_name}' already exists."
        raise HTTPException(status_code=status.HTTP_409_CONFLICT, detail=detail_msg)
    except Exception as e:
        logger.error(f"Error inserting design template: {e}", exc_info=not IS_PRODUCTION)
        detail_msg = "An error occurred while adding design template." if IS_PRODUCTION else f"DB error on design template insert: {str(e)}"
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail=detail_msg)

@app.get("/api/custom/design_templates", response_model=List[DesignTemplateResponse])
async def get_design_templates_list(pool: asyncpg.Pool = Depends(get_db_pool)):
    query = "SELECT id, template_name, template_structuring_prompt, design_image_path, microproduct_type, component_name, date_created FROM design_templates ORDER BY date_created DESC;"
    try:
        async with pool.acquire() as conn: rows = await conn.fetch(query)
        return [DesignTemplateResponse(**dict(row)) for row in rows]
    except Exception as e:
        logger.error(f"Error fetching design templates: {e}", exc_info=not IS_PRODUCTION)
        detail_msg = "An error occurred while fetching design templates." if IS_PRODUCTION else f"DB error fetching design templates: {str(e)}"
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail=detail_msg)

@app.get("/api/custom/design_templates/{template_id}", response_model=DesignTemplateResponse)
async def get_design_template(template_id: int, pool: asyncpg.Pool = Depends(get_db_pool)):
    query = "SELECT id, template_name, template_structuring_prompt, design_image_path, microproduct_type, component_name, date_created FROM design_templates WHERE id = $1;"
    try:
        async with pool.acquire() as conn: row = await conn.fetchrow(query, template_id)
        if not row:
            raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Design template not found")
        return DesignTemplateResponse(**dict(row))
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Error fetching design template {template_id}: {e}", exc_info=not IS_PRODUCTION)
        detail_msg = "An error occurred while fetching design template." if IS_PRODUCTION else f"DB error fetching design template: {str(e)}"
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail=detail_msg)

@app.put("/api/custom/design_templates/update/{template_id}", response_model=DesignTemplateResponse)
async def update_design_template(template_id: int, template_data: DesignTemplateUpdate, pool: asyncpg.Pool = Depends(get_db_pool)):
    try:
        async with pool.acquire() as conn:
            existing_template_row = await conn.fetchrow("SELECT * FROM design_templates WHERE id = $1", template_id)
            if not existing_template_row:
                raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Design template not found")

        update_fields = template_data.model_dump(exclude_unset=True)
        if not update_fields:
            return DesignTemplateResponse(**dict(existing_template_row))

        set_clauses = []; update_values = []; i = 1
        for key, value in update_fields.items(): set_clauses.append(f"{key} = ${i}"); update_values.append(value); i += 1
        update_values.append(template_id)
        query = f"UPDATE design_templates SET {', '.join(set_clauses)} WHERE id = ${i} RETURNING id, template_name, template_structuring_prompt, design_image_path, microproduct_type, component_name, date_created;"

        async with pool.acquire() as conn: row = await conn.fetchrow(query, *update_values)
        if not row:
            raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail="Failed to update design template.")
        return DesignTemplateResponse(**dict(row))
    except asyncpg.exceptions.UniqueViolationError:
        detail_msg = "Update would violate a unique constraint (e.g., template name)."
        raise HTTPException(status_code=status.HTTP_409_CONFLICT, detail=detail_msg)
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Error updating design template {template_id}: {e}", exc_info=not IS_PRODUCTION)
        detail_msg = "An error occurred while updating design template." if IS_PRODUCTION else f"DB error on design template update: {str(e)}"
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail=detail_msg)

@app.delete("/api/custom/design_templates/delete/{template_id}", status_code=status.HTTP_200_OK)
async def delete_design_template(template_id: int, pool: asyncpg.Pool = Depends(get_db_pool)):
    try:
        async with pool.acquire() as conn:
            template_to_delete = await conn.fetchrow("SELECT design_image_path FROM design_templates WHERE id = $1", template_id)
            if not template_to_delete:
                raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Design template not found.")

            if template_to_delete["design_image_path"]:
                filename_only = os.path.basename(template_to_delete["design_image_path"])
                full_image_path = os.path.join(STATIC_DESIGN_IMAGES_DIR, filename_only)
                if os.path.exists(full_image_path):
                    try:
                        os.remove(full_image_path)
                        logger.info(f"Successfully deleted image file: {full_image_path}")
                    except OSError as e_img:
                        logger.warning(f"Error deleting image file {full_image_path}: {e_img}. Continuing with DB record deletion.", exc_info=not IS_PRODUCTION)
                else:
                    logger.warning(f"Image file not found for deletion: {full_image_path}")
            deleted_count_status = await conn.execute("DELETE FROM design_templates WHERE id = $1", template_id)
        if deleted_count_status == "DELETE 0":
            raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Design template not found during delete, or already deleted.")
        return {"detail": f"Successfully initiated deletion for design template with ID {template_id}."}
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Error deleting design template {template_id}: {e}", exc_info=not IS_PRODUCTION)
        detail_msg = "An error occurred during design template deletion." if IS_PRODUCTION else f"DB error on design template deletion: {str(e)}"
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail=detail_msg)

ALLOWED_MICROPRODUCT_TYPES_FOR_DESIGNS = [
    "Training Plan", "PDF Lesson"
]
COMPONENT_NAME_TRAINING_PLAN = "TrainingPlanTable"
COMPONENT_NAME_PDF_LESSON = "PdfLessonDisplay"
COMPONENT_NAME_VIDEO_LESSON = "VideoLessonDisplay"

@app.get("/api/custom/microproduct_types", response_model=List[str])
async def get_allowed_microproduct_types_list_for_design_templates():
    return ALLOWED_MICROPRODUCT_TYPES_FOR_DESIGNS

# --- Project and MicroProduct Endpoints ---
@app.post("/api/custom/projects/add", response_model=ProjectDB, status_code=status.HTTP_201_CREATED)
async def add_project_to_custom_db(project_data: ProjectCreateRequest, onyx_user_id: str = Depends(get_current_onyx_user_id), pool: asyncpg.Pool = Depends(get_db_pool)):
    try:
        selected_design_template: Optional[DesignTemplateResponse] = None
        async with pool.acquire() as conn:
            design_row = await conn.fetchrow("SELECT * FROM design_templates WHERE id = $1", project_data.design_template_id)
            if not design_row:
                detail_msg = "Design template not found." if IS_PRODUCTION else f"Design Template with ID {project_data.design_template_id} not found."
                raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail=detail_msg)
            selected_design_template = DesignTemplateResponse(**dict(design_row))

        db_microproduct_name_to_store = project_data.microProductName if project_data.microProductName and project_data.microProductName.strip() else selected_design_template.template_name

        target_content_model: Type[BaseModel]
        default_error_instance: BaseModel
        llm_json_example: str
        component_specific_instructions: str

        # Using the long specific instructions from the original user prompt
        if selected_design_template.component_name == COMPONENT_NAME_PDF_LESSON:
            target_content_model = PdfLessonDetails
            default_error_instance = PdfLessonDetails(lessonTitle=f"LLM Parsing Error for {project_data.projectName}", contentBlocks=[])
            llm_json_example = selected_design_template.template_structuring_prompt or DEFAULT_PDF_LESSON_JSON_EXAMPLE_FOR_LLM
            component_specific_instructions = """
            You are an expert text-to-JSON parsing assistant for 'PDF Lesson' content.
    Your output MUST be a single, valid JSON object. Strictly follow the JSON structure provided in the example.

    **Overall Goal:** Convert the *entirety* of the "Raw text to parse" into structured JSON. Capture all information and hierarchical relationships. Maintain original language.

    **Global Fields:**
    1.  `lessonTitle` (string): Main lesson title for the document.
    2.  `contentBlocks` (array): Ordered array of content block objects that form the body of the lesson.
    3.  `detectedLanguage` (string): e.g., "en", "ru".

    **Content Block Instructions (`contentBlocks` array items):** Each object has a `type`.

    1.  **`type: "headline"`**
        * `level` (integer):
            * `1`: Reserved for the main title of a document, usually handled by `lessonTitle`. If the input text contains a clear main title that is also part of the body, use level 1.
            * `2`: Major Section Header (e.g., "Understanding X", "Typical Mistakes"). These should use `iconName: "info"`.
            * `3`: Sub-section Header or Mini-Title. When used as a mini-title inside a numbered list item (see `numbered_list` instruction below), it should not have an icon.
            * `4`: Special Call-outs (e.g., "Module Goal", "Important Note"). Typically use `iconName: "target"` for goals, or lesson objectives.
        * `text` (string): Headline text.
        * `iconName` (string, optional): Based on level and context as described above.
        * `isImportant` (boolean, optional): Set to `true` for Level 3 and 4 headlines like "Lesson Goal" or "Lesson Target". If `true`, this headline AND its *immediately following single block* will be grouped into a visually distinct highlighted box. Do NOT set this to 'true' for sections like 'Conclusion', 'Key Takeaways' or any other section that comes in the very end of the lesson. Do not use this as 'true' for more than 1 section.


    2.  **`type: "paragraph"`**
        * `text` (string): Full paragraph text.
        * `isRecommendation` (boolean, optional): If this paragraph functions as a "Recommendation" (often prefixed with "Рекомендация:" or "Recommendation:"), set this to `true`. Or set this to true if it is a concluding thoght in the very end of the lesson (this case applies only to one VERY last thought). Cannot be 'true' for ALL the elements in one list. HAS to be 'true' if starts with 'Recommendation' or similar and isn't a part of the buller list.

    3.  **`type: "bullet_list"`**
        * `items` (array of `ListItem`): Can be strings or other nested content blocks.
        * `iconName` (string, optional): Default to `chevronRight`. If this bullet list is acting as a structural container for a numbered list item's content (mini-title + description), set `iconName: "none"`.

    4.  **`type: "numbered_list"`**
        * `items` (array of `ListItem`):
            * Can be simple strings for basic numbered points.
            * For complex items that should appear as a single visual "box" with a mini-title, description, and optional recommendation:
                * Each such item in the `numbered_list`'s `items` array should itself be a `bullet_list` block with `iconName: "none"`.
                * The `items` of this *inner* `bullet_list` should then be:
                    1. A `headline` block (e.g., `level: 3`, `text: "Mini-Title Text"`, no icon).
                    2. A `paragraph` block (for the main descriptive text).
                    3. Optionally, another `paragraph` block with `isRecommendation: true`.
            * Only use round numbers in this list, no a1, a2 or 1.1, 1.2.

    **General Parsing Rules & Icon Names:**
    * Ensure correct `level` for headlines. Section headers are `level: 2`. Mini-titles in lists are `level: 3`.
    * Icons: `info` for H2. `target` or `award` for H4 `isImportant`. `chevronRight` for general bullet lists. No icons for H3 mini-titles.
    * Permissible Icon Names: `info`, `target`, `award`, `chevronRight`, `bullet-circle`, `compass`.
    * Make sure to not have any tags in '<>' brackets (e.g. '<u>') in the list elements, UNLESS it is logically a part of the lesson.
    * Do NOT remove the '**' from the text, treat it as an equal part of the text.

    Return ONLY the JSON object. 
            """
        elif selected_design_template.component_name == COMPONENT_NAME_TRAINING_PLAN:
            target_content_model = TrainingPlanDetails
            default_error_instance = TrainingPlanDetails(mainTitle=f"LLM Parsing Error for {project_data.projectName}", sections=[])
            llm_json_example = selected_design_template.template_structuring_prompt or DEFAULT_TRAINING_PLAN_JSON_EXAMPLE_FOR_LLM
            component_specific_instructions = """
            For 'Training Plan' content:
            - Extract the 'mainTitle'.
            - Each module becomes a 'section' object with 'id' (e.g., '№1'. It shouldn't be 'Module 1', strictly format it as '№X'), 'title', 'totalHours', and 'lessons' array.
            - Each lesson in a module becomes a 'lesson' object with 'title', 'check', 'contentAvailable', 'source', and 'hours'.
            - The 'title' of the lesson must not start with 'Lesson 1' or 'Lesson 1.1' or anything similar.
            - For 'check' object: 'type' (e.g., 'test', 'practice', 'none') and 'text'. 'text' must be original language, default to 'Test' if no 'text' but the type is 'test'. If the 'raw text' has mentions of the knowlage assesment and it is not none, then you cannot leave this field blank.
            - For 'contentAvailable' object: 'type' ('yes', 'no', 'percentage') and 'text'. 'text' must be original language. Default to {"type": "yes", "text": "100%"} if not mentioned.
            - Ensure all module numbers, titles, lesson details, hours, and source texts are extracted in their original language.
            - Ensure 'detectedLanguage' field is present (e.g., "en", "ru").
            """
        elif selected_design_template.component_name == COMPONENT_NAME_VIDEO_LESSON:
            target_content_model = VideoLessonData
            default_error_instance = VideoLessonData(
                mainPresentationTitle=f"LLM Parsing Error for {project_data.projectName}",
                slides=[]
            )
            llm_json_example = selected_design_template.template_structuring_prompt or """
            {
  "mainPresentationTitle": "Курс: Обучение для рекрутера",
  "slides": [
    {
      "slideId": "slide_1_znakomstvo",
      "slideNumber": 1,
      "slideTitle": "Знакомство",
      "displayedText": "Знакомимся с основами рекрутинга и ключевыми обязанностями.",
      "displayedPictureDescription": "Улыбающиеся профессионалы в современном офисе.",
      "displayedVideoDescription": "Анимация воронки рекрутинга: поиск, отбор, интервью, оффер.",
      "voiceoverText": "Приветствую вас на курсе 'Обучение для рекрутера'! Начнем с основ. Этот модуль посвящен ключевым аспектам профессии."
    },
    {
      "slideId": "slide_2_instrumenty",
      "slideNumber": 2,
      "slideTitle": "Инструменты Рекрутера",
      "displayedText": "Рассматриваем основные инструменты для современного рекрутера.",
      "displayedPictureDescription": "Коллаж логотипов: LinkedIn, ATS, GitHub, поиск, календарь.",
      "displayedVideoDescription": "Анимация кликов по иконкам инструментов с краткими пояснениями их функций.",
      "voiceoverText": "Для успеха рекрутеру нужен арсенал инструментов. Рассмотрим основные категории и их назначение. Эффективное использование повысит вашу производительность."
    }
  ],
  "detectedLanguage": "ru"
}
            """
            component_specific_instructions = """
            You are an expert text-to-JSON parsing assistant. Your task is to convert the provided presentation slide content, which is in a specific structured text format, into a perfectly structured JSON object.

Your output MUST be a single, valid JSON object, and it must strictly adhere to the exact structure provided in the example JSON you have been given separately. Do not include any additional text, explanations, or conversational fillers outside the JSON object.

Input Text Structure and Extraction Rules:
The input text will describe a presentation or video lesson. The content within the fields (like slide titles, descriptions) can be in various languages (e.g., Ukrainian, Russian, English). You must extract the content exactly as it appears, preserving its original language, including any original formatting like line breaks within the content where present (e.g., in "Відображуваний Текст").

Overall Presentation Title:

This will be identified by a header like "Загальний Заголовок Курсу:" (or its equivalent in other languages like "ОБЩИЙ ЗАГОЛОВОК КУРСА:" or "Overall Course Title:").
Extract the text that immediately follows this bolded header as the value for the mainPresentationTitle field.
Individual Slides:

Each slide's information is clearly marked by consistently bolded headers.
slideNumber (integer): Look for "Номер Слайда:" (or equivalent, e.g., "Номер Слайда:", "Slide Number:"). Extract the numerical value that immediately follows this bolded header.
slideTitle (string): Look for "Заголовок Слайда:" (or equivalent, e.g., "Заголовок Слайда:", "Slide Title:"). Extract the text that immediately follows this bolded header.
displayedText (string): Look for "Відображуваний Текст:" (or equivalent, e.g., "Відображуваний Текст:", "Displayed Text:"). Extract all text that immediately follows this bolded header, up until the next bolded header. Preserve any internal line breaks or numbering.
displayedPictureDescription (string): Look for "Опис Зображення:" (or equivalent, e.g., "Опис Зображення:", "Image Description:"). Extract the text that immediately follows this bolded header, up until the next bolded header.
displayedVideoDescription (string): Look for "Опис Відео:" (or equivalent, e.g., "Опис Відео:", "Video Description:"). Extract the text that immediately follows this bolded header, up until the next bolded header.
voiceoverText (string): Look for "Текст Озвучення:" (or equivalent, e.g., "Текст Озвучення:", "Voiceover Text:"). Extract the text that immediately follows this bolded header, up until the next bolded header or the end of the slide's content block.
slideId Generation:

For each slide, you must generate a unique slideId.
This ID should be a concatenation of the literal string "slide_", the slideNumber, and a simplified, lowercase version of the slideTitle.
To simplify the slideTitle for the ID, convert it to lowercase and replace all spaces with underscores (_). Remove any punctuation or special characters from the simplified title part of the ID. If the title is very long, consider using only the first few words to keep the ID concise, but ensure uniqueness. For example:
slideNumber: 1, slideTitle: "Вступ" -> slideId: "slide_1_вступ"
slideNumber: 2, slideTitle: "Питання 1" -> slideId: "slide_2_питання_1"
slideNumber: 3, slideTitle: "Варіанти відповіді" -> slideId: "slide_3_варіанти_відповіді"
slideNumber: 4, slideTitle: "Пояснення до Питання 1" -> slideId: "slide_4_пояснення_до_питання_1"
detectedLanguage (string):

This will be identified by a header like "Language of Content:" (or its equivalent, e.g., "Язык Контента:", "Мова Контенту:").
Extract the two-letter ISO 639-1 language code (e.g., "uk", "ru", "en") that immediately follows this label.
If this "Language of Content:" label is missing from the input, infer the primary language from the majority of the content (specifically the mainPresentationTitle and slideTitle fields) and use the appropriate two-letter ISO 639-1 code.
Key Parsing Rules & Constraints for 100% Reliability:

Header Recognition: Always identify fields by their bolded headers (e.g., "Номер Слайда:", "Заголовок Слайда:"). These bolded headers consistently precede the data you need to extract.
Exact Text Extraction: All extracted text content must be preserved exactly as it appears in the input, including its original capitalization, punctuation, and line breaks within the content block for a given field.
Field Presence: If a field's bolded header is present in the input but the text following it is empty before the next header, the corresponding JSON field should be an empty string (""). Do not use null or omit fields that are defined as strings in the target schema if their labels are present in the input.
Sequential Parsing: Process the text sequentially, extracting content associated with each bolded header until the next bolded header is encountered.
Return ONLY the JSON object.
            """
        else:
            logger.warning(f"Unknown component_name '{selected_design_template.component_name}' for DT ID {selected_design_template.id}. Defaulting to TrainingPlanDetails for parsing.")
            target_content_model = TrainingPlanDetails
            default_error_instance = TrainingPlanDetails(mainTitle=f"LLM Config Error for {project_data.projectName}", sections=[])
            llm_json_example = DEFAULT_TRAINING_PLAN_JSON_EXAMPLE_FOR_LLM
            component_specific_instructions = "Parse the content according to the JSON example provided."


        if hasattr(default_error_instance, 'detectedLanguage'):
                default_error_instance.detectedLanguage = detect_language(project_data.aiResponse)

        parsed_content_model_instance = await parse_ai_response_with_llm(
            ai_response=project_data.aiResponse,
            project_name=project_data.projectName,
            target_model=target_content_model,
            default_error_model_instance=default_error_instance,
            dynamic_instructions=component_specific_instructions,
            target_json_example=llm_json_example
        )

        logger.info(f"LLM Parsing Result Type: {type(parsed_content_model_instance).__name__}")
        logger.info(f"LLM Parsed Content (first 200 chars): {str(parsed_content_model_instance.model_dump_json())[:200]}") # Use model_dump_json()

        content_to_store_for_db = parsed_content_model_instance.model_dump(mode='json', exclude_none=True)
        derived_product_type = selected_design_template.microproduct_type
        derived_microproduct_type = selected_design_template.template_name

        logger.info(f"Content prepared for DB storage (first 200 chars of JSON): {str(content_to_store_for_db)[:200]}")

        insert_query = "INSERT INTO projects (onyx_user_id, project_name, product_type, microproduct_type, microproduct_name, microproduct_content, design_template_id, created_at) VALUES ($1, $2, $3, $4, $5, $6, $7, NOW()) RETURNING id, onyx_user_id, project_name, product_type, microproduct_type, microproduct_name, microproduct_content, design_template_id, created_at;"

        async with pool.acquire() as conn:
            row = await conn.fetchrow(insert_query, onyx_user_id, project_data.projectName, derived_product_type, derived_microproduct_type, db_microproduct_name_to_store, content_to_store_for_db, project_data.design_template_id)
        if not row:
            raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail="Failed to create project entry.")

        db_content_dict = row["microproduct_content"]
        final_content_for_response: Optional[MicroProductContentType] = None
        if db_content_dict and isinstance(db_content_dict, dict):
            component_name_from_db = selected_design_template.component_name
            try:
                if component_name_from_db == COMPONENT_NAME_PDF_LESSON:
                    final_content_for_response = PdfLessonDetails(**db_content_dict)
                    logger.info("Re-parsed as PdfLessonDetails.")
                elif component_name_from_db == COMPONENT_NAME_TRAINING_PLAN:
                    final_content_for_response = TrainingPlanDetails(**db_content_dict)
                    logger.info("Re-parsed as TrainingPlanDetails.")
                elif component_name_from_db == COMPONENT_NAME_VIDEO_LESSON:
                    final_content_for_response = VideoLessonData(**db_content_dict)
                    logger.info("Re-parsed as VideoLessonData.")
                else:
                    logger.warning(f"Unknown component_name '{component_name_from_db}' when re-parsing content from DB on add. Attempting generic TrainingPlanDetails fallback.")
                    final_content_for_response = TrainingPlanDetails(**db_content_dict)
            except Exception as e_parse:
                logger.error(f"Error parsing content from DB on add (proj ID {row['id']}): {e_parse}", exc_info=not IS_PRODUCTION)

        return ProjectDB(
            id=row["id"], onyx_user_id=row["onyx_user_id"], project_name=row["project_name"],
            product_type=row["product_type"], microproduct_type=row["microproduct_type"],
            microproduct_name=row["microproduct_name"], microproduct_content=final_content_for_response,
            design_template_id=row["design_template_id"], created_at=row["created_at"]
        )
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Error inserting project: {e}", exc_info=not IS_PRODUCTION)
        detail_msg = "An error occurred while adding project." if IS_PRODUCTION else f"DB error on project insert: {str(e)}"
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail=detail_msg)


@app.get("/api/custom/projects/names", response_model=List[str], summary="Get unique project names for the user")
async def get_distinct_project_names_for_user(onyx_user_id: str = Depends(get_current_onyx_user_id), pool: asyncpg.Pool = Depends(get_db_pool)):
    query = """
        SELECT DISTINCT project_name
        FROM projects
        WHERE onyx_user_id = $1
        ORDER BY project_name ASC;
    """
    try:
        async with pool.acquire() as conn:
            rows = await conn.fetch(query, onyx_user_id)
        project_names: List[str] = [str(row["project_name"]) for row in rows if row["project_name"] is not None]
        return project_names
    except Exception as e:
        logger.error(f"Error fetching distinct project names for user {onyx_user_id}: {e}", exc_info=not IS_PRODUCTION)
        detail_msg = "An error occurred while fetching project names." if IS_PRODUCTION else f"Database error while fetching project names: {str(e)}"
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail=detail_msg)

@app.get("/api/custom/projects/{project_id}/edit", response_model=ProjectDetailForEditResponse)
async def get_project_details_for_edit(project_id: int, onyx_user_id: str = Depends(get_current_onyx_user_id), pool: asyncpg.Pool = Depends(get_db_pool)):
    query = """
        SELECT
            p.id, p.project_name, p.microproduct_name, p.microproduct_content, p.created_at,
            p.design_template_id, dt.template_name as design_template_name,
            dt.component_name as design_component_name,
            dt.design_image_path as design_image_path,
            p.product_type, p.microproduct_type
        FROM projects p
        LEFT JOIN design_templates dt ON p.design_template_id = dt.id
        WHERE p.id = $1 AND p.onyx_user_id = $2;
    """
    try:
        async with pool.acquire() as conn: row = await conn.fetchrow(query, project_id, onyx_user_id)
        if not row:
            raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Project not found.")

        row_dict = dict(row)
        db_content_json = row_dict.get("microproduct_content")
        parsed_content_for_response: Optional[MicroProductContentType] = None
        component_name = row_dict.get("design_component_name")

        if db_content_json and isinstance(db_content_json, dict):
            try:
                if component_name == COMPONENT_NAME_PDF_LESSON:
                    parsed_content_for_response = PdfLessonDetails(**db_content_json)
                elif component_name == COMPONENT_NAME_TRAINING_PLAN:
                    parsed_content_for_response = TrainingPlanDetails(**db_content_json)
                elif component_name == COMPONENT_NAME_VIDEO_LESSON:
                    parsed_content_for_response = VideoLessonData(**db_content_json)
                else:
                    logger.warning(f"Unknown component_name '{component_name}' for project {project_id}. Attempting fallbacks.", exc_info=not IS_PRODUCTION)
                    try: parsed_content_for_response = TrainingPlanDetails(**db_content_json)
                    except:
                        try: parsed_content_for_response = PdfLessonDetails(**db_content_json)
                        except Exception as e_parse_fallback: logger.error(f"Fallback parsing failed for project {project_id}: {e_parse_fallback}", exc_info=not IS_PRODUCTION)
            except Exception as e_main_parse:
                logger.error(f"Pydantic validation error for DB JSON (project {project_id}, component {component_name}): {e_main_parse}", exc_info=not IS_PRODUCTION)
        elif isinstance(db_content_json, str) and component_name == COMPONENT_NAME_TRAINING_PLAN:
                parsed_content_for_response = parse_training_plan_from_string(db_content_json, row_dict["project_name"])

        return ProjectDetailForEditResponse(
            id=row_dict["id"], projectName=row_dict["project_name"], microProductName=row_dict.get("microproduct_name"),
            design_template_id=row_dict.get("design_template_id"), microProductContent=parsed_content_for_response,
            createdAt=row_dict.get("created_at"), design_template_name=row_dict.get("design_template_name"),
            design_component_name=component_name, design_image_path=row_dict.get("design_image_path")
        )
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Error fetching project {project_id} for edit: {e}", exc_info=not IS_PRODUCTION)
        detail_msg = "An error occurred while fetching project details." if IS_PRODUCTION else f"DB error fetching project details for edit: {str(e)}"
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail=detail_msg)

@app.put("/api/custom/projects/update/{project_id}", response_model=ProjectDB)
async def update_project_in_db(project_id: int, project_update_data: ProjectUpdateRequest, onyx_user_id: str = Depends(get_current_onyx_user_id), pool: asyncpg.Pool = Depends(get_db_pool)):
    try:
        db_microproduct_name_to_store = project_update_data.microProductName
        current_component_name = None
        async with pool.acquire() as conn:
            project_row = await conn.fetchrow("SELECT dt.component_name FROM projects p JOIN design_templates dt ON p.design_template_id = dt.id WHERE p.id = $1 AND p.onyx_user_id = $2", project_id, onyx_user_id)
            if not project_row:
                raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Project not found or not owned by user.")
            current_component_name = project_row["component_name"]

        if (not db_microproduct_name_to_store or not db_microproduct_name_to_store.strip()) and project_update_data.design_template_id:
            async with pool.acquire() as conn: design_row = await conn.fetchrow("SELECT template_name FROM design_templates WHERE id = $1", project_update_data.design_template_id)
            if design_row: db_microproduct_name_to_store = design_row["template_name"]

        content_to_store_for_db = project_update_data.microProductContent.model_dump(mode='json', exclude_none=True) if project_update_data.microProductContent else None

        derived_product_type = None; derived_microproduct_type = None
        if project_update_data.design_template_id is not None:
            async with pool.acquire() as conn: design_template = await conn.fetchrow("SELECT microproduct_type, template_name, component_name FROM design_templates WHERE id = $1", project_update_data.design_template_id)
            if design_template:
                derived_product_type = design_template["microproduct_type"]
                derived_microproduct_type = design_template["template_name"]
                current_component_name = design_template["component_name"]

        update_clauses = []; update_values = []; arg_idx = 1
        if project_update_data.projectName is not None: update_clauses.append(f"project_name = ${arg_idx}"); update_values.append(project_update_data.projectName); arg_idx += 1
        if db_microproduct_name_to_store is not None: update_clauses.append(f"microproduct_name = ${arg_idx}"); update_values.append(db_microproduct_name_to_store); arg_idx +=1
        if project_update_data.design_template_id is not None:
            update_clauses.append(f"design_template_id = ${arg_idx}"); update_values.append(project_update_data.design_template_id); arg_idx +=1
            if derived_product_type: update_clauses.append(f"product_type = ${arg_idx}"); update_values.append(derived_product_type); arg_idx += 1
            if derived_microproduct_type: update_clauses.append(f"microproduct_type = ${arg_idx}"); update_values.append(derived_microproduct_type); arg_idx += 1
        if project_update_data.microProductContent is not None: update_clauses.append(f"microproduct_content = ${arg_idx}"); update_values.append(content_to_store_for_db); arg_idx += 1

        if not update_clauses:
            raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="No update data provided.")

        update_values.extend([project_id, onyx_user_id])
        update_query = f"UPDATE projects SET {', '.join(update_clauses)} WHERE id = ${arg_idx} AND onyx_user_id = ${arg_idx + 1} RETURNING id, onyx_user_id, project_name, product_type, microproduct_type, microproduct_name, microproduct_content, design_template_id, created_at;"

        async with pool.acquire() as conn: row = await conn.fetchrow(update_query, *update_values)
        if not row:
            raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Project not found or update failed.")

        db_content = row["microproduct_content"]
        final_content_for_model: Optional[MicroProductContentType] = None
        if db_content and isinstance(db_content, dict):
            try:
                if current_component_name == COMPONENT_NAME_PDF_LESSON:
                    final_content_for_model = PdfLessonDetails(**db_content)
                elif current_component_name == COMPONENT_NAME_TRAINING_PLAN:
                    final_content_for_model = TrainingPlanDetails(**db_content)
                elif current_component_name == COMPONENT_NAME_VIDEO_LESSON:
                    final_content_for_model = VideoLessonData(**db_content)
                else:
                    final_content_for_model = TrainingPlanDetails(**db_content)
            except Exception as e_parse:
                logger.error(f"Error parsing updated content from DB (proj ID {row['id']}): {e_parse}", exc_info=not IS_PRODUCTION)

        return ProjectDB(
            id=row["id"], onyx_user_id=row["onyx_user_id"], project_name=row["project_name"],
            product_type=row["product_type"], microproduct_type=row["microproduct_type"],
            microproduct_name=row["microproduct_name"], microproduct_content=final_content_for_model,
            design_template_id=row["design_template_id"], created_at=row["created_at"]
        )
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Error updating project {project_id}: {e}", exc_info=not IS_PRODUCTION)
        detail_msg = "An error occurred while updating project." if IS_PRODUCTION else f"DB error on project update: {str(e)}"
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail=detail_msg)

@app.get("/api/custom/projects", response_model=List[ProjectApiResponse])
async def get_user_projects_list_from_db(onyx_user_id: str = Depends(get_current_onyx_user_id), pool: asyncpg.Pool = Depends(get_db_pool)):
    select_query = """
        SELECT p.id, p.project_name, p.microproduct_name, p.created_at, p.design_template_id,
               dt.template_name as design_template_name,
               dt.microproduct_type as design_microproduct_type
        FROM projects p
        LEFT JOIN design_templates dt ON p.design_template_id = dt.id
        WHERE p.onyx_user_id = $1 ORDER BY p.created_at DESC;
    """
    try:
        async with pool.acquire() as conn: db_rows = await conn.fetch(select_query, onyx_user_id)
        projects_list: List[ProjectApiResponse] = []
        for row_data in db_rows:
            row_dict = dict(row_data)
            project_slug = create_slug(row_dict.get('project_name'))
            projects_list.append(ProjectApiResponse(
                id=row_dict["id"], projectName=row_dict["project_name"], projectSlug=project_slug,
                microproduct_name=row_dict.get("microproduct_name"),
                design_template_name=row_dict.get("design_template_name"),
                design_microproduct_type=row_dict.get("design_microproduct_type"),
                created_at=row_dict["created_at"], design_template_id=row_dict.get("design_template_id")
            ))
        return projects_list
    except Exception as e:
        logger.error(f"Error fetching projects list: {e}", exc_info=not IS_PRODUCTION)
        detail_msg = "An error occurred while fetching projects list." if IS_PRODUCTION else f"DB error while fetching projects list: {str(e)}"
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail=detail_msg)

@app.get("/api/custom/projects/view/{project_id}", response_model=MicroProductApiResponse, responses={404: {"model": ErrorDetail}})
async def get_project_instance_detail(project_id: int, onyx_user_id: str = Depends(get_current_onyx_user_id), pool: asyncpg.Pool = Depends(get_db_pool)):
    query = """
        SELECT p.id, p.project_name, p.microproduct_name, p.microproduct_content,
               p.design_template_id, dt.template_name as design_template_name,
               dt.component_name as design_component_name, dt.microproduct_type as design_microproduct_type
        FROM projects p
        JOIN design_templates dt ON p.design_template_id = dt.id
        WHERE p.id = $1 AND p.onyx_user_id = $2;
    """
    try:
        async with pool.acquire() as conn: row = await conn.fetchrow(query, project_id, onyx_user_id)
        if not row:
            raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Project instance not found.")

        row_dict = dict(row)
        project_instance_name = row_dict.get('microproduct_name') or row_dict.get('project_name')
        details_data: Optional[MicroProductContentType] = None
        microproduct_content_json = row_dict.get('microproduct_content')
        component_name = row_dict.get("design_component_name")

        if microproduct_content_json and isinstance(microproduct_content_json, dict):
            try:
                if component_name == COMPONENT_NAME_PDF_LESSON:
                    details_data = PdfLessonDetails(**microproduct_content_json)
                elif component_name == COMPONENT_NAME_TRAINING_PLAN:
                    details_data = TrainingPlanDetails(**microproduct_content_json)
                elif component_name == COMPONENT_NAME_VIDEO_LESSON:
                    details_data = VideoLessonData(**microproduct_content_json)
                else:
                    logger.warning(f"Unknown component_name '{component_name}' for project {project_id} view. Trying fallbacks.", exc_info=not IS_PRODUCTION)
                    try: details_data = TrainingPlanDetails(**microproduct_content_json)
                    except:
                        try: details_data = PdfLessonDetails(**microproduct_content_json)
                        except: pass
            except Exception as pydantic_e:
                 logger.error(f"Pydantic validation error (project ID {project_id}, component {component_name}, detail view): {pydantic_e}", exc_info=not IS_PRODUCTION)
        elif isinstance(microproduct_content_json, str) and component_name == COMPONENT_NAME_TRAINING_PLAN:
            details_data = parse_training_plan_from_string(microproduct_content_json, project_instance_name)

        if not details_data:
            lang_fallback = detect_language(project_instance_name)
            if component_name == COMPONENT_NAME_PDF_LESSON:
                details_data = PdfLessonDetails(lessonTitle=f"No/Invalid content for {project_instance_name}", contentBlocks=[], detectedLanguage=lang_fallback)
            else:
                details_data = TrainingPlanDetails(mainTitle=f"No/Invalid content for {project_instance_name}", sections=[], detectedLanguage=lang_fallback)

        web_link_path = f"/projects/view/{project_id}"
        pdf_doc_identifier_slug = create_slug(f"{row_dict.get('project_name')}_{project_instance_name}")
        pdf_link_path = f"pdf/{project_id}/{pdf_doc_identifier_slug}"

        return MicroProductApiResponse(
            name=project_instance_name, slug=create_slug(project_instance_name), project_id=project_id,
            design_template_id=row_dict["design_template_id"], component_name=component_name,
            webLinkPath=web_link_path, pdfLinkPath=pdf_link_path, details=details_data
        )
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Error fetching project instance detail {project_id}: {e}", exc_info=not IS_PRODUCTION)
        detail_msg = "An error occurred while fetching project details." if IS_PRODUCTION else f"Server error fetching project detail: {str(e)}"
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail=detail_msg)

@app.get("/api/custom/pdf/{project_id}/{document_name_slug}", response_class=FileResponse, responses={404: {"model": ErrorDetail}, 500: {"model": ErrorDetail}})
async def download_project_instance_pdf(
    project_id: int,
    document_name_slug: str,
    parentProjectName: Optional[str] = Query(None),
    lessonNumber: Optional[int] = Query(None),
    onyx_user_id: str = Depends(get_current_onyx_user_id),
    pool: asyncpg.Pool = Depends(get_db_pool)
):
    print("OPTIONAL DATA:", parentProjectName, lessonNumber)
    try:
        async with pool.acquire() as conn:
            target_row_dict = await conn.fetchrow(
                """
                SELECT p.project_name, p.microproduct_name, p.microproduct_content,
                       dt.component_name as design_component_name
                FROM projects p
                LEFT JOIN design_templates dt ON p.design_template_id = dt.id
                WHERE p.id = $1 AND p.onyx_user_id = $2;
                """,
                project_id, onyx_user_id
            )
        if not target_row_dict:
            raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Project not found for user.")

        mp_name_for_pdf_context = target_row_dict.get('microproduct_name') or target_row_dict.get('project_name')
        user_friendly_pdf_filename = f"{create_slug(mp_name_for_pdf_context)}_{uuid.uuid4().hex[:8]}.pdf"

        content_json = target_row_dict.get('microproduct_content')
        component_name = target_row_dict.get("design_component_name")
        data_for_template_render: Optional[Dict[str, Any]] = None
        pdf_template_file: str

        detected_lang_for_pdf = 'ru'  # Default language
        if isinstance(content_json, dict) and content_json.get('detectedLanguage'):
            detected_lang_for_pdf = content_json.get('detectedLanguage')
        elif mp_name_for_pdf_context: # Fallback if not in content_json
            detected_lang_for_pdf = detect_language(mp_name_for_pdf_context)
        
        # Get the locale strings for the detected language, defaulting to 'en' if not found
        current_pdf_locale_strings = VIDEO_SCRIPT_LANG_STRINGS.get(detected_lang_for_pdf, VIDEO_SCRIPT_LANG_STRINGS['en'])

        logger.info(f"Project {project_id} PDF Gen: Raw content_json from DB (type: {type(content_json)}). First 1000 chars: {str(content_json)[:1000]}")

        if component_name == COMPONENT_NAME_PDF_LESSON:
            pdf_template_file = "pdf_lesson_pdf_template.html"
            if content_json and isinstance(content_json, dict):
                logger.info(f"Project {project_id} PDF Gen (PDF LESSON): Using raw content_json directly for template.")
                data_for_template_render = json.loads(json.dumps(content_json)) 
                if not data_for_template_render.get('detectedLanguage'):
                    try:
                        parsed_model_for_fallback_lang = PdfLessonDetails(**content_json)
                        if parsed_model_for_fallback_lang and parsed_model_for_fallback_lang.detectedLanguage:
                            detected_lang_for_pdf = parsed_model_for_fallback_lang.detectedLanguage
                            # Update locale strings if language detection changed
                            current_pdf_locale_strings = VIDEO_SCRIPT_LANG_STRINGS.get(detected_lang_for_pdf, VIDEO_SCRIPT_LANG_STRINGS['en'])
                    except Exception: pass
                    data_for_template_render['detectedLanguage'] = detected_lang_for_pdf
            else:
                logger.warning(f"Project {project_id} PDF Gen (PDF LESSON): content_json is not a valid dict or is None. Using fallback structure.")
                data_for_template_render = {
                    "lessonTitle": f"Content Unavailable/Invalid: {mp_name_for_pdf_context}",
                    "contentBlocks": [], "detectedLanguage": detected_lang_for_pdf}
        elif component_name == COMPONENT_NAME_TRAINING_PLAN:
            pdf_template_file = "training_plan_pdf_template.html"
            temp_dumped_dict = None
            if content_json and isinstance(content_json, dict):
                try:
                    parsed_model = TrainingPlanDetails(**content_json)
                    if parsed_model.detectedLanguage: 
                        detected_lang_for_pdf = parsed_model.detectedLanguage
                        # Update locale strings if language detection changed
                        current_pdf_locale_strings = VIDEO_SCRIPT_LANG_STRINGS.get(detected_lang_for_pdf, VIDEO_SCRIPT_LANG_STRINGS['en'])
                    temp_dumped_dict = parsed_model.model_dump(mode='json', exclude_none=True)
                    data_for_template_render = json.loads(json.dumps(temp_dumped_dict))
                except Exception as e_parse_dump:
                    logger.error(f"Pydantic parsing/dumping failed for TrainingPlan (Proj {project_id}): {e_parse_dump}", exc_info=not IS_PRODUCTION)
            if data_for_template_render is None:
                 logger.warning(f"Project {project_id} PDF Gen (TRAINING PLAN): data_for_template_render is None. Using fallback.")
                 data_for_template_render = {"mainTitle": f"Content Error: {mp_name_for_pdf_context}", "sections": [], "detectedLanguage": detected_lang_for_pdf}
            
            current_lang_cfg_main = LANG_CONFIG.get(detected_lang_for_pdf, LANG_CONFIG['ru']) # Using main LANG_CONFIG for units
            data_for_template_render['time_unit_singular'] = current_lang_cfg_main.get('TIME_UNIT_SINGULAR', 'h')
            data_for_template_render['time_unit_decimal_plural'] = current_lang_cfg_main.get('TIME_UNIT_DECIMAL_PLURAL', 'h')
            data_for_template_render['time_unit_general_plural'] = current_lang_cfg_main.get('TIME_UNIT_GENERAL_PLURAL', 'h')
        elif component_name == COMPONENT_NAME_VIDEO_LESSON: # Updated logic for Video Lesson
            pdf_template_file = "video_lesson_pdf_template.html"
            if content_json and isinstance(content_json, dict):
                data_for_template_render = json.loads(json.dumps(content_json))
                if not data_for_template_render.get('detectedLanguage'):
                    try:
                        parsed_model = VideoLessonData(**content_json)
                        if parsed_model.detectedLanguage:
                            detected_lang_for_pdf = parsed_model.detectedLanguage
                            # Update locale strings if language detection changed
                            current_pdf_locale_strings = VIDEO_SCRIPT_LANG_STRINGS.get(detected_lang_for_pdf, VIDEO_SCRIPT_LANG_STRINGS['en'])
                    except Exception: pass 
                    data_for_template_render['detectedLanguage'] = detected_lang_for_pdf
                else: # If language IS in content_json, ensure locale strings match
                    detected_lang_for_pdf = data_for_template_render.get('detectedLanguage', detected_lang_for_pdf)
                    current_pdf_locale_strings = VIDEO_SCRIPT_LANG_STRINGS.get(detected_lang_for_pdf, VIDEO_SCRIPT_LANG_STRINGS['en'])

            else:
                data_for_template_render = {
                    "mainPresentationTitle": f"Content Error: {mp_name_for_pdf_context}",
                    "slides": [], "detectedLanguage": detected_lang_for_pdf
                }
        else:
            logger.warning(f"PDF: Unknown component_name '{component_name}' for project {project_id}. Defaulting to simple PDF Lesson structure.")
            pdf_template_file = "pdf_lesson_pdf_template.html" # Or a generic template
            data_for_template_render = {
                "lessonTitle": f"Unknown Content Type: {mp_name_for_pdf_context}",
                "contentBlocks": [{"type":"paragraph", "text":"The content type of this project is not configured for PDF export."}],
                "detectedLanguage": detected_lang_for_pdf
            }

        if not isinstance(data_for_template_render, dict):
             logger.critical(f"Project {project_id} PDF Gen: data_for_template_render is NOT A DICT ({type(data_for_template_render)}) before final context prep.")
             data_for_template_render = {"lessonTitle": "Critical Data Preparation Error", "contentBlocks": [], "detectedLanguage": "en"}
             # Ensure locale is set for critical error case
             current_pdf_locale_strings = VIDEO_SCRIPT_LANG_STRINGS['en']


        if isinstance(data_for_template_render, dict):
            logger.info(f"Project {project_id} PDF Gen: Starting deep inspection of data_for_template_render (to be passed as 'details' in template context)...")
            inspect_list_items_recursively(data_for_template_render.get('contentBlocks', []), "data_for_template_render.contentBlocks")

        unique_output_filename = f"{project_id}_{document_name_slug}_{uuid.uuid4().hex[:12]}.pdf"
        
        # Pass the locale strings to the template context
        context_for_jinja = {
            'details': data_for_template_render, 
            'locale': current_pdf_locale_strings,
            'parentProjectName': parentProjectName,
            'lessonNumber': lessonNumber
        }
        # If your template expects data_for_template_render directly under 'details', adjust like so:
        # context_for_jinja = {'details': data_for_template_render, 'locale': current_pdf_locale_strings}


        logger.info(f"Project {project_id} PDF Gen: Type of context_for_jinja['details']: {type(context_for_jinja.get('details'))}")
        if isinstance(context_for_jinja.get('details'), dict) and isinstance(context_for_jinja['details'].get('details'), dict):
            final_cb_source = context_for_jinja['details']['details']
            final_cb_type = type(final_cb_source.get('contentBlocks'))
            logger.info(f"Project {project_id} PDF Gen: Type of context_for_jinja['details']['details']['contentBlocks']: {final_cb_type}")
            if isinstance(final_cb_source.get('contentBlocks'), list):
                 for block_idx, block_item_final_check in enumerate(final_cb_source.get('contentBlocks', [])):
                    if isinstance(block_item_final_check, dict) and block_item_final_check.get('type') in ('bullet_list', 'numbered_list'):
                        items_final_check_type = type(block_item_final_check.get('items'))
                        if not isinstance(block_item_final_check.get('items'), list):
                            logger.error(f"Project {project_id} PDF Gen: CRITICAL - 'items' in block_item_final_check for block #{block_idx} is STILL NOT A LIST (type: {items_final_check_type}) just before Jinja render.")
            elif final_cb_type is not None: # if it's not None and not a list
                logger.error(f"Project {project_id} PDF Gen: CRITICAL - context_for_jinja['details']['details']['contentBlocks'] is NOT A LIST (type: {final_cb_type}) just before Jinja render.")

        pdf_path = await generate_pdf_from_html_template(pdf_template_file, context_for_jinja, unique_output_filename)
        if not os.path.exists(pdf_path):
            raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail="PDF file not found after generation.")
        return FileResponse(path=pdf_path, filename=user_friendly_pdf_filename, media_type='application/pdf', headers={"Cache-Control": "no-cache, no-store, must-revalidate", "Pragma": "no-cache", "Expires": "0"})
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Error in PDF endpoint for project {project_id}: {e}", exc_info=not IS_PRODUCTION)
        detail_msg = "An error occurred during PDF generation." if IS_PRODUCTION else f"Error during PDF generation: {str(e)[:200]}"
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail=detail_msg)

@app.post("/api/custom/projects/delete-multiple", status_code=status.HTTP_200_OK)
async def delete_multiple_projects(delete_request: ProjectsDeleteRequest, onyx_user_id: str = Depends(get_current_onyx_user_id), pool: asyncpg.Pool = Depends(get_db_pool)):
    if not delete_request.project_ids:
        return JSONResponse(status_code=status.HTTP_400_BAD_REQUEST, content={"detail": "No project IDs provided for deletion."})
    try:
        async with pool.acquire() as conn:
            async with conn.transaction():
                result_status = await conn.execute("DELETE FROM projects WHERE id = ANY($1::int[]) AND onyx_user_id = $2", delete_request.project_ids, onyx_user_id)
                deleted_count_match = re.search(r"DELETE\s+(\d+)", result_status); deleted_count = int(deleted_count_match.group(1)) if deleted_count_match else 0
                logger.info(f"User {onyx_user_id} deleted IDs: {delete_request.project_ids}. Count: {deleted_count}.")
                return {"detail": f"Successfully deleted {deleted_count} project(s)."}
    except Exception as e:
        logger.error(f"Error deleting projects for user {onyx_user_id}, IDs {delete_request.project_ids}: {e}", exc_info=not IS_PRODUCTION)
        detail_msg = "An error occurred during project deletion." if IS_PRODUCTION else f"Database error during deletion: {str(e)}"
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail=detail_msg)

@app.get("/api/custom/health")
async def health_check():
    return {"status": "healthy"}

HeadlineBlock.model_rebuild()
ParagraphBlock.model_rebuild()
AlertBlock.model_rebuild()
SectionBreakBlock.model_rebuild()
BulletListBlock.model_rebuild()
NumberedListBlock.model_rebuild()
PdfLessonDetails.model_rebuild()
