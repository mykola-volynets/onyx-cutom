# custom_extensions/backend/main.py
from fastapi import FastAPI, HTTPException, Depends, Request, status, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse, JSONResponse

from typing import List, Optional, Dict, Any
from pydantic import BaseModel, Field
import re
import os
import asyncpg
from datetime import datetime, timezone
import httpx
import traceback
import json
import uuid
import shutil

# --- Constants & DB Setup ---
CUSTOM_PROJECTS_DATABASE_URL = os.getenv("CUSTOM_PROJECTS_DATABASE_URL")
ONYX_API_SERVER_URL = "http://api_server:8080" # Adjust if needed
ONYX_SESSION_COOKIE_NAME = os.getenv("ONYX_SESSION_COOKIE_NAME", "fastapiusersauth")

# --- LLM Configuration for JSON Parsing ---
LLM_API_KEY = os.getenv("COHERE_API_KEY") # Or your preferred LLM API key
LLM_API_URL = os.getenv("COHERE_API_URL", "https://api.cohere.com/v1/chat") # Example for Cohere Chat
LLM_DEFAULT_MODEL = os.getenv("COHERE_DEFAULT_MODEL", "command-r-plus") # Example model

DB_POOL = None

# --- Directory for Design Template Images ---
STATIC_DESIGN_IMAGES_DIR = "static_design_images"
# Ensure this directory exists relative to where main.py is run
os.makedirs(STATIC_DESIGN_IMAGES_DIR, exist_ok=True)

# --- Default JSON structure example for TrainingPlanDetails ---
DEFAULT_TRAINING_PLAN_JSON_EXAMPLE_FOR_LLM = """
{
  "mainTitle": "Example Training Program",
  "sections": [
    {
      "id": "Module 1",
      "title": "Introduction to Topic",
      "totalHours": 5.5,
      "lessons": [
        {
          "title": "Lesson 1.1: Basic Concepts",
          "check": {"type": "test", "text": "Knowledge Test"},
          "contentAvailable": {"type": "yes", "text": "100%"},
          "source": "Internal Documentation",
          "hours": 2.0
        },
        {
          "title": "Lesson 1.2: Advanced Techniques",
          "check": {"type": "practice_supervisor", "text": "Practice with Supervisor"},
          "contentAvailable": {"type": "percentage", "text": "75%"},
          "source": "Expert Interview",
          "hours": 3.5
        }
      ]
    },
    {
      "id": "Module 2",
      "title": "Deep Dive into X",
      "totalHours": 4.0,
      "lessons": [
        {
          "title": "Lesson 2.1: Exploring X",
          "check": {"type": "none", "text": "N/A"},
          "contentAvailable": {"type": "no", "text": "Content Missing"},
          "source": "External Research",
          "hours": 4.0
        }
      ]
    }
  ],
  "detectedLanguage": "en"
}
"""

async def get_db_pool():
    if DB_POOL is None:
        raise HTTPException(status_code=503, detail="Database service not available.")
    return DB_POOL

app = FastAPI(title="Custom Extension Backend")

# --- Mount static files directory for Design Images ---
app.mount(f"/{STATIC_DESIGN_IMAGES_DIR}", StaticFiles(directory=STATIC_DESIGN_IMAGES_DIR), name="static_design_images")

# --- PDF Generation and Settings (Keep your existing logic or dummy) ---
try:
    from app.services.pdf_generator import generate_pdf_from_html_template
    from app.core.config import settings
except ImportError:
    print("WARNING: Could not import pdf_generator or settings from 'app' module. Using dummy implementations for PDF generation.")
    class DummySettings:
        CUSTOM_FRONTEND_URL = os.environ.get("CUSTOM_FRONTEND_URL", "http://custom_frontend:3001")
    settings = DummySettings()
    async def generate_pdf_from_html_template(template_name: str, context_data: Dict[str, Any], output_filename: str) -> str:
        print(f"PDF Generation Skipped (Dummy Service): Would generate for template {template_name} to {output_filename}")
        dummy_path = os.path.join("/app/tmp_pdf", output_filename) # Standard tmp path in containers
        os.makedirs(os.path.dirname(dummy_path), exist_ok=True)
        with open(dummy_path, "w") as f: f.write(f"Dummy PDF for {output_filename} using context: {str(context_data)[:200]}")
        return dummy_path

@app.on_event("startup")
async def startup_event():
    global DB_POOL
    print(f"Custom Backend starting...")
    if not CUSTOM_PROJECTS_DATABASE_URL:
        print("CRITICAL: CUSTOM_PROJECTS_DATABASE_URL env var not set.")
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
            # Check and alter 'microproduct_content' in 'projects' table
            col_type_row = await connection.fetchrow(
                "SELECT data_type FROM information_schema.columns "
                "WHERE table_name = 'projects' AND column_name = 'microproduct_content';"
            )
            if col_type_row and col_type_row['data_type'] != 'jsonb':
                print("Attempting to alter 'microproduct_content' column type to JSONB...")
                await connection.execute("ALTER TABLE projects ALTER COLUMN microproduct_content TYPE JSONB USING microproduct_content::text::jsonb;")
                print("Successfully altered 'microproduct_content' to JSONB.")
            elif not col_type_row:
                pass # Will be created by CREATE TABLE

            await connection.execute("""
                CREATE TABLE IF NOT EXISTS projects (
                    id SERIAL PRIMARY KEY,
                    onyx_user_id TEXT NOT NULL,
                    project_name TEXT NOT NULL,
                    product_type TEXT,
                    microproduct_type TEXT,
                    microproduct_name TEXT,
                    microproduct_content JSONB,
                    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
                );
            """)
            await connection.execute("ALTER TABLE projects ADD COLUMN IF NOT EXISTS microproduct_name TEXT;")
            await connection.execute("CREATE INDEX IF NOT EXISTS idx_projects_onyx_user_id ON projects(onyx_user_id);")
            print("'projects' table ensured.")

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
            print("'microproduct_pipelines' table ensured.")

            # New table for Design Templates
            await connection.execute("""
                CREATE TABLE IF NOT EXISTS design_templates (
                    id SERIAL PRIMARY KEY,
                    template_name TEXT NOT NULL,
                    template_structuring_prompt TEXT NOT NULL,
                    design_image_path TEXT,
                    microproduct_type TEXT,
                    component_name TEXT,
                    date_created TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
                );
            """)
            await connection.execute("CREATE INDEX IF NOT EXISTS idx_design_templates_name ON design_templates(template_name);")
            await connection.execute("CREATE INDEX IF NOT EXISTS idx_design_templates_mptype ON design_templates(microproduct_type);")
            print("'design_templates' table ensured.")

        print("Custom DB pool initialized & tables ensured.")
    except Exception as e:
        print(f"CRITICAL: Failed to initialize custom DB pool or ensure tables: {e}")
        traceback.print_exc()
        DB_POOL = None

@app.on_event("shutdown")
async def shutdown_event():
    if DB_POOL:
        await DB_POOL.close()
        print("Custom projects DB pool closed.")

# --- CORS Middleware setup ---
effective_origins = list(set(filter(None, [
    "http://localhost:3001", # Ensure your frontend dev port is here
    "http://143.198.59.56:3001", # Example IP
    "http://143.198.59.56:8088", # Example IP
    os.environ.get("WEB_DOMAIN", "http://localhost:3000"), # Main Onyx frontend
    settings.CUSTOM_FRONTEND_URL # Your custom frontend service URL
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

# Models related to Projects and Training Plans
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
    model_config = {"from_attributes": True}

class TrainingPlanDetails(BaseModel):
    mainTitle: Optional[str] = None
    sections: List[SectionDetail] = Field(default_factory=list)
    detectedLanguage: Optional[str] = None
    model_config = {"from_attributes": True}

class MicroProductApiResponse(BaseModel):
    name: str
    slug: str
    webLinkPath: Optional[str] = None
    pdfLinkPath: Optional[str] = None
    details: Optional[TrainingPlanDetails] = None
    model_config = {"from_attributes": True}

class ProjectApiResponse(BaseModel):
    id: int
    projectName: str
    projectSlug: str
    product: str
    productSlug: str
    microProduct: MicroProductApiResponse
    model_config = {"from_attributes": True}

class ProjectCreateRequest(BaseModel):
    projectName: str
    product: str
    microProductType: str
    microProductName: Optional[str] = None
    aiResponse: str
    target_json_example: Optional[str] = None # New field for custom JSON structure example

class ProjectDB(BaseModel):
    id: int
    onyx_user_id: str
    project_name: str
    product_type: Optional[str] = None
    microproduct_type: Optional[str] = None
    microproduct_name: Optional[str] = None
    microproduct_content: Optional[TrainingPlanDetails] = None # Remains TrainingPlanDetails for now
    created_at: datetime
    model_config = {"from_attributes": True}

class ErrorDetail(BaseModel):
    detail: str

class ProjectsDeleteRequest(BaseModel):
    project_ids: List[int]

class ProjectDetailForEditResponse(BaseModel):
    id: int
    projectName: str
    product: Optional[str] = None
    microProductType: Optional[str] = None
    microProductName: Optional[str] = None
    microProductContent: Optional[TrainingPlanDetails] = None
    createdAt: Optional[datetime] = None
    model_config = {"from_attributes": True}

class ProjectUpdateRequest(BaseModel):
    projectName: str
    product: str
    microProductType: str
    microProductName: Optional[str] = None
    microProductContent: Optional[TrainingPlanDetails] = None

# Pydantic Models for Pipelines
class MicroproductPipelineBase(BaseModel):
    pipeline_name: str
    pipeline_description: Optional[str] = None
    is_discovery_prompts: bool = False
    is_structuring_prompts: bool = False
    discovery_prompts_list: Optional[List[str]] = Field(default_factory=list)
    structuring_prompts_list: Optional[List[str]] = Field(default_factory=list)

class MicroproductPipelineCreateRequest(MicroproductPipelineBase):
    pass

class MicroproductPipelineUpdateRequest(MicroproductPipelineBase):
    pass

class MicroproductPipelineDBResponse(BaseModel):
    id: int
    pipeline_name: str
    pipeline_description: Optional[str] = None
    is_discovery_prompts: bool
    is_structuring_prompts: bool
    discovery_prompts: Optional[Dict[str, str]] = None
    structuring_prompts: Optional[Dict[str, str]] = None
    created_at: datetime
    model_config = {"from_attributes": True}

class MicroproductPipelineGetResponse(MicroproductPipelineDBResponse):
    discovery_prompts_list: List[str] = Field(default_factory=list)
    structuring_prompts_list: List[str] = Field(default_factory=list)

    @classmethod
    def from_db_model(cls, db_model: MicroproductPipelineDBResponse) -> "MicroproductPipelineGetResponse":
        discovery_list = []
        if db_model.discovery_prompts:
            discovery_list = [
                db_model.discovery_prompts[key]
                for key in sorted(db_model.discovery_prompts.keys(), key=int)
            ]
        structuring_list = []
        if db_model.structuring_prompts:
            structuring_list = [
                db_model.structuring_prompts[key]
                for key in sorted(db_model.structuring_prompts.keys(), key=int)
            ]
        parent_data = db_model.model_dump(exclude={"discovery_prompts", "structuring_prompts"})
        return cls(
            **parent_data,
            discovery_prompts_list=discovery_list,
            structuring_prompts_list=structuring_list
        )

# Pydantic Models for Design Templates
class DesignTemplateBase(BaseModel):
    template_name: str
    template_structuring_prompt: str
    microproduct_type: str
    component_name: str

class DesignTemplateCreate(DesignTemplateBase):
    design_image_path: str

class DesignTemplateUpdate(BaseModel):
    template_name: Optional[str] = None
    template_structuring_prompt: Optional[str] = None
    microproduct_type: Optional[str] = None
    component_name: Optional[str] = None

class DesignTemplateResponse(DesignTemplateBase):
    id: int
    design_image_path: str
    date_created: datetime
    model_config = {"from_attributes": True}


# --- Onyx User ID Function ---
async def get_current_onyx_user_id(request: Request) -> str:
    session_cookie_value = request.cookies.get(ONYX_SESSION_COOKIE_NAME)
    if not session_cookie_value:
        dev_user_id = request.headers.get("X-Dev-Onyx-User-ID")
        if dev_user_id:
            return dev_user_id
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail=f"Onyx session cookie '{ONYX_SESSION_COOKIE_NAME}' missing.")

    onyx_user_info_url = f"{ONYX_API_SERVER_URL}/me"
    cookies_to_forward = {ONYX_SESSION_COOKIE_NAME: session_cookie_value}
    try:
        async with httpx.AsyncClient(timeout=10.0) as client:
            response = await client.get(onyx_user_info_url, cookies=cookies_to_forward)
            response.raise_for_status()
            user_data = response.json()
            onyx_user_id = user_data.get("userId") or user_data.get("id")
            if not onyx_user_id:
                raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail="Could not extract user ID from Onyx.")
            return str(onyx_user_id)
    except httpx.HTTPStatusError as e:
        print(f"Onyx API '{onyx_user_info_url}' call failed. Status: {e.response.status_code}, Response: {e.response.text[:500]}")
        raise HTTPException(status_code=e.response.status_code, detail=f"Onyx user validation failed ({e.response.status_code}).")
    except httpx.RequestError as e:
        print(f"Error requesting user info from Onyx '{onyx_user_info_url}': {e}")
        raise HTTPException(status_code=status.HTTP_503_SERVICE_UNAVAILABLE, detail=f"Could not connect to Onyx auth service: {str(e)[:100]}")
    except Exception as e:
        print(f"Unexpected error in get_current_onyx_user_id: {e}")
        traceback.print_exc()
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail=f"Internal user validation error: {str(e)[:100]}")

# --- Slug Creation Function ---
def create_slug(text: Optional[str]) -> str:
    if not text: return "default-slug"
    text_processed = str(text).lower()
    text_processed = re.sub(r'\s+', '-', text_processed)
    text_processed = re.sub(r'[^\wа-яёa-z0-9\-]+', '', text_processed, flags=re.UNICODE | re.IGNORECASE)
    return text_processed or "generated-slug"

# --- MULTI-LANGUAGE PARSER SECTION (Kept for fallback, PDF generation and other utilities) ---
CANONICAL_ATTRIBUTE_FIELDS = {
    "check": ["knowledge assessment", "проверка знаний", "перевірка знань", "verificación de conocimientos", "control de conocimientos"],
    "contentAvailable": ["content availability", "наличие контента", "наявність контенту", "contenido disponible"],
    "source": ["information source", "источник информации", "джерело інформації", "fuente de información"],
    "hours": ["time", "время", "тривалість", "час", "duración", "tiempo"],
}
LANG_CONFIG = {
    'ru': {'MODULE_KEYWORD': "Модуль",'TOTAL_TIME_KEYWORD': "Общее время",'LESSONS_COUNT_KEYWORD': "Количество уроков",'LESSONS_HEADER_KEYWORD': "Уроки",'TIME_KEYWORD': "Время",'ASSESSMENT_KEYWORD': "Проверка знаний",'SOURCE_KEYWORD': "Источник",'OUTPUT_LESSON_PREFIX': "Урок",'OUTPUT_ASSESSMENT': "Проверка знаний",'OUTPUT_CONTENT_AVAIL': "Наличие контента",'OUTPUT_SOURCE_INFO': "Источник информации",'OUTPUT_TIME': "Время",'OUTPUT_MODULE_TOTAL_TIME': "Общее время на модуль",'PLACEHOLDER_CONTENT_MISSING': "[ДАННЫЕ О НАЛИЧИИ КОНТЕНТА ОТСУТСТВУЮТ]",'PLACEHOLDER_DATA_MISSING': "[ДАННЫЕ ОТСУТСТВУЮТ]",'MAP_SOURCE_CREATED': "Создано с нуля",'MAP_SOURCE_CREATED_TO': "Создание с нуля",'MAP_SOURCE_EXISTING_INSTRUCTIONS': "Существующие инструкции",'MAP_SOURCE_EXISTING_INSTRUCTIONS_TO': "Существующая инструкция",'MAP_SOURCE_EXISTING_MATERIALS': "Существующие материалы",'MAP_SOURCE_EXISTING_MATERIALS_TO': "Существующие материалы",'TIME_UNIT_SINGULAR': "час",'TIME_UNIT_DECIMAL_PLURAL': "часа",'TIME_UNIT_GENERAL_PLURAL': "часов",'LESSON_ITEM_PREFIX_RE': r"^-",'SPECIAL_SUFFIX_MODULE_1': "",'SUMMARY_PROGRAM_TITLE': "Итог по всей программе:",'SUMMARY_TOTAL_MODULES': "Всего модулей",'SUMMARY_TOTAL_LESSONS': "Всего уроков",'SUMMARY_TOTAL_PROGRAM_TIME': "Общее время на реализацию программы"},
    'en': {'MODULE_KEYWORD': "Module",'TOTAL_TIME_KEYWORD': "Total Time",'LESSONS_COUNT_KEYWORD': "Number of Lessons",'LESSONS_HEADER_KEYWORD': "Lessons",'TIME_KEYWORD': "Time",'ASSESSMENT_KEYWORD': "Knowledge Assessment",'SOURCE_KEYWORD': "Information Source",'OUTPUT_LESSON_PREFIX': "Lesson",'OUTPUT_ASSESSMENT': "Knowledge Assessment",'OUTPUT_CONTENT_AVAIL': "Content Availability",'OUTPUT_SOURCE_INFO': "Information Source",'OUTPUT_TIME': "Time",'OUTPUT_MODULE_TOTAL_TIME': "Total time for module",'PLACEHOLDER_CONTENT_MISSING': "[CONTENT AVAILABILITY DATA MISSING]",'PLACEHOLDER_DATA_MISSING': "[DATA MISSING]",'MAP_SOURCE_CREATED': "Created from scratch",'MAP_SOURCE_CREATED_TO': "Created from scratch",'MAP_SOURCE_EXISTING_INSTRUCTIONS': "Existing instructions",'MAP_SOURCE_EXISTING_INSTRUCTIONS_TO': "Existing instructions",'MAP_SOURCE_EXISTING_MATERIALS': "Existing materials",'MAP_SOURCE_EXISTING_MATERIALS_TO': "Existing materials",'TIME_UNIT_SINGULAR': "hour",'TIME_UNIT_DECIMAL_PLURAL': "hours",'TIME_UNIT_GENERAL_PLURAL': "hours",'LESSON_ITEM_PREFIX_RE': r"^\d+\.",'SPECIAL_SUFFIX_MODULE_1': "",'SUMMARY_PROGRAM_TITLE': "Program Summary:",'SUMMARY_TOTAL_MODULES': "Total modules",'SUMMARY_TOTAL_LESSONS': "Total lessons",'SUMMARY_TOTAL_PROGRAM_TIME': "Total program time"}
}

def detect_language(text: str, configs: Dict[str, Dict[str, str]] = LANG_CONFIG) -> str:
    en_score = 0; ru_score = 0
    if configs['en']['MODULE_KEYWORD'] in text and configs['en']['LESSONS_HEADER_KEYWORD'] in text and configs['en']['TOTAL_TIME_KEYWORD'] in text: en_score += 3
    if configs['ru']['MODULE_KEYWORD'] in text and configs['ru']['LESSONS_HEADER_KEYWORD'] in text and configs['ru']['TOTAL_TIME_KEYWORD'] in text: ru_score += 3
    if en_score == 0 and ru_score == 0:
        if configs['en']['MODULE_KEYWORD'] in text: en_score +=1
        if configs['ru']['MODULE_KEYWORD'] in text: ru_score +=1
        if configs['en']['TIME_KEYWORD'] in text: en_score +=1
        if configs['ru']['TIME_KEYWORD'] in text: ru_score +=1
    if en_score > ru_score and en_score > 0: return 'en'
    elif ru_score > en_score and ru_score > 0: return 'ru'
    elif en_score > 0 : return 'en'
    elif ru_score > 0 : return 'ru'
    return 'ru' # Default to Russian if unsure or scores are equal


def extract_float_time(time_str_from_new: Optional[str]) -> float:
    if not time_str_from_new: return 0.0
    match = re.search(r'([\d,\.]+)', time_str_from_new)
    if match:
        num_str = match.group(1).replace(',', '.')
        try: return float(num_str)
        except ValueError: return 0.0
    return 0.0

def format_lesson_time_display(time_float: float, lang_cfg: Dict[str, str]) -> str:
    num_str = str(int(time_float)) if time_float == int(time_float) else f"{time_float:.1f}"
    if time_float == 1.0: return f"1 {lang_cfg['TIME_UNIT_SINGULAR']}"
    return f"{num_str} {lang_cfg['TIME_UNIT_DECIMAL_PLURAL']}"

def format_total_time_display(time_float: float, lang_cfg: Dict[str, str]) -> str:
    num_str = str(int(time_float)) if time_float == int(time_float) else f"{time_float:.1f}"
    return f"{num_str} {lang_cfg['TIME_UNIT_GENERAL_PLURAL']}"

def transform_text_new_to_old(new_text: str, lang_configs: Dict = LANG_CONFIG) -> tuple[str, str]:
    # This function is part of the old parser, kept for compatibility
    detected_lang = detect_language(new_text, lang_configs)
    lang_cfg = lang_configs.get(detected_lang, lang_configs['ru'])
    output_lines = []
    module_header_parts = [
        rf"## ({lang_cfg['MODULE_KEYWORD']}\s*(\d+)\s*:\s*([^\n]+))\n", r"\s*",
        rf"\*\*{lang_cfg['TOTAL_TIME_KEYWORD']}:\*\* [^\n]+\n", rf"\*\*{lang_cfg['LESSONS_COUNT_KEYWORD']}:\*\* \d+\n",
        r"\n?", rf"### {lang_cfg['LESSONS_HEADER_KEYWORD']}\n"
    ]
    lessons_block_capture_part = r"([\s\S]*?)"
    lookahead_part = r"(?=\n## |\Z)"
    module_pattern_str = "".join(module_header_parts) + lessons_block_capture_part + lookahead_part
    try: module_pattern = re.compile(module_pattern_str, re.MULTILINE | re.IGNORECASE)
    except Exception as e: print(f"Error compiling module_pattern: {e}"); return "", detected_lang
    lesson_item_prefix_re_str = lang_cfg.get('LESSON_ITEM_PREFIX_RE', r"^-|^\d+\.")
    lesson_title_regex = rf"{lesson_item_prefix_re_str}\s*\*\*(.*?)\*\*\n"
    time_detail_regex = rf"(?:\s*-\s*\*\*{lang_cfg['TIME_KEYWORD']}:\*\*([^\n\r]*)(?:\r?\n|$))?"
    assessment_detail_regex = rf"(?:\s*-\s*\*\*{lang_cfg['ASSESSMENT_KEYWORD']}:\*\*([^\n\r]*)(?:\r?\n|$))?"
    source_detail_regex = rf"(?:\s*-\s*\*\*{lang_cfg['SOURCE_KEYWORD']}:\*\*([^\n\r]*)(?:\r?\n|$))?"
    lesson_pattern_str = (lesson_title_regex + time_detail_regex + assessment_detail_regex + source_detail_regex)
    try: lesson_pattern = re.compile(lesson_pattern_str, re.MULTILINE | re.IGNORECASE)
    except Exception as e: print(f"Error compiling lesson_pattern: {e}"); return "", detected_lang
    for module_match in module_pattern.finditer(new_text):
        full_module_title = module_match.group(1).strip(); module_num_str = module_match.group(2)
        lessons_block = module_match.group(4)
        output_lines.append(full_module_title); output_lines.append("")
        module_lessons_text = []; lesson_counter_in_module = 0; current_module_total_time_float = 0.0
        for lesson_match in lesson_pattern.finditer(lessons_block):
            lesson_counter_in_module += 1
            lesson_title = lesson_match.group(1).strip()
            time_str = lesson_match.group(2).strip() if lesson_match.group(2) else None
            proverka_str = lesson_match.group(3).strip() if lesson_match.group(3) else None
            istochnik_str = lesson_match.group(4).strip() if lesson_match.group(4) else None
            module_lessons_text.append(f"{lang_cfg['OUTPUT_LESSON_PREFIX']} {module_num_str}.{lesson_counter_in_module}: “{lesson_title}”"); module_lessons_text.append("")
            if proverka_str: module_lessons_text.append(f"- {lang_cfg['OUTPUT_ASSESSMENT']}: {proverka_str.replace(', ', ' + ')}")
            else: module_lessons_text.append(f"- {lang_cfg['OUTPUT_ASSESSMENT']}: {lang_cfg['PLACEHOLDER_DATA_MISSING']}")
            module_lessons_text.append(f"- {lang_cfg['OUTPUT_CONTENT_AVAIL']}: {lang_cfg['PLACEHOLDER_CONTENT_MISSING']}")
            if istochnik_str:
                if istochnik_str == lang_cfg.get('MAP_SOURCE_CREATED'): istochnik_formatted = lang_cfg.get('MAP_SOURCE_CREATED_TO')
                elif istochnik_str == lang_cfg.get('MAP_SOURCE_EXISTING_INSTRUCTIONS'): istochnik_formatted = lang_cfg.get('MAP_SOURCE_EXISTING_INSTRUCTIONS_TO')
                elif istochnik_str == lang_cfg.get('MAP_SOURCE_EXISTING_MATERIALS'): istochnik_formatted = lang_cfg.get('MAP_SOURCE_EXISTING_MATERIALS_TO')
                else: istochnik_formatted = istochnik_str
                module_lessons_text.append(f"- {lang_cfg['OUTPUT_SOURCE_INFO']}: {istochnik_formatted}")
            else: module_lessons_text.append(f"- {lang_cfg['OUTPUT_SOURCE_INFO']}: {lang_cfg['PLACEHOLDER_DATA_MISSING']}")
            lesson_time_float = extract_float_time(time_str); current_module_total_time_float += lesson_time_float
            if time_str: module_lessons_text.append(f"- {lang_cfg['OUTPUT_TIME']}: {format_lesson_time_display(lesson_time_float, lang_cfg)}")
            else: module_lessons_text.append(f"- {lang_cfg['OUTPUT_TIME']}: {lang_cfg['PLACEHOLDER_DATA_MISSING']}")
            module_lessons_text.append("")
        output_lines.append(f"{lang_cfg['OUTPUT_MODULE_TOTAL_TIME']}: {format_total_time_display(current_module_total_time_float, lang_cfg)}"); output_lines.append("")
        if module_lessons_text and module_lessons_text[-1] == "": output_lines.extend(module_lessons_text[:-1])
        else: output_lines.extend(module_lessons_text)
    final_text_output = "";
    if output_lines:
        temp_output = "\n".join(output_lines)
        final_text_output = re.sub(r'\n\s*\n', '\n\n', temp_output).strip()
        if final_text_output: final_text_output += "\n"
    return final_text_output, detected_lang

def get_canonical_field(raw_key: str) -> Optional[str]:
    raw_key_lower = raw_key.lower().strip()
    for canonical_name, variations in CANONICAL_ATTRIBUTE_FIELDS.items():
        for variation in variations:
            if variation.lower() == raw_key_lower: return canonical_name
    for canonical_name, variations in CANONICAL_ATTRIBUTE_FIELDS.items():
        for variation in variations:
            if variation.lower() in raw_key_lower: return canonical_name
    return None

def parse_check_type_versatile(text_val: str) -> dict:
    text_lower = text_val.strip().lower()
    if "практика с куратором" in text_lower or "practice with a supervisor" in text_lower or "практика з куратором" in text_lower or "práctica con supervisor" in text_lower: return {"type": "practice_supervisor", "text": text_val.strip()}
    if "ролевая игра" in text_lower or "role play" in text_lower or "рольова гра" in text_lower or "juego de roles" in text_lower : return {"type": "role_play", "text": text_val.strip()}
    if "тест" in text_lower or "test" in text_lower or "prueba" in text_lower or "examen" in text_lower: return {"type": "test", "text": text_val.strip()}
    if "практика" in text_lower or "practice" in text_lower or "práctica" in text_lower: return {"type": "practice", "text": text_val.strip()}
    return {"type": "other_check", "text": text_val.strip()}

def parse_content_available_versatile(text_val: str) -> dict:
    text_lower = text_val.strip().lower()
    if text_lower in ["да", "yes", "так", "sí"]: return {"type": "yes", "text": "100%"}
    if text_lower in ["нет", "no", "ні"]: return {"type": "no", "text": text_val.strip()}
    if "%" in text_val: return {"type": "percentage", "text": text_val.strip()}
    return {"type": "yes", "text": "100%"} # Default to yes if not clearly no or percentage

def parse_training_plan_from_string(original_content_str: str, main_table_title: str) -> Optional[TrainingPlanDetails]:
    # This is the OLD parser, kept for fallback for existing string data in DB.
    # New projects will use the LLM-based parser.
    transformed_content_str, detected_lang = transform_text_new_to_old(original_content_str)
    if not transformed_content_str or not transformed_content_str.strip():
        return TrainingPlanDetails(mainTitle=f"Content for {main_table_title} not parsable/empty (Old Parser)", sections=[], detectedLanguage=detected_lang or 'ru')

    plan_data = {"mainTitle": main_table_title, "sections": [], "detectedLanguage": detected_lang}
    current_section_dict: Optional[Dict[str, Any]] = None; current_lesson_dict: Optional[Dict[str, Any]] = None
    section_id_counter = 0; total_hours_explicitly_set_for_section = False
    lines = transformed_content_str.splitlines()
    program_summary_keywords = ["итог по всей программе", "program summary:", "підсумок програми", "resumen del programa"]
    module_line_regex_str = r"^\s*(?:###\s*\*\*)?(?:Модуль|Module|Módulo)\s*(?:№|#)?\s*([\w\d.]+)\s*[:\-]\s*(.+)$"
    module_line_no_id_regex_str = r"^\s*(?:###\s*\*\*)?(?:Модуль|Module|Módulo)\s*[:\-]*\s*([^#*(].*?)(?:\s*\*\*)?$"
    module_line_regex = re.compile(module_line_regex_str, re.IGNORECASE | re.UNICODE)
    module_line_no_id_regex = re.compile(module_line_no_id_regex_str, re.IGNORECASE | re.UNICODE)

    for line_num, line_raw in enumerate(lines, 1):
        line = line_raw.strip()
        if not line or line.startswith("---") or any(line.lower().startswith(sk) for sk in program_summary_keywords): continue
        module_match = module_line_regex.match(line); module_title_candidate = None; parsed_section_id_text = None
        if module_match: parsed_section_id_text = module_match.group(1).strip(); module_title_candidate = module_match.group(2).strip()
        else:
            module_fallback_match = module_line_no_id_regex.match(line)
            if module_fallback_match: module_title_candidate = module_fallback_match.group(1).strip()
        
        if module_title_candidate:
            if current_section_dict: plan_data["sections"].append(SectionDetail(**current_section_dict))
            section_id_counter += 1; display_section_id = parsed_section_id_text if parsed_section_id_text else str(section_id_counter)
            full_section_title = module_title_candidate.strip('.:-* ')
            if not plan_data["mainTitle"] and "." in full_section_title: plan_data["mainTitle"] = full_section_title.split('.')[0].strip()
            elif not plan_data["mainTitle"]: plan_data["mainTitle"] = main_table_title
            current_section_dict = {"id": f"№{display_section_id}", "title": full_section_title, "totalHours": 0.0, "lessons": []}
            current_lesson_dict = None; total_hours_explicitly_set_for_section = False
            combined_line_for_hours = line_raw
            if line_num < len(lines) and lines[line_num].strip(): combined_line_for_hours += " " + lines[line_num].strip()
            total_hours_regex_str = r"(?:Общее время на модуль|Total Module Duration|Загальна тривалість модуля|Duración total del módulo)\s*[:\-]*\s*([\d.,]+)\s*(?:час|год|годин|hours?|hora|horas)"
            total_hours_match = re.search(total_hours_regex_str, combined_line_for_hours, re.IGNORECASE | re.UNICODE)
            if total_hours_match:
                try:
                    current_section_dict["totalHours"] = float(total_hours_match.group(1).replace(',', '.'))
                    total_hours_explicitly_set_for_section = True
                except ValueError: print(f"Warn: Could not parse total module hours from '{total_hours_match.group(1)}'")
            continue
            
        lesson_regex_str = r"^\s*(?:\*\*)?(?:Урок|Lesson|Lección)\s*[\d.]*\s*[:\-]*\s*(?:[\"\'«“„”]?)(.+?)(?:[\"\'«“„”]?)(?:\*\*)?$"
        lesson_match = re.match(lesson_regex_str, line, re.IGNORECASE | re.UNICODE)
        if lesson_match and current_section_dict is not None:
            lesson_title_raw = lesson_match.group(1).strip(); lesson_title = re.sub(r'^[\s.:\-*"«“„”\'\[\(]+|[\s.:\-*"«“„”\'\]\)]+$', '', lesson_title_raw).strip()
            current_lesson_dict = {"title": lesson_title, "check": {}, "contentAvailable": {}, "source": "", "hours": 0.0}
            if not isinstance(current_section_dict.get("lessons"), list): current_section_dict["lessons"] = []
            current_section_dict["lessons"].append(current_lesson_dict)
            continue
            
        attr_match = re.match(r"^\s*[•*-]\s*([^:]+):\s*(.*)", line)
        if attr_match and current_lesson_dict is not None:
            key_raw, value_raw = attr_match.group(1).strip(), attr_match.group(2).strip(); canonical_field = get_canonical_field(key_raw)
            if canonical_field == "check": current_lesson_dict["check"] = parse_check_type_versatile(value_raw)
            elif canonical_field == "contentAvailable": current_lesson_dict["contentAvailable"] = parse_content_available_versatile(value_raw)
            elif canonical_field == "source": current_lesson_dict["source"] = value_raw
            elif canonical_field == "hours":
                try:
                    hours_val_match = re.search(r"([\d.,]+)", value_raw)
                    if hours_val_match:
                        lesson_hours = float(hours_val_match.group(1).replace(',', '.'))
                        current_lesson_dict["hours"] = lesson_hours
                        if current_section_dict and not total_hours_explicitly_set_for_section:
                                current_section_dict["totalHours"] = float(current_section_dict.get("totalHours", 0.0)) + lesson_hours
                except ValueError: print(f"Warn: Could not parse lesson hours: {value_raw}")
            continue
            
    if current_section_dict: plan_data["sections"].append(SectionDetail(**current_section_dict))
    if not plan_data.get("mainTitle") and plan_data["sections"]: plan_data["mainTitle"] = plan_data["sections"][0].title.split('.')[0].strip()
    elif not plan_data.get("mainTitle"): plan_data["mainTitle"] = main_table_title
    try: return TrainingPlanDetails(**plan_data)
    except Exception as e: print(f"Error Pydantic TrainingPlanDetails (Old Parser): {e}. Data: {plan_data}"); traceback.print_exc()
    return TrainingPlanDetails(mainTitle=plan_data.get("mainTitle") or "Parse Error (Old Parser)", sections=[], detectedLanguage=detected_lang)

# --- New LLM-based Parser ---
async def parse_ai_response_with_llm(
    ai_response: str,
    project_name: str, # Used for error messages or context if needed
    target_json_example: Optional[str] = None
) -> Optional[TrainingPlanDetails]:
    if not LLM_API_KEY:
        print("ERROR: LLM_API_KEY (e.g., COHERE_API_KEY) not configured. Cannot parse AI response with LLM.")
        # Fallback to a simple error message in the content
        return TrainingPlanDetails(
            mainTitle=f"LLM Parser Error for {project_name}",
            sections=[SectionDetail(id="error", title="LLM API Key not configured.", lessons=[])],
            detectedLanguage="en"
        )

    actual_json_example = target_json_example or DEFAULT_TRAINING_PLAN_JSON_EXAMPLE_FOR_LLM

    # Enhanced prompt for Cohere or similar LLM
    prompt_message = f"""
You are a highly accurate text-to-JSON parsing assistant. Your task is to convert the *entirety* of the following unstructured text into a single, structured JSON object.
Ensure *all* modules (each starting with '## Module X: ...', '## Модуль X: ...' or similar) and their respective sections and lessons present in the "Raw text to parse" are included in your JSON output's 'sections' array. Do not truncate or omit any modules or their content from the input.
The desired JSON output format is exemplified below. Ensure all fields from the text are mapped correctly to the JSON structure and that your output strictly follows this JSON format.
Pay close attention to data types: strings should be quoted (e.g., "text": ""), numerical values should be numbers (not strings), and lists should be arrays. Null values are not permitted for string fields; use an empty string "" instead if text is absent but the field itself is required according to the example structure.
Maintain the original language of the input text for all textual content in the JSON, unless a specific transformation is requested (like for 'type' fields).

Key Parsing Instructions:
- Main Title: The 'mainTitle' should be extracted from the primary title of the program, often found at the beginning (e.g., '# Program Title: ...', '# Программа обучения...'). It should be in the original language.
- Sections: Each distinct module in the input text should become a separate object in the 'sections' array.
- Section ID: The 'id' for each section object must be formatted strictly as '№' followed by the module number (e.g., '№1' for Module 1 or Модуль 1, '№2' for Module 2 or Модуль 2, and so on). Do not include the section title in the 'id' field.
- Section Title: The 'title' for each section object should be the descriptive title of the module (e.g., "Basics of Service and Operations" from "## Module 1: Basics of Service and Operations", or "Основы сервиса и операций" from "## Модуль 1: Основы сервиса и операций"). It must be in the original language.
- Lesson Title: The 'title' for each lesson must be in the original language.
- Source: The 'source' field for each lesson must be in the original language.
- Hours: 'totalHours' for sections and 'hours' for lessons should be float numbers. Ensure values like "2 hours" or "2 часа" become `2.0` and "1.5 hours" or "1.5 часа" becomes `1.5`.
- 'check' object:
    - This object must ONLY contain two string fields: 'type' and 'text'. Both fields are mandatory for each lesson.
    - The 'text' field must contain the exact string found after 'Knowledge Assessment:' (or its equivalent in other languages, like 'Проверка знаний:') in the input text. This 'text' field MUST be in the original language of the input. For example, if input is '- Проверка знаний: Тест', then 'text' is "Тест". If input is '- Knowledge Assessment: Test, practice', then 'text' is "Test, practice". If 'Knowledge Assessment:' is present but has no specific text immediately following it, use an empty string "" for this 'text' field.
    - For the 'type' field (this 'type' field should be in English as per the allowed enum values):
        - Infer the most appropriate type based on the 'Knowledge Assessment:' text, regardless of its language.
        - If the text is "Test" or "Тест", type is "test".
        - If the text is "Practice" or "Практика", type is "practice".
        - If the text is "Role-playing", "Role play", or "Ролевые игры", type is "role_play".
        - If the text is "Test, practice" or "Тест, практика", the type is "test" (the 'text' field will still contain the original "Test, practice" or "Тест, практика").
        - If the text is "Practice with Supervisor" or "Практика с куратором", type is "practice_supervisor".
        - If the text is "Case study" or "Кейс", type is "other_check".
        - For other assessment texts not listed, use 'other_check'.
        - Common 'type' values (in English) are 'test', 'practice', 'practice_supervisor', 'role_play', 'none', 'other_check'.
    - If 'Knowledge Assessment:' (or its equivalent) is not mentioned at all for a lesson, the entire 'check' object should be `{{"type": "none", "text": "N/A"}}`.
- 'contentAvailable' object:
    - This should be an object with 'type' and 'text' string fields. Both fields are mandatory for each lesson. The 'type' field should be in English.
    - If 'Content Availability' (or its equivalent) is not mentioned for a lesson, the 'contentAvailable' field in the JSON should default to `{{"type": "yes", "text": "100%"}}`.
    - If 'Content Availability' IS mentioned, parse it according to the text. Common types for 'contentAvailable' include 'yes' (meaning "100%"), 'no', 'percentage'. If 'Content Availability' is present but has no specific text, use an empty string "" for its 'text' field, and "unknown_availability" for its 'type' field.
- Missing Information: If specific information for other fields (like 'source' or 'hours') is not found in the text, use a sensible default (e.g., empty string for 'source', 0.0 for 'hours') or omit optional fields if appropriate, but always try to match the example structure and ensure field types are correct. Maintain original language for text fields.
- Language Detection: The 'detectedLanguage' field (e.g., "en", "ru") should be determined from the main language of the input text. All other textual fields like titles, sources, and particularly `check.text` should remain in that original detected language.

Raw text to parse:
---
{ai_response}
---

Example of the desired JSON output structure (ensure your output strictly follows this JSON format, including all specified fields where applicable. Note: the 'id' in this example uses 'Module X', but your output should use '№X' as per the instructions. The 'mainTitle' is also an example; extract the actual title from the raw text. 'contentAvailable' in this example shows variety, but your default for unmentioned is `{{"type": "yes", "text": "100%"}}`. Textual content like titles and `check.text` in the example are in English, but your output should reflect the language of the `Raw text to parse`):
---
{actual_json_example}
---

Return ONLY the JSON object corresponding to the parsed text. Do not include any other explanatory text or markdown formatting (like ```json ... ```) around the JSON.
The entire output must be a single, valid JSON object and must include all modules and all their lessons found in the input, with textual content in the original language.
    """

    print("--- DEBUG: LLM Input (Raw aiResponse) ---")
    print(ai_response)
    print("--- DEBUG: LLM Input (Prompt Message) ---")
    print(prompt_message)

    headers = {
        "Authorization": f"Bearer {LLM_API_KEY}",
        "Content-Type": "application/json",
    }
    # Example payload for Cohere Chat API, adjust if using a different LLM/endpoint
    payload = {
        "model": LLM_DEFAULT_MODEL,
        "message": prompt_message,
        # Adjust parameters as needed, e.g., temperature for creativity/precision
        "temperature": 0.2, # Lower temperature for more deterministic JSON output
    }

    detected_lang_by_rules = detect_language(ai_response) # Detect language beforehand

    try:
        async with httpx.AsyncClient(timeout=60.0) as client: # Increased timeout for LLM calls
            print(f"Calling LLM API at {LLM_API_URL} for project: {project_name}")
            response = await client.post(LLM_API_URL, headers=headers, json=payload)
            response.raise_for_status()
            llm_api_response_data = response.json()

            print("--- DEBUG: LLM Raw API Output ---")
            print(json.dumps(llm_api_response_data, indent=2, ensure_ascii=False))

            # Extract the text content from LLM's response (specific to Cohere Chat API structure)
            # This part needs to be adapted based on the actual LLM API response structure
            json_text_output = None
            if "text" in llm_api_response_data: # Common for Cohere's direct text generation
                json_text_output = llm_api_response_data["text"]
            elif "chatHistory" in llm_api_response_data and llm_api_response_data["chatHistory"]:
                # For Cohere chat, the last message from the assistant
                last_message = next((msg for msg in reversed(llm_api_response_data["chatHistory"]) if msg.get("role") == "CHATBOT"), None)
                if last_message and "message" in last_message:
                    json_text_output = last_message["message"]
                else: # Fallback to text if that is present.
                    json_text_output = llm_api_response_data.get("text","")
            elif llm_api_response_data.get("generations") and isinstance(llm_api_response_data["generations"], list) and llm_api_response_data["generations"][0].get("text"):
                # Common for Cohere generate endpoint
                json_text_output = llm_api_response_data["generations"][0]["text"]
            
            if json_text_output is None:
                print(f"LLM API Response did not contain expected 'text', 'chatHistory', or 'generations' field for project {project_name}. Response: {str(llm_api_response_data)[:500]}")
                return TrainingPlanDetails(
                    mainTitle=f"LLM Parsing Error (Unexpected Response Format) for {project_name}",
                    sections=[SectionDetail(id="error", title="LLM did not return expected JSON structure.", lessons=[])],
                    detectedLanguage=detected_lang_by_rules
                )
            
            print("--- DEBUG: LLM Extracted Text Output ---")
            print(json_text_output)
            
            # Clean the output: remove potential markdown code blocks if LLM adds them
            json_text_output = re.sub(r"^```json\s*|\s*```$", "", json_text_output.strip(), flags=re.MULTILINE)

            try:
                parsed_json_data = json.loads(json_text_output)
                print("--- DEBUG: LLM Parsed JSON Data ---")
                print(json.dumps(parsed_json_data, indent=2, ensure_ascii=False))
            except json.JSONDecodeError as json_e:
                print(f"Failed to decode JSON from LLM for project {project_name}. Error: {json_e}. Raw output: '{json_text_output[:500]}...'")
                return TrainingPlanDetails(
                    mainTitle=f"LLM Parsing Error (Invalid JSON) for {project_name}",
                    sections=[SectionDetail(id="error", title=f"LLM returned invalid JSON: {str(json_e)[:100]}", lessons=[])],
                    detectedLanguage=detected_lang_by_rules
                )

            # Validate with Pydantic model
            try:
                # If 'detectedLanguage' is not part of the LLM output, ensure it's set from rule-based detection
                if 'detectedLanguage' not in parsed_json_data or not parsed_json_data['detectedLanguage']:
                    parsed_json_data['detectedLanguage'] = detected_lang_by_rules
                
                # Ensure mainTitle is present, use project_name if not.
                if 'mainTitle' not in parsed_json_data or not parsed_json_data['mainTitle']:
                    parsed_json_data['mainTitle'] = project_name

                training_plan = TrainingPlanDetails(**parsed_json_data)
                print(f"Successfully parsed AI response with LLM for project: {project_name}")
                return training_plan
            except Exception as p_e: # Catches Pydantic validation errors and others
                print(f"Error validating LLM output against Pydantic model for {project_name}: {p_e}. Parsed JSON: {str(parsed_json_data)[:500]}")
                # Return the raw parsed JSON if Pydantic fails, but log error, or wrap in a basic TrainingPlanDetails
                return TrainingPlanDetails(
                    mainTitle=f"LLM Data Validation Error for {project_name}",
                    sections=[SectionDetail(id="error", title=f"LLM data validation failed: {str(p_e)[:100]}", lessons=[])],
                    detectedLanguage=parsed_json_data.get('detectedLanguage', detected_lang_by_rules) # Use language from JSON if present
                )

    except httpx.HTTPStatusError as http_e:
        print(f"LLM API call failed for {project_name}. Status: {http_e.response.status_code}, Response: {http_e.response.text[:500]}")
        error_detail = f"LLM API error ({http_e.response.status_code})"
        try:
            error_body = http_e.response.json()
            if "message" in error_body:
                error_detail += f": {error_body['message']}"
        except:
            pass # Keep generic error if body not JSON or no message
        return TrainingPlanDetails(
            mainTitle=f"LLM API Error for {project_name}",
            sections=[SectionDetail(id="error", title=error_detail, lessons=[])],
            detectedLanguage=detected_lang_by_rules
        )
    except httpx.RequestError as req_e:
        print(f"Error requesting LLM service for {project_name}: {req_e}")
        return TrainingPlanDetails(
            mainTitle=f"LLM Connection Error for {project_name}",
            sections=[SectionDetail(id="error", title=f"Could not connect to LLM service: {str(req_e)[:100]}", lessons=[])],
            detectedLanguage=detected_lang_by_rules
        )
    except Exception as e:
        print(f"Unexpected error in LLM parsing for {project_name}: {e}")
        traceback.print_exc()
        return TrainingPlanDetails(
            mainTitle=f"Unexpected LLM Parsing Error for {project_name}",
            sections=[SectionDetail(id="error", title=f"Internal error during LLM parsing: {str(e)[:100]}", lessons=[])],
            detectedLanguage=detected_lang_by_rules
        )

# --- API Endpoints ---

# --- Pipeline Endpoints ---
@app.post("/api/custom/pipelines/add", response_model=MicroproductPipelineDBResponse, status_code=status.HTTP_201_CREATED)
async def add_pipeline(pipeline_data: MicroproductPipelineCreateRequest, pool: asyncpg.Pool = Depends(get_db_pool)):
    discovery_prompts_json_for_db = {str(i+1): prompt for i, prompt in enumerate(pipeline_data.discovery_prompts_list) if prompt.strip()} if pipeline_data.discovery_prompts_list else None
    structuring_prompts_json_for_db = {str(i+1): prompt for i, prompt in enumerate(pipeline_data.structuring_prompts_list) if prompt.strip()} if pipeline_data.structuring_prompts_list else None
    query = """
        INSERT INTO microproduct_pipelines (pipeline_name, pipeline_description, is_prompts_data_collection, is_prompts_data_formating, prompts_data_collection, prompts_data_formating, created_at)
        VALUES ($1, $2, $3, $4, $5, $6, $7)
        RETURNING id, pipeline_name, pipeline_description, is_prompts_data_collection, is_prompts_data_formating, prompts_data_collection, prompts_data_formating, created_at;
    """
    try:
        async with pool.acquire() as conn:
            current_time = datetime.now(timezone.utc)
            row = await conn.fetchrow(query, pipeline_data.pipeline_name, pipeline_data.pipeline_description, pipeline_data.is_discovery_prompts, pipeline_data.is_structuring_prompts, discovery_prompts_json_for_db, structuring_prompts_json_for_db, current_time)
        if not row: raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail="Failed to create pipeline.")
        response_data = {"id": row["id"], "pipeline_name": row["pipeline_name"], "pipeline_description": row["pipeline_description"], "is_discovery_prompts": row["is_prompts_data_collection"], "is_structuring_prompts": row["is_prompts_data_formating"], "discovery_prompts": row["prompts_data_collection"], "structuring_prompts": row["prompts_data_formating"], "created_at": row["created_at"]}
        return MicroproductPipelineDBResponse(**response_data)
    except Exception as e: print(f"Error inserting pipeline: {e}"); traceback.print_exc(); raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail=f"DB error on pipeline insert: {str(e)}")

@app.get("/api/custom/pipelines", response_model=List[MicroproductPipelineGetResponse]) # Changed response_model
async def get_pipelines(pool: asyncpg.Pool = Depends(get_db_pool)):
    query = "SELECT id, pipeline_name, pipeline_description, is_prompts_data_collection, is_prompts_data_formating, prompts_data_collection, prompts_data_formating, created_at FROM microproduct_pipelines ORDER BY created_at DESC;"
    try:
        async with pool.acquire() as conn: rows = await conn.fetch(query)
        pipelines_list = []
        for row in rows:
            # Convert to DBResponse first to prepare for from_db_model
            db_model_data = {
                "id": row["id"],
                "pipeline_name": row["pipeline_name"],
                "pipeline_description": row["pipeline_description"],
                "is_discovery_prompts": row["is_prompts_data_collection"], # Correct mapping
                "is_structuring_prompts": row["is_prompts_data_formating"], # Correct mapping
                "discovery_prompts": row["prompts_data_collection"],
                "structuring_prompts": row["prompts_data_formating"],
                "created_at": row["created_at"]
            }
            db_model_instance = MicroproductPipelineDBResponse(**db_model_data)
            # Now use from_db_model to get the GetResponse version with the list
            pipelines_list.append(MicroproductPipelineGetResponse.from_db_model(db_model_instance))
        return pipelines_list
    except Exception as e:
        print(f"Error fetching pipelines: {e}")
        traceback.print_exc()
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail=f"DB error fetching pipelines: {str(e)}")
@app.get("/api/custom/pipelines/{pipeline_id}", response_model=MicroproductPipelineGetResponse)
async def get_pipeline(pipeline_id: int, pool: asyncpg.Pool = Depends(get_db_pool)):
    query = "SELECT id, pipeline_name, pipeline_description, is_prompts_data_collection, is_prompts_data_formating, prompts_data_collection, prompts_data_formating, created_at FROM microproduct_pipelines WHERE id = $1;"
    try:
        async with pool.acquire() as conn: row = await conn.fetchrow(query, pipeline_id)
        if not row: raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Pipeline not found.")
        mapped_data_for_db_model = {"id": row["id"], "pipeline_name": row["pipeline_name"], "pipeline_description": row["pipeline_description"], "is_discovery_prompts": row["is_prompts_data_collection"], "is_structuring_prompts": row["is_prompts_data_formating"], "discovery_prompts": row["prompts_data_collection"], "structuring_prompts": row["prompts_data_formating"], "created_at": row["created_at"]}
        db_model_instance = MicroproductPipelineDBResponse(**mapped_data_for_db_model)
        return MicroproductPipelineGetResponse.from_db_model(db_model_instance)
    except HTTPException as e: raise e
    except Exception as e: print(f"Error fetching pipeline {pipeline_id}: {e}"); traceback.print_exc(); raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail=f"DB error fetching pipeline: {str(e)}")

@app.put("/api/custom/pipelines/update/{pipeline_id}", response_model=MicroproductPipelineDBResponse)
async def update_pipeline(pipeline_id: int, pipeline_data: MicroproductPipelineUpdateRequest, pool: asyncpg.Pool = Depends(get_db_pool)):
    discovery_prompts_json_for_db = {str(i+1): prompt for i, prompt in enumerate(pipeline_data.discovery_prompts_list) if prompt.strip()} if pipeline_data.discovery_prompts_list else None
    structuring_prompts_json_for_db = {str(i+1): prompt for i, prompt in enumerate(pipeline_data.structuring_prompts_list) if prompt.strip()} if pipeline_data.structuring_prompts_list else None
    query = """
        UPDATE microproduct_pipelines SET pipeline_name = $1, pipeline_description = $2, is_prompts_data_collection = $3, is_prompts_data_formating = $4, prompts_data_collection = $5, prompts_data_formating = $6
        WHERE id = $7 RETURNING id, pipeline_name, pipeline_description, is_prompts_data_collection, is_prompts_data_formating, prompts_data_collection, prompts_data_formating, created_at;
    """
    try:
        async with pool.acquire() as conn:
            row = await conn.fetchrow(query, pipeline_data.pipeline_name, pipeline_data.pipeline_description, pipeline_data.is_discovery_prompts, pipeline_data.is_structuring_prompts, discovery_prompts_json_for_db, structuring_prompts_json_for_db, pipeline_id)
        if not row: raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Pipeline not found or update failed.")
        response_data = {"id": row["id"], "pipeline_name": row["pipeline_name"], "pipeline_description": row["pipeline_description"], "is_discovery_prompts": row["is_prompts_data_collection"], "is_structuring_prompts": row["is_prompts_data_formating"], "discovery_prompts": row["prompts_data_collection"], "structuring_prompts": row["prompts_data_formating"], "created_at": row["created_at"]}
        return MicroproductPipelineDBResponse(**response_data)
    except HTTPException as e: raise e
    except Exception as e: print(f"Error updating pipeline {pipeline_id}: {e}"); traceback.print_exc(); raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail=f"DB error on pipeline update: {str(e)}")

@app.delete("/api/custom/pipelines/delete/{pipeline_id}", status_code=status.HTTP_200_OK)
async def delete_pipeline(pipeline_id: int, pool: asyncpg.Pool = Depends(get_db_pool)):
    query = "DELETE FROM microproduct_pipelines WHERE id = $1 RETURNING id;"
    try:
        async with pool.acquire() as conn: deleted_id = await conn.fetchval(query, pipeline_id)
        if deleted_id is None: raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Pipeline not found.")
        return {"detail": f"Successfully deleted pipeline with ID {pipeline_id}."}
    except HTTPException as e: raise e
    except Exception as e: print(f"Error deleting pipeline {pipeline_id}: {e}"); traceback.print_exc(); raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail=f"DB error on pipeline deletion: {str(e)}")

# --- Project and MicroProduct Endpoints ---
@app.post("/api/custom/projects/add", response_model=ProjectDB, status_code=status.HTTP_201_CREATED)
async def add_project_to_custom_db(project_data: ProjectCreateRequest, onyx_user_id: str = Depends(get_current_onyx_user_id), pool: asyncpg.Pool = Depends(get_db_pool)):
    db_microproduct_name_to_store = project_data.microProductName if project_data.microProductName and project_data.microProductName.strip() else project_data.microProductType
    
    # Use the new LLM-based parser
    parsed_content: Optional[TrainingPlanDetails] = await parse_ai_response_with_llm(
        ai_response=project_data.aiResponse,
        project_name=project_data.projectName,
        target_json_example=project_data.target_json_example # Pass custom example if provided
    )

    content_to_store_for_db = None
    if parsed_content:
        # If LLM parsing failed and returned an error-state TrainingPlanDetails, store that.
        # Otherwise, store the successfully parsed content.
        try:
            content_to_store_for_db = parsed_content.model_dump(mode='json', exclude_none=True)
        except AttributeError: # Should not happen if parse_ai_response_with_llm always returns TrainingPlanDetails
            content_to_store_for_db = json.loads(parsed_content.json(exclude_none=True))
    else:
        # This case should ideally be handled within parse_ai_response_with_llm by returning an error-state TrainingPlanDetails.
        # However, as a safety net:
        print(f"LLM parsing returned None for project {project_data.projectName}. Storing minimal error content.")
        fallback_lang = detect_language(project_data.aiResponse) # Detect from original input for fallback
        error_content = TrainingPlanDetails(
            mainTitle=f"Parsing Error for {project_data.projectName}",
            sections=[SectionDetail(id="error", title="Failed to parse AI response with LLM.", lessons=[])],
            detectedLanguage=fallback_lang
        )
        content_to_store_for_db = error_content.model_dump(mode='json', exclude_none=True)

    insert_query = """
        INSERT INTO projects (onyx_user_id, project_name, product_type, microproduct_type, microproduct_name, microproduct_content, created_at)
        VALUES ($1, $2, $3, $4, $5, $6, NOW())
        RETURNING id, onyx_user_id, project_name, product_type, microproduct_type, microproduct_name, microproduct_content, created_at;
    """
    try:
        async with pool.acquire() as conn:
            row = await conn.fetchrow(insert_query, onyx_user_id, project_data.projectName, project_data.product, project_data.microProductType, db_microproduct_name_to_store, content_to_store_for_db)
        if not row:
            raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail="Failed to create project entry.")
        
        # Ensure the microproduct_content from DB is correctly formed for ProjectDB model
        # This handles if content_to_store_for_db was None or if DB returns it differently
        db_content = row["microproduct_content"]
        if db_content and isinstance(db_content, dict):
            final_content_for_model = TrainingPlanDetails(**db_content)
        elif db_content and isinstance(db_content, str): # Should not happen with JSONB, but defensive
            try:
                final_content_for_model = TrainingPlanDetails(**json.loads(db_content))
            except:
                final_content_for_model = None # Or some error state TrainingPlanDetails
        else:
            final_content_for_model = None

        return ProjectDB(
            id=row["id"],
            onyx_user_id=row["onyx_user_id"],
            project_name=row["project_name"],
            product_type=row["product_type"],
            microproduct_type=row["microproduct_type"],
            microproduct_name=row["microproduct_name"],
            microproduct_content=final_content_for_model,
            created_at=row["created_at"]
        )
    except Exception as e:
        print(f"Error inserting project: {e}")
        traceback.print_exc()
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail=f"DB error on insert: {str(e)}")

@app.get("/api/custom/projects/{project_id}", response_model=ProjectDetailForEditResponse)
async def get_project_details_for_edit(project_id: int, onyx_user_id: str = Depends(get_current_onyx_user_id), pool: asyncpg.Pool = Depends(get_db_pool)):
    query = "SELECT id, project_name, product_type, microproduct_type, microproduct_name, microproduct_content, created_at FROM projects WHERE id = $1 AND onyx_user_id = $2;"
    try:
        async with pool.acquire() as conn: row = await conn.fetchrow(query, project_id, onyx_user_id)
        if not row: raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Project not found.")
        
        row_dict = dict(row)
        db_content = row_dict.get("microproduct_content")
        parsed_content_for_response: Optional[TrainingPlanDetails] = None

        if db_content:
            if isinstance(db_content, dict):
                try:
                    parsed_content_for_response = TrainingPlanDetails(**db_content)
                except Exception as e:
                    print(f"Pydantic validation error for DB JSON content (project {project_id}): {e}")
                    # Fallback for potentially malformed JSON in DB or if it's a string from old parser
                    if isinstance(db_content, str): # Should ideally not happen with JSONB if data is good
                        parsed_content_for_response = parse_training_plan_from_string(db_content, row_dict["project_name"])
                    else: # Malformed JSON dict
                        parsed_content_for_response = TrainingPlanDetails(mainTitle=f"Content for {row_dict['project_name']} (validation error)", sections=[], detectedLanguage='ru')

            elif isinstance(db_content, str): # Old parser data stored as string
                parsed_content_for_response = parse_training_plan_from_string(db_content, row_dict["project_name"])
        
        return ProjectDetailForEditResponse(
            id=row_dict["id"], 
            projectName=row_dict["project_name"], 
            product=row_dict.get("product_type"), 
            microProductType=row_dict.get("microproduct_type"), 
            microProductName=row_dict.get("microproduct_name"), 
            microProductContent=parsed_content_for_response, 
            createdAt=row_dict.get("created_at")
        )
    except HTTPException as e: raise e
    except Exception as e: print(f"Error fetching project {project_id} for edit: {e}"); traceback.print_exc(); raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail=f"DB error fetching project details: {str(e)}")

@app.put("/api/custom/projects/update/{project_id}", response_model=ProjectDB)
async def update_project_in_db(project_id: int, project_update_data: ProjectUpdateRequest, onyx_user_id: str = Depends(get_current_onyx_user_id), pool: asyncpg.Pool = Depends(get_db_pool)):
    db_microproduct_name_to_store = project_update_data.microProductName
    if db_microproduct_name_to_store is None or not db_microproduct_name_to_store.strip(): db_microproduct_name_to_store = project_update_data.microProductType
    
    content_to_store_for_db = None
    if project_update_data.microProductContent:
        try: content_to_store_for_db = project_update_data.microProductContent.model_dump(mode='json', exclude_none=True)
        except AttributeError: content_to_store_for_db = json.loads(project_update_data.microProductContent.json(exclude_none=True))

    update_query = """
        UPDATE projects SET project_name = $1, product_type = $2, microproduct_type = $3, microproduct_name = $4, microproduct_content = $5
        WHERE id = $6 AND onyx_user_id = $7
        RETURNING id, onyx_user_id, project_name, product_type, microproduct_type, microproduct_name, microproduct_content, created_at;
    """
    try:
        async with pool.acquire() as conn: row = await conn.fetchrow(update_query, project_update_data.projectName, project_update_data.product, project_update_data.microProductType, db_microproduct_name_to_store, content_to_store_for_db, project_id, onyx_user_id)
        if not row: raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Project not found or update failed (user may not own project).")
        
        db_content = row["microproduct_content"]
        final_content_for_model = None
        if db_content and isinstance(db_content, dict):
            try:
                final_content_for_model = TrainingPlanDetails(**db_content)
            except Exception as e:
                print(f"Pydantic validation error for updated DB JSON content (project {project_id}): {e}")
                # Potentially fallback or error state, but for update, assume data is now structured
        
        return ProjectDB(
            id=row["id"],
            onyx_user_id=row["onyx_user_id"],
            project_name=row["project_name"],
            product_type=row["product_type"],
            microproduct_type=row["microproduct_type"],
            microproduct_name=row["microproduct_name"],
            microproduct_content=final_content_for_model, # Use validated content
            created_at=row["created_at"]
        )
    except HTTPException as e: raise e
    except Exception as e: print(f"Error updating project {project_id}: {e}"); traceback.print_exc(); raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail=f"DB error on update: {str(e)}")

@app.get("/api/custom/projects", response_model=List[ProjectApiResponse])
async def get_user_projects_from_db_transformed(onyx_user_id: str = Depends(get_current_onyx_user_id), pool: asyncpg.Pool = Depends(get_db_pool)):
    select_query = "SELECT id, project_name, product_type, microproduct_type, microproduct_name, created_at FROM projects WHERE onyx_user_id = $1 ORDER BY created_at DESC;"
    try:
        async with pool.acquire() as conn: db_rows = await conn.fetch(select_query, onyx_user_id)
        transformed_projects: List[ProjectApiResponse] = []
        for r_dict_full in [dict(row) for row in db_rows]:
            project_db_id = r_dict_full.get('id')
            if project_db_id is None: print(f"WARNING: Project row encountered without an ID (user: {onyx_user_id}): {r_dict_full.get('project_name')}"); continue
            pn = r_dict_full.get('project_name', 'N/A'); pt = r_dict_full.get('product_type', 'N/A')
            name_for_display = r_dict_full.get('microproduct_name') or r_dict_full.get('microproduct_type', 'Unnamed MicroProduct')
            type_for_slug_generation = r_dict_full.get('microproduct_type');
            if not type_for_slug_generation: type_for_slug_generation = "default-mptype-slug"
            ps = create_slug(pn); pts_slug = create_slug(pt); mpt_type_slug = create_slug(type_for_slug_generation)
            wlp = f"/projects/{ps}/{pts_slug}/{mpt_type_slug}"; pdf_doc_identifier_slug = create_slug(f'{pn}_{pt}_{type_for_slug_generation}'); pdflp = f"pdf/{pdf_doc_identifier_slug}"
            mpa = MicroProductApiResponse(name=name_for_display, slug=mpt_type_slug, webLinkPath=wlp, pdfLinkPath=pdflp, details=None)
            pra = ProjectApiResponse(id=project_db_id, projectName=pn, projectSlug=ps, product=pt, productSlug=pts_slug, microProduct=mpa)
            transformed_projects.append(pra)
        return transformed_projects
    except Exception as e: print(f"Error fetching projects: {e}"); traceback.print_exc(); raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail=f"DB error while fetching projects: {str(e)}")

@app.get("/api/custom/microproducts/{project_slug}/{product_slug}/{micro_product_type_slug}", response_model=MicroProductApiResponse, responses={404: {"model": ErrorDetail}})
async def get_microproduct_detail_from_db(project_slug: str, product_slug: str, micro_product_type_slug: str, onyx_user_id: str = Depends(get_current_onyx_user_id), pool: asyncpg.Pool = Depends(get_db_pool)):
    try:
        async with pool.acquire() as connection: all_projects_raw = await connection.fetch("SELECT id, project_name, product_type, microproduct_type, microproduct_name, microproduct_content, created_at FROM projects WHERE onyx_user_id = $1", onyx_user_id)
        found_project_row_dict = None
        for r_dict in [dict(r) for r in all_projects_raw]:
            db_project_slug = create_slug(r_dict.get('project_name')); db_product_type_slug = create_slug(r_dict.get('product_type')); db_microproduct_type_slug = create_slug(r_dict.get('microproduct_type'))
            if (db_project_slug == project_slug and db_product_type_slug == product_slug and db_microproduct_type_slug == micro_product_type_slug): found_project_row_dict = r_dict; break
        if not found_project_row_dict: raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Micro-product not found.")
        
        project_name_from_db = found_project_row_dict['project_name']; product_type_from_db = found_project_row_dict.get('product_type', 'N/A')
        microproduct_display_name = found_project_row_dict.get('microproduct_name') or found_project_row_dict.get('microproduct_type', 'N/A')
        microproduct_type_for_routing = found_project_row_dict.get('microproduct_type') or "default-type"
        microproduct_content_json = found_project_row_dict.get('microproduct_content')
        details_data: Optional[TrainingPlanDetails] = None

        if microproduct_content_json:
            if isinstance(microproduct_content_json, dict): # Modern JSONB data
                try:
                    details_data = TrainingPlanDetails(**microproduct_content_json)
                except Exception as pydantic_e:
                    print(f"Error validating TrainingPlanDetails from DB JSON for project {project_name_from_db} (detail view): {pydantic_e}")
                    details_data = TrainingPlanDetails(mainTitle=f"Content for {microproduct_display_name} (validation error)", sections=[], detectedLanguage=microproduct_content_json.get('detectedLanguage', 'ru'))
            elif isinstance(microproduct_content_json, str): # Legacy string data, try old parser
                print(f"Attempting to parse legacy string data for project {project_name_from_db}")
                details_data = parse_training_plan_from_string(microproduct_content_json, project_name_from_db)
            else: # Should not happen
                details_data = TrainingPlanDetails(mainTitle=f"Content for {microproduct_display_name} (unknown format)", sections=[], detectedLanguage='ru')
        else:
            details_data = TrainingPlanDetails(mainTitle=f"No content for {microproduct_display_name}", sections=[], detectedLanguage='ru')
            
        web_link_path = f"/projects/{project_slug}/{product_slug}/{micro_product_type_slug}"; pdf_doc_identifier_slug = create_slug(f"{project_name_from_db}_{product_type_from_db}_{microproduct_type_for_routing}"); pdf_link_path = f"pdf/{pdf_doc_identifier_slug}"
        return MicroProductApiResponse(name=microproduct_display_name, slug=micro_product_type_slug, webLinkPath=web_link_path, pdfLinkPath=pdf_link_path, details=details_data)
    except HTTPException as e: raise e
    except Exception as e: print(f"Error fetching microproduct detail: {e}"); traceback.print_exc(); raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail=f"Server error: {str(e)}")

@app.get("/api/custom/pdf/{document_slug}", response_class=FileResponse, responses={404: {"model": ErrorDetail}, 500: {"model": ErrorDetail}})
async def download_micro_product_pdf_from_db(document_slug: str, onyx_user_id: str = Depends(get_current_onyx_user_id), pool: asyncpg.Pool = Depends(get_db_pool)):
    print(f"PDF req for doc_slug: {document_slug}, user {onyx_user_id}")
    async with pool.acquire() as conn: user_projects_raw = await conn.fetch("SELECT id, project_name, product_type, microproduct_type, microproduct_name, microproduct_content, created_at FROM projects WHERE onyx_user_id = $1", onyx_user_id)
    target_row_dict = None; mp_name_for_pdf_context = "document"; project_name_for_pdf_context = "Project"; user_friendly_pdf_filename = f"{create_slug(document_slug)}_{uuid.uuid4().hex[:8]}.pdf"
    for r_dict in [dict(r) for r in user_projects_raw]:
        pn_db = r_dict['project_name']; pt_db = r_dict.get('product_type',''); mpt_type_for_slug = r_dict.get('microproduct_type', '')
        current_pdf_slug = create_slug(f"{pn_db}_{pt_db}_{mpt_type_for_slug}")
        if current_pdf_slug == document_slug:
            target_row_dict = r_dict; mp_name_for_pdf_context = r_dict.get('microproduct_name') or mpt_type_for_slug or pn_db; project_name_for_pdf_context = pn_db
            user_friendly_pdf_filename = f"{create_slug(mp_name_for_pdf_context)}_{uuid.uuid4().hex[:8]}.pdf"; break
    if not target_row_dict: raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail=f"PDF definition not found for slug: {document_slug}")
    
    content_json = target_row_dict.get('microproduct_content'); details_pdf: Optional[TrainingPlanDetails] = None; detected_lang_for_pdf = 'ru'
    
    if content_json:
        if isinstance(content_json, dict): # Modern JSONB data
            try:
                details_pdf = TrainingPlanDetails(**content_json)
                if details_pdf and details_pdf.detectedLanguage: detected_lang_for_pdf = details_pdf.detectedLanguage
            except Exception as pydantic_e:
                print(f"Error validating TrainingPlanDetails from DB JSON for PDF ({document_slug}): {pydantic_e}")
                details_pdf = TrainingPlanDetails(mainTitle=f"Content for '{mp_name_for_pdf_context}' (validation error).", sections=[], detectedLanguage=content_json.get('detectedLanguage', 'ru'))
        elif isinstance(content_json, str): # Legacy string data, try old parser
            print(f"Attempting to parse legacy string data for PDF generation (project: {project_name_for_pdf_context})")
            try:
                parsed_from_str = parse_training_plan_from_string(content_json, project_name_for_pdf_context)
                if parsed_from_str: details_pdf = parsed_from_str;
                if details_pdf and details_pdf.detectedLanguage: detected_lang_for_pdf = details_pdf.detectedLanguage
            except Exception as parse_e: print(f"Could not re-parse content string for PDF ({document_slug}): {parse_e}")
    
    if not details_pdf: details_pdf = TrainingPlanDetails(mainTitle=f"Content for '{mp_name_for_pdf_context}' is unavailable or unparsable.", sections=[], detectedLanguage=detected_lang_for_pdf)
    
    unique_output_filename = f"{document_slug}_{uuid.uuid4().hex[:12]}.pdf"
    try:
        context_data_for_pdf = {'details': details_pdf.model_dump(exclude_none=True)}
        current_lang_cfg = LANG_CONFIG.get(detected_lang_for_pdf, LANG_CONFIG['ru'])
        context_data_for_pdf['details']['detectedLanguage'] = detected_lang_for_pdf; context_data_for_pdf['details']['time_unit_singular'] = current_lang_cfg['TIME_UNIT_SINGULAR']
        context_data_for_pdf['details']['time_unit_decimal_plural'] = current_lang_cfg['TIME_UNIT_DECIMAL_PLURAL']; context_data_for_pdf['details']['time_unit_general_plural'] = current_lang_cfg['TIME_UNIT_GENERAL_PLURAL']
        pdf_path = await generate_pdf_from_html_template("training_plan_pdf_template.html", context_data_for_pdf, unique_output_filename)
        if not os.path.exists(pdf_path): raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail="PDF file not found after generation.")
        return FileResponse(path=pdf_path, filename=user_friendly_pdf_filename, media_type='application/pdf', headers={"Cache-Control": "no-cache, no-store, must-revalidate", "Pragma": "no-cache", "Expires": "0"})
    except Exception as e: print(f"Error in PDF endpoint for {document_slug}: {e}"); traceback.print_exc(); raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail=f"Error during PDF generation: {str(e)[:200]}")

@app.post("/api/custom/projects/delete-multiple", status_code=status.HTTP_200_OK)
async def delete_multiple_projects(delete_request: ProjectsDeleteRequest, onyx_user_id: str = Depends(get_current_onyx_user_id), pool: asyncpg.Pool = Depends(get_db_pool)):
    if not delete_request.project_ids: return JSONResponse(status_code=status.HTTP_400_BAD_REQUEST, content={"detail": "No project IDs provided for deletion."})
    try:
        async with pool.acquire() as conn:
            async with conn.transaction():
                result_status = await conn.execute("DELETE FROM projects WHERE id = ANY($1::int[]) AND onyx_user_id = $2", delete_request.project_ids, onyx_user_id)
                deleted_count_match = re.search(r"DELETE\s+(\d+)", result_status); deleted_count = int(deleted_count_match.group(1)) if deleted_count_match else 0
                print(f"User {onyx_user_id} requested deletion for IDs: {delete_request.project_ids}. Successfully deleted: {deleted_count} project(s).")
                return {"detail": f"Successfully deleted {deleted_count} project(s)."}
    except Exception as e: print(f"Error deleting projects for user {onyx_user_id}, IDs {delete_request.project_ids}: {e}"); traceback.print_exc(); raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail=f"Database error during deletion: {str(e)}")

# --- Design Template Endpoints ---
ALLOWED_MICROPRODUCT_TYPES = ["Training Plan", "Course Module", "FAQ Document", "Tutorial Script", "Marketing Copy", "Onboarding Material", "Sales Script"] # Customize this list

@app.get("/api/custom/microproduct_types", response_model=List[str])
async def get_allowed_microproduct_types_list(): # Renamed to avoid conflict if you have other type getters
    return ALLOWED_MICROPRODUCT_TYPES

@app.post("/api/custom/design_templates/upload_image", responses={
    200: {"description": "Image uploaded successfully", "content": {"application/json": {"example": {"file_path": f"/{STATIC_DESIGN_IMAGES_DIR}/your_image_name.png"}}}},
    400: {"description": "Invalid file type or other error", "model": ErrorDetail},
    413: {"description": "File too large", "model": ErrorDetail}
})
async def upload_design_template_image(file: UploadFile = File(...)):
    allowed_extensions = {".png", ".jpg", ".jpeg", ".gif", ".webp"}
    allowed_content_types = {"image/png", "image/jpeg", "image/gif", "image/webp"}
    max_file_size = 5 * 1024 * 1024  # 5 MB

    file_content = await file.read()
    if len(file_content) > max_file_size:
        raise HTTPException(status_code=status.HTTP_413_REQUEST_ENTITY_TOO_LARGE, detail=f"File too large. Max size {max_file_size // (1024*1024)}MB.")
    await file.seek(0)

    file_extension = os.path.splitext(file.filename)[1].lower()
    if file_extension not in allowed_extensions:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail=f"Invalid file type. Allowed: {', '.join(allowed_extensions)}")
    if file.content_type not in allowed_content_types:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail=f"Invalid content type. Allowed: {', '.join(allowed_content_types)}")

    safe_filename_base = str(uuid.uuid4())
    unique_filename = f"{safe_filename_base}{file_extension}"
    file_path_on_disk = os.path.join(STATIC_DESIGN_IMAGES_DIR, unique_filename)

    try:
        with open(file_path_on_disk, "wb") as buffer:
            buffer.write(file_content)
    except Exception as e:
        print(f"Error saving design image: {e}")
        traceback.print_exc()
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail=f"Could not save image: {str(e)}")
    finally:
        await file.close()

    web_accessible_path = f"/{STATIC_DESIGN_IMAGES_DIR}/{unique_filename}"
    return {"file_path": web_accessible_path}

@app.post("/api/custom/design_templates/add", response_model=DesignTemplateResponse, status_code=status.HTTP_201_CREATED)
async def add_design_template(template_data: DesignTemplateCreate, pool: asyncpg.Pool = Depends(get_db_pool)):
    query = """
        INSERT INTO design_templates (template_name, template_structuring_prompt, design_image_path, microproduct_type, component_name, date_created)
        VALUES ($1, $2, $3, $4, $5, $6)
        RETURNING id, template_name, template_structuring_prompt, design_image_path, microproduct_type, component_name, date_created;
    """
    try:
        async with pool.acquire() as conn:
            current_time = datetime.now(timezone.utc)
            row = await conn.fetchrow(query, template_data.template_name, template_data.template_structuring_prompt, template_data.design_image_path, template_data.microproduct_type, template_data.component_name, current_time)
        if not row: raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail="Failed to create design template.")
        return DesignTemplateResponse(**dict(row))
    except asyncpg.exceptions.UniqueViolationError:
        raise HTTPException(status_code=status.HTTP_409_CONFLICT, detail="Design template with this name already exists.")
    except Exception as e:
        print(f"Error inserting design template: {e}"); traceback.print_exc()
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail=f"DB error on design template insert: {str(e)}")

@app.get("/api/custom/design_templates", response_model=List[DesignTemplateResponse])
async def get_design_templates(pool: asyncpg.Pool = Depends(get_db_pool)):
    query = "SELECT id, template_name, template_structuring_prompt, design_image_path, microproduct_type, component_name, date_created FROM design_templates ORDER BY date_created DESC;"
    try:
        async with pool.acquire() as conn: rows = await conn.fetch(query)
        return [DesignTemplateResponse(**dict(row)) for row in rows]
    except Exception as e:
        print(f"Error fetching design templates: {e}"); traceback.print_exc()
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail=f"DB error fetching design templates: {str(e)}")

@app.get("/api/custom/design_templates/{template_id}", response_model=DesignTemplateResponse)
async def get_design_template(
    template_id: int,
    pool: asyncpg.Pool = Depends(get_db_pool)
):
    query = """
        SELECT id, template_name, template_structuring_prompt, design_image_path,
               microproduct_type, component_name, date_created
        FROM design_templates WHERE id = $1;
    """
    try:
        async with pool.acquire() as conn:
            row = await conn.fetchrow(query, template_id)
        if not row:
            raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Design template not found")
        return DesignTemplateResponse(**dict(row))
    except HTTPException as e:
        raise e
    except Exception as e:
        print(f"Error fetching design template {template_id}: {e}")
        traceback.print_exc()
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail=f"DB error fetching design template: {str(e)}")

@app.put("/api/custom/design_templates/update/{template_id}", response_model=DesignTemplateResponse)
async def update_design_template(
    template_id: int,
    template_data: DesignTemplateUpdate, # Use the new update model
    pool: asyncpg.Pool = Depends(get_db_pool)
):
    async with pool.acquire() as conn:
        existing_template_row = await conn.fetchrow("SELECT * FROM design_templates WHERE id = $1", template_id)
        if not existing_template_row:
            raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Design template not found")

    update_fields = template_data.model_dump(exclude_unset=True)
    
    if not update_fields:
        return DesignTemplateResponse(**dict(existing_template_row))

    set_clauses = []
    update_values = []
    i = 1 

    for key, value in update_fields.items():
        set_clauses.append(f"{key} = ${i}")
        update_values.append(value)
        i += 1
    
    update_values.append(template_id) 

    query = f"""
        UPDATE design_templates
        SET {', '.join(set_clauses)}
        WHERE id = ${i}
        RETURNING id, template_name, template_structuring_prompt, design_image_path,
                  microproduct_type, component_name, date_created;
    """
    
    try:
        async with pool.acquire() as conn:
            row = await conn.fetchrow(query, *update_values)
        if not row: 
            raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail="Failed to update design template.")
        return DesignTemplateResponse(**dict(row))
    except asyncpg.exceptions.UniqueViolationError:
        raise HTTPException(status_code=status.HTTP_409_CONFLICT, detail="Update would violate a unique constraint (e.g., template name).")
    except Exception as e:
        print(f"Error updating design template {template_id}: {e}")
        traceback.print_exc()
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail=f"DB error on design template update: {str(e)}")

@app.delete("/api/custom/design_templates/delete/{template_id}", status_code=status.HTTP_200_OK)
async def delete_design_template(
    template_id: int,
    pool: asyncpg.Pool = Depends(get_db_pool)
):
    async with pool.acquire() as conn:
        template_to_delete = await conn.fetchrow("SELECT design_image_path FROM design_templates WHERE id = $1", template_id)
        if not template_to_delete:
            raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Design template not found.")

        if template_to_delete["design_image_path"]:
            image_file_on_disk = template_to_delete["design_image_path"].lstrip('/') 
            # More robust way to get the filename if path is /static_design_images/filename.ext
            if template_to_delete["design_image_path"].startswith(f"/{STATIC_DESIGN_IMAGES_DIR}/"):
                filename_only = template_to_delete["design_image_path"][len(f"/{STATIC_DESIGN_IMAGES_DIR}/"):]
                full_image_path = os.path.join(STATIC_DESIGN_IMAGES_DIR, filename_only)
                
                if os.path.exists(full_image_path):
                    try:
                        os.remove(full_image_path)
                        print(f"Successfully deleted image file: {full_image_path}")
                    except OSError as e:
                        print(f"Error deleting image file {full_image_path}: {e}. Continuing with DB record deletion.")
                else:
                    print(f"Image file not found for deletion: {full_image_path}")
            else: # Fallback for potentially different path structures, though STATIC_DESIGN_IMAGES_DIR should prefix
                full_image_path = os.path.join(os.getcwd(), image_file_on_disk) # Assuming relative to current if not starting with specific dir
                if os.path.exists(full_image_path): # Check again with this path
                    try:
                        os.remove(full_image_path)
                        print(f"Successfully deleted image file (fallback path): {full_image_path}")
                    except OSError as e:
                        print(f"Error deleting image file (fallback path) {full_image_path}: {e}. Continuing with DB record deletion.")
                else:
                        print(f"Image file not found for deletion (fallback path): {full_image_path}")


        # Delete the database record
        deleted_count_status = await conn.execute("DELETE FROM design_templates WHERE id = $1", template_id)
    
    if deleted_count_status == "DELETE 0": 
        # This check might be redundant if template_to_delete check already passed and transactionality is not explicitly managed here for this sequence.
        # However, keeping for robustness in case of race conditions or other issues if multiple requests occur.
        # If template_to_delete was None, we've already raised 404.
        # This mainly catches if the delete operation itself reported 0 rows affected unexpectedly.
        print(f"DELETE operation reported 0 rows affected for template ID {template_id}, though it was found initially.")
        # Depending on desired strictness, could raise 404 or 500 here too.
        # For now, if template_to_delete was found, we proceed assuming deletion was okay or handled by DB.
    
    return {"detail": f"Successfully initiated deletion for design template with ID {template_id}."}


@app.get("/api/custom/health")
async def health_check():
    return {"status": "healthy"}
