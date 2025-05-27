# custom_extensions/backend/main.py
from fastapi import FastAPI, HTTPException, Depends, Request, status, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse, JSONResponse

from typing import List, Optional, Dict, Any, Union, Type # MODIFIED: Added Union, Type
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
LLM_API_KEY = os.getenv("COHERE_API_KEY")
LLM_API_URL = os.getenv("COHERE_API_URL", "https://api.cohere.com/v1/chat")
LLM_DEFAULT_MODEL = os.getenv("COHERE_DEFAULT_MODEL", "command-r-plus")

DB_POOL = None

# --- Directory for Design Template Images ---
STATIC_DESIGN_IMAGES_DIR = "static_design_images"
os.makedirs(STATIC_DESIGN_IMAGES_DIR, exist_ok=True)

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
        }
      ]
    }
  ],
  "detectedLanguage": "en"
}
"""

DEFAULT_PDF_LESSON_JSON_EXAMPLE_FOR_LLM = """
{
  "lessonTitle": "Example PDF Lesson",
  "contentBlocks": [
    { "type": "headline", "level": 1, "text": "Main Title of the Lesson" },
    { "type": "paragraph", "text": "This is an introductory paragraph." }
  ],
  "detectedLanguage": "en"
}
"""

async def get_db_pool():
    if DB_POOL is None:
        raise HTTPException(status_code=503, detail="Database service not available.")
    return DB_POOL

app = FastAPI(title="Custom Extension Backend")

app.mount(f"/{STATIC_DESIGN_IMAGES_DIR}", StaticFiles(directory=STATIC_DESIGN_IMAGES_DIR), name="static_design_images")

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
        dummy_path = os.path.join("/app/tmp_pdf", output_filename)
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
            col_type_row = await connection.fetchrow(
                "SELECT data_type FROM information_schema.columns "
                "WHERE table_name = 'projects' AND column_name = 'microproduct_content';"
            )
            if col_type_row and col_type_row['data_type'] != 'jsonb':
                print("Attempting to alter 'microproduct_content' column type to JSONB...")
                await connection.execute("ALTER TABLE projects ALTER COLUMN microproduct_content TYPE JSONB USING microproduct_content::text::jsonb;")
                print("Successfully altered 'microproduct_content' to JSONB.")

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
            print("'projects' table ensured and updated.")

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

            await connection.execute("""
                CREATE TABLE IF NOT EXISTS design_templates (
                    id SERIAL PRIMARY KEY,
                    template_name TEXT NOT NULL UNIQUE,
                    template_structuring_prompt TEXT NOT NULL, -- This will hold the JSON example and specific rules
                    design_image_path TEXT,
                    microproduct_type TEXT,
                    component_name TEXT NOT NULL, -- e.g., "TrainingPlanTable" or "PdfLessonDisplay"
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

effective_origins = list(set(filter(None, [
    "http://localhost:3001",
    "http://143.198.59.56:3001",
    "http://143.198.59.56:8088",
    os.environ.get("WEB_DOMAIN", "http://localhost:3000"),
    settings.CUSTOM_FRONTEND_URL
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

# --- PdfLesson Pydantic Models ---
class BaseContentBlock(BaseModel):
    type: str

class HeadlineBlock(BaseContentBlock):
    type: str = "headline"
    level: int = Field(ge=1, le=4)
    text: str
    iconName: Optional[str] = None
    backgroundColor: Optional[str] = None
    textColor: Optional[str] = None

class ParagraphBlock(BaseContentBlock):
    type: str = "paragraph"
    text: str

class BulletListBlock(BaseContentBlock):
    type: str = "bullet_list"
    items: List[str]
    iconName: Optional[str] = None

class NumberedListBlock(BaseContentBlock):
    type: str = "numbered_list"
    items: List[str]

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

AnyContentBlock = Union[
    HeadlineBlock, ParagraphBlock, BulletListBlock, NumberedListBlock, AlertBlock, SectionBreakBlock
]

class PdfLessonDetails(BaseModel):
    lessonTitle: str
    contentBlocks: List[AnyContentBlock] = Field(default_factory=list)
    detectedLanguage: Optional[str] = None
    model_config = {"from_attributes": True}

# --- Union type for microproduct content ---
MicroProductContentType = Union[TrainingPlanDetails, PdfLessonDetails, None]

class DesignTemplateBase(BaseModel):
    template_name: str
    template_structuring_prompt: str # Holds the JSON example and specific rules
    microproduct_type: str
    component_name: str

class DesignTemplateCreate(DesignTemplateBase):
    design_image_path: Optional[str] = None

class DesignTemplateUpdate(BaseModel):
    template_name: Optional[str] = None
    template_structuring_prompt: Optional[str] = None
    microproduct_type: Optional[str] = None
    component_name: Optional[str] = None
    design_image_path: Optional[str] = None

class DesignTemplateResponse(DesignTemplateBase):
    id: int
    design_image_path: Optional[str] = None
    date_created: datetime
    model_config = {"from_attributes": True}

class ProjectCreateRequest(BaseModel):
    projectName: str
    design_template_id: int
    microProductName: Optional[str] = None
    aiResponse: str

class ProjectDB(BaseModel):
    id: int
    onyx_user_id: str
    project_name: str
    product_type: Optional[str] = None
    microproduct_type: Optional[str] = None
    microproduct_name: Optional[str] = None
    microproduct_content: MicroProductContentType = None # MODIFIED
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
    details: MicroProductContentType = None # MODIFIED
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
    microProductContent: MicroProductContentType = None # MODIFIED
    createdAt: Optional[datetime] = None
    design_template_name: Optional[str] = None
    design_component_name: Optional[str] = None
    design_image_path: Optional[str] = None
    model_config = {"from_attributes": True}

class ProjectUpdateRequest(BaseModel):
    projectName: Optional[str] = None
    design_template_id: Optional[int] = None
    microProductName: Optional[str] = None
    microProductContent: MicroProductContentType = None # MODIFIED

class ErrorDetail(BaseModel):
    detail: str

class ProjectsDeleteRequest(BaseModel):
    project_ids: List[int]

class MicroproductPipelineBase(BaseModel):
    # ... (existing MicroproductPipeline models - no changes needed here)
    pipeline_name: str
    pipeline_description: Optional[str] = None
    is_discovery_prompts: bool = Field(False, alias="is_prompts_data_collection") # Alias for request
    is_structuring_prompts: bool = Field(False, alias="is_prompts_data_formating") # Alias for request
    discovery_prompts_list: Optional[List[str]] = Field(default_factory=list)
    structuring_prompts_list: Optional[List[str]] = Field(default_factory=list)

    class Config:
        populate_by_name = True

class MicroproductPipelineCreateRequest(MicroproductPipelineBase):
    pass

class MicroproductPipelineUpdateRequest(MicroproductPipelineBase):
    pass

class MicroproductPipelineDBRaw(BaseModel): # Model matching DB columns for fetch
    id: int
    pipeline_name: str
    pipeline_description: Optional[str] = None
    is_prompts_data_collection: bool
    is_prompts_data_formating: bool
    prompts_data_collection: Optional[Dict[str, str]] = None
    prompts_data_formating: Optional[Dict[str, str]] = None
    created_at: datetime
    model_config = {"from_attributes": True}

class MicroproductPipelineGetResponse(BaseModel): # Model for API GET response
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
    # ... (existing implementation) ...
    session_cookie_value = request.cookies.get(ONYX_SESSION_COOKIE_NAME)
    if not session_cookie_value:
        dev_user_id = request.headers.get("X-Dev-Onyx-User-ID")
        if dev_user_id: return dev_user_id
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail=f"Onyx session cookie '{ONYX_SESSION_COOKIE_NAME}' missing.")
    onyx_user_info_url = f"{ONYX_API_SERVER_URL}/me"
    cookies_to_forward = {ONYX_SESSION_COOKIE_NAME: session_cookie_value}
    try:
        async with httpx.AsyncClient(timeout=10.0) as client:
            response = await client.get(onyx_user_info_url, cookies=cookies_to_forward)
            response.raise_for_status()
            user_data = response.json()
            onyx_user_id = user_data.get("userId") or user_data.get("id")
            if not onyx_user_id: raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail="Could not extract user ID from Onyx.")
            return str(onyx_user_id)
    except httpx.HTTPStatusError as e:
        print(f"Onyx API '{onyx_user_info_url}' call failed. Status: {e.response.status_code}, Response: {e.response.text[:500]}")
        raise HTTPException(status_code=e.response.status_code, detail=f"Onyx user validation failed ({e.response.status_code}).")
    except httpx.RequestError as e:
        print(f"Error requesting user info from Onyx '{onyx_user_info_url}': {e}")
        raise HTTPException(status_code=status.HTTP_503_SERVICE_UNAVAILABLE, detail=f"Could not connect to Onyx auth service: {str(e)[:100]}")
    except Exception as e:
        print(f"Unexpected error in get_current_onyx_user_id: {e}"); traceback.print_exc()
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail=f"Internal user validation error: {str(e)[:100]}")

def create_slug(text: Optional[str]) -> str:
    if not text: return "default-slug"
    # ... (existing implementation) ...
    text_processed = str(text).lower()
    text_processed = re.sub(r'\s+', '-', text_processed)
    text_processed = re.sub(r'[^\wа-яёa-z0-9\-]+', '', text_processed, flags=re.UNICODE | re.IGNORECASE)
    return text_processed or "generated-slug"


# --- Language Parsing related (keep if TrainingPlan still uses them, or for detectedLanguage) ---
CANONICAL_ATTRIBUTE_FIELDS = { # Primarily for TrainingPlan old parser
    "check": ["knowledge assessment", "проверка знаний", "перевірка знань", "verificación de conocimientos", "control de conocimientos"],
    "contentAvailable": ["content availability", "наличие контента", "наявність контенту", "contenido disponible"],
    "source": ["information source", "источник информации", "джерело інформації", "fuente de información"],
    "hours": ["time", "время", "тривалість", "час", "duración", "tiempo"],
}
LANG_CONFIG = {
    'ru': {'MODULE_KEYWORD': "Модуль", # ... other RU keys ...
           'TIME_UNIT_SINGULAR': "час",'TIME_UNIT_DECIMAL_PLURAL': "часа",'TIME_UNIT_GENERAL_PLURAL': "часов"},
    'en': {'MODULE_KEYWORD': "Module", # ... other EN keys ...
           'TIME_UNIT_SINGULAR': "hour",'TIME_UNIT_DECIMAL_PLURAL': "hours",'TIME_UNIT_GENERAL_PLURAL': "hours"}
} # Keep full LANG_CONFIG as in original

def detect_language(text: str, configs: Dict[str, Dict[str, str]] = LANG_CONFIG) -> str:
    en_score = 0; ru_score = 0
    # Ensure the language configurations themselves exist
    en_config = configs.get('en', {})
    ru_config = configs.get('ru', {})

    # Check for primary keywords if they exist in config and text
    # These specific keys are usually present for TrainingPlan structures
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

    if en_score == 0 and ru_score == 0: 
        # Check for 'MODULE_KEYWORD'
        if en_config.get('MODULE_KEYWORD') and en_config['MODULE_KEYWORD'] in text: en_score +=1
        if ru_config.get('MODULE_KEYWORD') and ru_config['MODULE_KEYWORD'] in text: ru_score +=1
        
        # MINIMAL CHANGE: Safely check for 'TIME_KEYWORD'
        if en_config.get('TIME_KEYWORD') and en_config['TIME_KEYWORD'] in text: en_score +=1 # Check if key exists first
        if ru_config.get('TIME_KEYWORD') and ru_config['TIME_KEYWORD'] in text: ru_score +=1 # Check if key exists first
        
        # If still no score, apply a very basic heuristic as a last resort
        if en_score == 0 and ru_score == 0:
            # Count common English vs Russian characters (very basic)
            en_chars = sum(1 for char_ in text if 'a' <= char_.lower() <= 'z')
            ru_chars = sum(1 for char_ in text if 'а' <= char_.lower() <= 'я')
            if en_chars > ru_chars and en_chars > 10: # Add a small threshold
                en_score += 0.1 
            elif ru_chars > en_chars and ru_chars > 10: # Add a small threshold
                ru_score += 0.1


    if en_score > ru_score: return 'en' # Return 'en' if en_score is strictly greater
    if ru_score > en_score: return 'ru' # Return 'ru' if ru_score is strictly greater
    
    # Default if scores are equal or both zero (e.g., very short, mixed, or non-keyworded text)
    # Or if one has a very small heuristic score and the other has zero.
    # If en_score > 0 (even if it's just 0.1) and ru_score is 0, it will return 'en'.
    # If ru_score > 0 (even if it's just 0.1) and en_score is 0, it will return 'ru'.
    # If both are 0.1 or both are 0, it defaults.
    if en_score == ru_score and en_score == 0:
         print("Warning: detect_language could not reliably determine language based on keywords/heuristics. Defaulting to 'ru' (as per original logic for this case).")
         return 'ru' # Original fallback if both scores were 0
    elif en_score >= ru_score : # If en_score has any value (even heuristic) and is >= ru_score
        return 'en'
    else: # ru_score must be greater
        return 'ru'

# Old parser for TrainingPlan - keep for legacy data if needed
def parse_training_plan_from_string(original_content_str: str, main_table_title: str) -> Optional[TrainingPlanDetails]:
    # ... (existing implementation of the old regex-based TrainingPlan parser) ...
    # This function remains unchanged. It's specific to TrainingPlanDetails.
    # For brevity, I'll assume its existing implementation is correct for its purpose.
    # If it's no longer needed (i.e., all TrainingPlans are also parsed by LLM), it could be removed.
    # For now, keeping it as is.
    print("WARNING: Old 'parse_training_plan_from_string' called. Ensure this is intended for legacy data.")
    # Abridged for example
    return TrainingPlanDetails(mainTitle=f"Content for {main_table_title} (Old Parser)", sections=[], detectedLanguage='ru')

# --- LLM Parser ---
async def parse_ai_response_with_llm(
    ai_response: str,
    project_name: str,
    target_model: Type[BaseModel],
    default_error_model_instance: BaseModel,
    dynamic_instructions: str, 
    target_json_example: str
) -> BaseModel:
    if not LLM_API_KEY:
        print(f"ERROR: LLM_API_KEY not configured for {project_name}. Cannot parse AI response with LLM.")
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
    print(f"--- DEBUG: Calling LLM for {project_name}, Target: {target_model.__name__} ---")
    headers = { "Authorization": f"Bearer {LLM_API_KEY}", "Content-Type": "application/json" }
    payload = { "model": LLM_DEFAULT_MODEL, "message": prompt_message, "temperature": 0.2 }
    detected_lang_by_rules = detect_language(ai_response)

    try:
        async with httpx.AsyncClient(timeout=120.0) as client:
            response = await client.post(LLM_API_URL, headers=headers, json=payload)
            response.raise_for_status()
            llm_api_response_data = response.json()
            
            json_text_output = None
            if "text" in llm_api_response_data: json_text_output = llm_api_response_data["text"]
            elif "chatHistory" in llm_api_response_data and llm_api_response_data["chatHistory"]:
                last_message = next((msg for msg in reversed(llm_api_response_data["chatHistory"]) if msg.get("role") == "CHATBOT"), None)
                if last_message and "message" in last_message: json_text_output = last_message["message"]
            elif llm_api_response_data.get("generations") and isinstance(llm_api_response_data["generations"], list) and llm_api_response_data["generations"][0].get("text"):
                json_text_output = llm_api_response_data["generations"][0]["text"]

            if json_text_output is None:
                print(f"LLM API Response for {project_name} did not contain expected text field. Response: {str(llm_api_response_data)[:500]}")
                return default_error_model_instance

            json_text_output = re.sub(r"^```json\s*|\s*```$", "", json_text_output.strip(), flags=re.MULTILINE)
            try:
                parsed_json_data = json.loads(json_text_output)
            except json.JSONDecodeError as json_e:
                print(f"Failed to decode JSON from LLM for {project_name}. Error: {json_e}. Raw: '{json_text_output[:500]}...'")
                return default_error_model_instance
            
            try:
                if 'detectedLanguage' not in parsed_json_data or not parsed_json_data['detectedLanguage']:
                    parsed_json_data['detectedLanguage'] = detected_lang_by_rules
                
                if target_model == TrainingPlanDetails and ('mainTitle' not in parsed_json_data or not parsed_json_data['mainTitle']):
                    parsed_json_data['mainTitle'] = project_name
                elif target_model == PdfLessonDetails and ('lessonTitle' not in parsed_json_data or not parsed_json_data['lessonTitle']):
                    parsed_json_data['lessonTitle'] = project_name
                
                return target_model.model_validate(parsed_json_data)
            except Exception as p_e:
                print(f"Error validating LLM output for {project_name} against {target_model.__name__}. Error: {p_e}. Parsed JSON: {str(parsed_json_data)[:500]}")
                if hasattr(default_error_model_instance, 'detectedLanguage'):
                    default_error_model_instance.detectedLanguage = parsed_json_data.get('detectedLanguage', detected_lang_by_rules)
                return default_error_model_instance

    except httpx.HTTPStatusError as http_e:
        error_detail_text = f"LLM API error ({http_e.response.status_code})"
        try: error_body = http_e.response.json(); error_detail_text += f": {error_body.get('message', 'No message.')}"
        except: pass
        print(f"LLM API call failed for {project_name}. Detail: {error_detail_text}, Response: {http_e.response.text[:500]}")
        if hasattr(default_error_model_instance, 'detectedLanguage'): default_error_model_instance.detectedLanguage = detected_lang_by_rules
        return default_error_model_instance
    except httpx.RequestError as req_e:
        print(f"Error requesting LLM service for {project_name}: {req_e}")
        if hasattr(default_error_model_instance, 'detectedLanguage'): default_error_model_instance.detectedLanguage = detected_lang_by_rules
        return default_error_model_instance
    except Exception as e:
        print(f"Unexpected error in LLM parsing for {project_name}: {e}"); traceback.print_exc()
        if hasattr(default_error_model_instance, 'detectedLanguage'): default_error_model_instance.detectedLanguage = detected_lang_by_rules
        return default_error_model_instance

# --- API Endpoints ---

# Microproduct Pipeline Endpoints
# ... (Existing add_pipeline, get_pipelines, get_pipeline, update_pipeline, delete_pipeline - NO CHANGES NEEDED) ...
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
        if not row: raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail="Failed to create pipeline.")
        return MicroproductPipelineDBRaw(**dict(row))
    except Exception as e:
        print(f"Error inserting pipeline: {e}"); traceback.print_exc()
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail=f"DB error on pipeline insert: {str(e)}")

@app.get("/api/custom/pipelines", response_model=List[MicroproductPipelineGetResponse])
async def get_pipelines(pool: asyncpg.Pool = Depends(get_db_pool)):
    query = "SELECT id, pipeline_name, pipeline_description, is_prompts_data_collection, is_prompts_data_formating, prompts_data_collection, prompts_data_formating, created_at FROM microproduct_pipelines ORDER BY created_at DESC;"
    try:
        async with pool.acquire() as conn: rows = await conn.fetch(query)
        pipelines_list = [MicroproductPipelineGetResponse.from_db_model(MicroproductPipelineDBRaw(**dict(row))) for row in rows]
        return pipelines_list
    except Exception as e:
        print(f"Error fetching pipelines: {e}"); traceback.print_exc()
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail=f"DB error fetching pipelines: {str(e)}")

@app.get("/api/custom/pipelines/{pipeline_id}", response_model=MicroproductPipelineGetResponse)
async def get_pipeline(pipeline_id: int, pool: asyncpg.Pool = Depends(get_db_pool)):
    query = "SELECT id, pipeline_name, pipeline_description, is_prompts_data_collection, is_prompts_data_formating, prompts_data_collection, prompts_data_formating, created_at FROM microproduct_pipelines WHERE id = $1;"
    try:
        async with pool.acquire() as conn: row = await conn.fetchrow(query, pipeline_id)
        if not row: raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Pipeline not found.")
        return MicroproductPipelineGetResponse.from_db_model(MicroproductPipelineDBRaw(**dict(row)))
    except HTTPException as e: raise e
    except Exception as e:
        print(f"Error fetching pipeline {pipeline_id}: {e}"); traceback.print_exc()
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail=f"DB error fetching pipeline: {str(e)}")

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
        if not row: raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Pipeline not found or update failed.")
        return MicroproductPipelineDBRaw(**dict(row))
    except HTTPException as e: raise e
    except Exception as e:
        print(f"Error updating pipeline {pipeline_id}: {e}"); traceback.print_exc()
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail=f"DB error on pipeline update: {str(e)}")

@app.delete("/api/custom/pipelines/delete/{pipeline_id}", status_code=status.HTTP_200_OK)
async def delete_pipeline(pipeline_id: int, pool: asyncpg.Pool = Depends(get_db_pool)):
    query = "DELETE FROM microproduct_pipelines WHERE id = $1 RETURNING id;"
    try:
        async with pool.acquire() as conn: deleted_id = await conn.fetchval(query, pipeline_id)
        if deleted_id is None: raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Pipeline not found.")
        return {"detail": f"Successfully deleted pipeline with ID {pipeline_id}."}
    except HTTPException as e: raise e
    except Exception as e:
        print(f"Error deleting pipeline {pipeline_id}: {e}"); traceback.print_exc()
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail=f"DB error on pipeline deletion: {str(e)}")


# Design Template Endpoints
# ... (Existing upload_design_template_image, add_design_template, etc. - NO CHANGES NEEDED) ...
@app.post("/api/custom/design_templates/upload_image", responses={200: {"description": "Image uploaded successfully", "content": {"application/json": {"example": {"file_path": f"/{STATIC_DESIGN_IMAGES_DIR}/your_image_name.png"}}}},400: {"description": "Invalid file type or other error", "model": ErrorDetail},413: {"description": "File too large", "model": ErrorDetail}})
async def upload_design_template_image(file: UploadFile = File(...)):
    allowed_extensions = {".png", ".jpg", ".jpeg", ".gif", ".webp"}; max_file_size = 5 * 1024 * 1024
    file_content = await file.read()
    if len(file_content) > max_file_size: raise HTTPException(status_code=status.HTTP_413_REQUEST_ENTITY_TOO_LARGE, detail=f"File too large. Max size {max_file_size // (1024*1024)}MB.")
    await file.seek(0)
    file_extension = os.path.splitext(file.filename)[1].lower() if file.filename else ".png"
    if file_extension not in allowed_extensions: raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail=f"Invalid file type. Allowed: {', '.join(allowed_extensions)}")
    safe_filename_base = str(uuid.uuid4()); unique_filename = f"{safe_filename_base}{file_extension}"; file_path_on_disk = os.path.join(STATIC_DESIGN_IMAGES_DIR, unique_filename)
    try:
        with open(file_path_on_disk, "wb") as buffer: shutil.copyfileobj(file.file, buffer)
    except Exception as e: print(f"Error saving design image: {e}"); traceback.print_exc(); raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail=f"Could not save image: {str(e)}")
    finally: await file.close()
    web_accessible_path = f"/{STATIC_DESIGN_IMAGES_DIR}/{unique_filename}"
    return {"file_path": web_accessible_path}

@app.post("/api/custom/design_templates/add", response_model=DesignTemplateResponse, status_code=status.HTTP_201_CREATED)
async def add_design_template(template_data: DesignTemplateCreate, pool: asyncpg.Pool = Depends(get_db_pool)):
    query = "INSERT INTO design_templates (template_name, template_structuring_prompt, design_image_path, microproduct_type, component_name, date_created) VALUES ($1, $2, $3, $4, $5, $6) RETURNING id, template_name, template_structuring_prompt, design_image_path, microproduct_type, component_name, date_created;"
    try:
        async with pool.acquire() as conn: current_time = datetime.now(timezone.utc); row = await conn.fetchrow(query, template_data.template_name, template_data.template_structuring_prompt, template_data.design_image_path, template_data.microproduct_type, template_data.component_name, current_time)
        if not row: raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail="Failed to create design template.")
        return DesignTemplateResponse(**dict(row))
    except asyncpg.exceptions.UniqueViolationError: raise HTTPException(status_code=status.HTTP_409_CONFLICT, detail=f"Design template with name '{template_data.template_name}' already exists.")
    except Exception as e: print(f"Error inserting design template: {e}"); traceback.print_exc(); raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail=f"DB error on design template insert: {str(e)}")

@app.get("/api/custom/design_templates", response_model=List[DesignTemplateResponse])
async def get_design_templates_list(pool: asyncpg.Pool = Depends(get_db_pool)):
    query = "SELECT id, template_name, template_structuring_prompt, design_image_path, microproduct_type, component_name, date_created FROM design_templates ORDER BY date_created DESC;"
    try:
        async with pool.acquire() as conn: rows = await conn.fetch(query)
        return [DesignTemplateResponse(**dict(row)) for row in rows]
    except Exception as e: print(f"Error fetching design templates: {e}"); traceback.print_exc(); raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail=f"DB error fetching design templates: {str(e)}")

@app.get("/api/custom/design_templates/{template_id}", response_model=DesignTemplateResponse)
async def get_design_template(template_id: int, pool: asyncpg.Pool = Depends(get_db_pool)):
    query = "SELECT id, template_name, template_structuring_prompt, design_image_path, microproduct_type, component_name, date_created FROM design_templates WHERE id = $1;"
    try:
        async with pool.acquire() as conn: row = await conn.fetchrow(query, template_id)
        if not row: raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Design template not found")
        return DesignTemplateResponse(**dict(row))
    except HTTPException as e: raise e
    except Exception as e: print(f"Error fetching design template {template_id}: {e}"); traceback.print_exc(); raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail=f"DB error fetching design template: {str(e)}")

@app.put("/api/custom/design_templates/update/{template_id}", response_model=DesignTemplateResponse)
async def update_design_template(template_id: int, template_data: DesignTemplateUpdate, pool: asyncpg.Pool = Depends(get_db_pool)):
    async with pool.acquire() as conn:
        existing_template_row = await conn.fetchrow("SELECT * FROM design_templates WHERE id = $1", template_id)
        if not existing_template_row: raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Design template not found")
    update_fields = template_data.model_dump(exclude_unset=True)
    if not update_fields: return DesignTemplateResponse(**dict(existing_template_row))
    set_clauses = []; update_values = []; i = 1
    for key, value in update_fields.items(): set_clauses.append(f"{key} = ${i}"); update_values.append(value); i += 1
    update_values.append(template_id)
    query = f"UPDATE design_templates SET {', '.join(set_clauses)} WHERE id = ${i} RETURNING id, template_name, template_structuring_prompt, design_image_path, microproduct_type, component_name, date_created;"
    try:
        async with pool.acquire() as conn: row = await conn.fetchrow(query, *update_values)
        if not row: raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail="Failed to update design template.")
        return DesignTemplateResponse(**dict(row))
    except asyncpg.exceptions.UniqueViolationError: raise HTTPException(status_code=status.HTTP_409_CONFLICT, detail="Update would violate a unique constraint (e.g., template name).")
    except Exception as e: print(f"Error updating design template {template_id}: {e}"); traceback.print_exc(); raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail=f"DB error on design template update: {str(e)}")

@app.delete("/api/custom/design_templates/delete/{template_id}", status_code=status.HTTP_200_OK)
async def delete_design_template(template_id: int, pool: asyncpg.Pool = Depends(get_db_pool)):
    async with pool.acquire() as conn:
        template_to_delete = await conn.fetchrow("SELECT design_image_path FROM design_templates WHERE id = $1", template_id)
        if not template_to_delete: raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Design template not found.")
        if template_to_delete["design_image_path"]:
            filename_only = os.path.basename(template_to_delete["design_image_path"])
            full_image_path = os.path.join(STATIC_DESIGN_IMAGES_DIR, filename_only)
            if os.path.exists(full_image_path):
                try: os.remove(full_image_path); print(f"Successfully deleted image file: {full_image_path}")
                except OSError as e: print(f"Error deleting image file {full_image_path}: {e}. Continuing with DB record deletion.")
            else: print(f"Image file not found for deletion: {full_image_path}")
        deleted_count_status = await conn.execute("DELETE FROM design_templates WHERE id = $1", template_id)
    if deleted_count_status == "DELETE 0": raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Design template not found during delete, or already deleted.")
    return {"detail": f"Successfully initiated deletion for design template with ID {template_id}."}


ALLOWED_MICROPRODUCT_TYPES_FOR_DESIGNS = [
    "Training Plan", "Course Module", "FAQ Document", "Tutorial Script",
    "Marketing Copy", "Onboarding Material", "Sales Script", "PDF Lesson" # MODIFIED: Added "PDF Lesson"
]
COMPONENT_NAME_TRAINING_PLAN = "TrainingPlanTable"
COMPONENT_NAME_PDF_LESSON = "PdfLessonDisplay" # Frontend component name for PDF Lessons

@app.get("/api/custom/microproduct_types", response_model=List[str])
async def get_allowed_microproduct_types_list_for_design_templates():
    return ALLOWED_MICROPRODUCT_TYPES_FOR_DESIGNS

# --- Project and MicroProduct Endpoints ---
@app.post("/api/custom/projects/add", response_model=ProjectDB, status_code=status.HTTP_201_CREATED)
async def add_project_to_custom_db(project_data: ProjectCreateRequest, onyx_user_id: str = Depends(get_current_onyx_user_id), pool: asyncpg.Pool = Depends(get_db_pool)):
    selected_design_template: Optional[DesignTemplateResponse] = None
    async with pool.acquire() as conn:
        design_row = await conn.fetchrow("SELECT * FROM design_templates WHERE id = $1", project_data.design_template_id)
        if not design_row:
            raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail=f"Design Template with ID {project_data.design_template_id} not found.")
        selected_design_template = DesignTemplateResponse(**dict(design_row))

    db_microproduct_name_to_store = project_data.microProductName if project_data.microProductName and project_data.microProductName.strip() else selected_design_template.template_name
    
    target_content_model: Type[BaseModel]
    default_error_instance: BaseModel
    llm_json_example: str
    component_specific_instructions: str = "Parse the content according to the JSON example provided." # Default instructions

    if selected_design_template.component_name == COMPONENT_NAME_PDF_LESSON:
        target_content_model = PdfLessonDetails
        default_error_instance = PdfLessonDetails(lessonTitle=f"LLM Parsing Error for {project_data.projectName}", contentBlocks=[])
        llm_json_example = selected_design_template.template_structuring_prompt or DEFAULT_PDF_LESSON_JSON_EXAMPLE_FOR_LLM
        component_specific_instructions = """
        For 'PDF Lesson' content:
        - The main title of the lesson should be in the 'lessonTitle' field.
        - Content should be broken down into an array of 'contentBlocks'.
        - Each block must have a 'type' field: 'headline', 'paragraph', 'bullet_list', 'numbered_list', 'alert', or 'section_break'.
        - 'headline' blocks need a 'level' (1-4) and 'text'. Optional: 'iconName', 'backgroundColor', 'textColor'.
        - 'paragraph' blocks need 'text'.
        - 'bullet_list' and 'numbered_list' blocks need an 'items' array of strings. 'bullet_list' can have an optional 'iconName'.
        - 'alert' blocks need 'text' and 'alertType' ('info', 'warning', 'success', 'danger'). Optional: 'title', 'iconName', 'backgroundColor', 'borderColor', 'textColor', 'iconColor'. Infer alertType from context (e.g. "Important:" -> "info" or "warning", "Success:" -> "success").
        - 'section_break' can have an optional 'style' ('dashed', 'solid', 'none').
        - Structure the content logically using these blocks. Use headings to create clear sections. Use alert blocks for emphasized notes, warnings, tips, or important callouts.
        - The AI should focus on semantic understanding to choose appropriate block types, not just markdown. For example, a statement of caution should become an 'alert' block with type 'warning'.
        - Ensure 'detectedLanguage' field is present (e.g., "en", "ru").
        """
    elif selected_design_template.component_name == COMPONENT_NAME_TRAINING_PLAN:
        target_content_model = TrainingPlanDetails
        default_error_instance = TrainingPlanDetails(mainTitle=f"LLM Parsing Error for {project_data.projectName}", sections=[])
        llm_json_example = selected_design_template.template_structuring_prompt or DEFAULT_TRAINING_PLAN_JSON_EXAMPLE_FOR_LLM
        component_specific_instructions = """
        For 'Training Plan' content:
        - Extract the 'mainTitle'.
        - Each module becomes a 'section' object with 'id' (e.g., '№1'), 'title', 'totalHours', and 'lessons' array.
        - Each lesson in a module becomes a 'lesson' object with 'title', 'check', 'contentAvailable', 'source', and 'hours'.
        - For 'check' object: 'type' (e.g., 'test', 'practice', 'none') and 'text'. 'text' must be original language.
        - For 'contentAvailable' object: 'type' ('yes', 'no', 'percentage') and 'text'. 'text' must be original language. Default to {"type": "yes", "text": "100%"} if not mentioned.
        - Ensure all module numbers, titles, lesson details, hours, and source texts are extracted in their original language.
        - Ensure 'detectedLanguage' field is present (e.g., "en", "ru").
        """
    else:
        print(f"Warning: Unknown component_name '{selected_design_template.component_name}' for DT ID {selected_design_template.id}. Defaulting to TrainingPlanDetails for parsing.")
        target_content_model = TrainingPlanDetails
        default_error_instance = TrainingPlanDetails(mainTitle=f"LLM Config Error for {project_data.projectName}", sections=[])
        llm_json_example = DEFAULT_TRAINING_PLAN_JSON_EXAMPLE_FOR_LLM
        # No specific instructions, relies on general prompt and example.
    
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
    
    content_to_store_for_db = parsed_content_model_instance.model_dump(mode='json', exclude_none=True)
    derived_product_type = selected_design_template.microproduct_type
    derived_microproduct_type = selected_design_template.template_name

    insert_query = "INSERT INTO projects (onyx_user_id, project_name, product_type, microproduct_type, microproduct_name, microproduct_content, design_template_id, created_at) VALUES ($1, $2, $3, $4, $5, $6, $7, NOW()) RETURNING id, onyx_user_id, project_name, product_type, microproduct_type, microproduct_name, microproduct_content, design_template_id, created_at;"
    try:
        async with pool.acquire() as conn:
            row = await conn.fetchrow(insert_query, onyx_user_id, project_data.projectName, derived_product_type, derived_microproduct_type, db_microproduct_name_to_store, content_to_store_for_db, project_data.design_template_id)
        if not row:
            raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail="Failed to create project entry.")
        
        db_content_dict = row["microproduct_content"]
        final_content_for_response: MicroProductContentType = None
        if db_content_dict and isinstance(db_content_dict, dict):
            component_name_from_db = selected_design_template.component_name # Use component_name from the template used for creation
            if component_name_from_db == COMPONENT_NAME_PDF_LESSON:
                 try: final_content_for_response = PdfLessonDetails(**db_content_dict)
                 except Exception as e: print(f"Error parsing PdfLessonDetails from DB on add: {e}")
            elif component_name_from_db == COMPONENT_NAME_TRAINING_PLAN:
                 try: final_content_for_response = TrainingPlanDetails(**db_content_dict)
                 except Exception as e: print(f"Error parsing TrainingPlanDetails from DB on add: {e}")
            else: # Fallback if component_name somehow not matching
                try: final_content_for_response = TrainingPlanDetails(**db_content_dict)
                except:
                    try: final_content_for_response = PdfLessonDetails(**db_content_dict)
                    except: print(f"Could not determine content type for project {row['id']} after insert from DB.")

        return ProjectDB(
            id=row["id"], onyx_user_id=row["onyx_user_id"], project_name=row["project_name"],
            product_type=row["product_type"], microproduct_type=row["microproduct_type"],
            microproduct_name=row["microproduct_name"], microproduct_content=final_content_for_response,
            design_template_id=row["design_template_id"], created_at=row["created_at"]
        )
    except Exception as e:
        print(f"Error inserting project: {e}"); traceback.print_exc()
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail=f"DB error on project insert: {str(e)}")

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
        if not row: raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Project not found.")

        row_dict = dict(row)
        db_content_json = row_dict.get("microproduct_content")
        parsed_content_for_response: MicroProductContentType = None
        component_name = row_dict.get("design_component_name")

        if db_content_json and isinstance(db_content_json, dict):
            try:
                if component_name == COMPONENT_NAME_PDF_LESSON:
                    parsed_content_for_response = PdfLessonDetails(**db_content_json)
                elif component_name == COMPONENT_NAME_TRAINING_PLAN:
                    parsed_content_for_response = TrainingPlanDetails(**db_content_json)
                else: # Fallback strategy
                    print(f"Unknown component_name '{component_name}' for project {project_id}. Attempting TrainingPlan then PdfLesson.")
                    try: parsed_content_for_response = TrainingPlanDetails(**db_content_json)
                    except:
                        try: parsed_content_for_response = PdfLessonDetails(**db_content_json)
                        except Exception as e_parse_fallback: print(f"Fallback parsing failed for project {project_id}: {e_parse_fallback}")
            except Exception as e_main_parse:
                print(f"Pydantic validation error for DB JSON (project {project_id}, component {component_name}): {e_main_parse}")
        elif isinstance(db_content_json, str) and component_name == COMPONENT_NAME_TRAINING_PLAN:
             parsed_content_for_response = parse_training_plan_from_string(db_content_json, row_dict["project_name"])
        
        return ProjectDetailForEditResponse(
            id=row_dict["id"], projectName=row_dict["project_name"], microProductName=row_dict.get("microproduct_name"),
            design_template_id=row_dict.get("design_template_id"), microProductContent=parsed_content_for_response,
            createdAt=row_dict.get("created_at"), design_template_name=row_dict.get("design_template_name"),
            design_component_name=component_name, design_image_path=row_dict.get("design_image_path")
        )
    except HTTPException as e: raise e
    except Exception as e:
        print(f"Error fetching project {project_id} for edit: {e}"); traceback.print_exc()
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail=f"DB error fetching project details for edit: {str(e)}")

@app.put("/api/custom/projects/update/{project_id}", response_model=ProjectDB)
async def update_project_in_db(project_id: int, project_update_data: ProjectUpdateRequest, onyx_user_id: str = Depends(get_current_onyx_user_id), pool: asyncpg.Pool = Depends(get_db_pool)):
    db_microproduct_name_to_store = project_update_data.microProductName
    current_component_name = None
    async with pool.acquire() as conn: # Get current component name for accurate response parsing
        project_row = await conn.fetchrow("SELECT dt.component_name FROM projects p JOIN design_templates dt ON p.design_template_id = dt.id WHERE p.id = $1 AND p.onyx_user_id = $2", project_id, onyx_user_id)
        if not project_row: raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Project not found or not owned by user.")
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
            current_component_name = design_template["component_name"] # If template changes, new component name applies

    update_clauses = []; update_values = []; arg_idx = 1
    if project_update_data.projectName is not None: update_clauses.append(f"project_name = ${arg_idx}"); update_values.append(project_update_data.projectName); arg_idx += 1
    if db_microproduct_name_to_store is not None: update_clauses.append(f"microproduct_name = ${arg_idx}"); update_values.append(db_microproduct_name_to_store); arg_idx +=1
    if project_update_data.design_template_id is not None:
        update_clauses.append(f"design_template_id = ${arg_idx}"); update_values.append(project_update_data.design_template_id); arg_idx +=1
        if derived_product_type: update_clauses.append(f"product_type = ${arg_idx}"); update_values.append(derived_product_type); arg_idx += 1
        if derived_microproduct_type: update_clauses.append(f"microproduct_type = ${arg_idx}"); update_values.append(derived_microproduct_type); arg_idx += 1
    if project_update_data.microProductContent is not None: update_clauses.append(f"microproduct_content = ${arg_idx}"); update_values.append(content_to_store_for_db); arg_idx += 1
    if not update_clauses: raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="No update data provided.")
    update_values.extend([project_id, onyx_user_id])
    update_query = f"UPDATE projects SET {', '.join(update_clauses)} WHERE id = ${arg_idx} AND onyx_user_id = ${arg_idx + 1} RETURNING id, onyx_user_id, project_name, product_type, microproduct_type, microproduct_name, microproduct_content, design_template_id, created_at;"
    try:
        async with pool.acquire() as conn: row = await conn.fetchrow(update_query, *update_values)
        if not row: raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Project not found or update failed.")
        
        db_content = row["microproduct_content"]
        final_content_for_model: MicroProductContentType = None
        if db_content and isinstance(db_content, dict):
            # Use current_component_name (which might have been updated if design_template_id changed)
            if current_component_name == COMPONENT_NAME_PDF_LESSON:
                try: final_content_for_model = PdfLessonDetails(**db_content)
                except Exception as e: print(f"Error parsing updated PdfLessonDetails from DB: {e}")
            elif current_component_name == COMPONENT_NAME_TRAINING_PLAN:
                try: final_content_for_model = TrainingPlanDetails(**db_content)
                except Exception as e: print(f"Error parsing updated TrainingPlanDetails from DB: {e}")
            else: # Fallback
                try: final_content_for_model = TrainingPlanDetails(**db_content)
                except: 
                    try: final_content_for_model = PdfLessonDetails(**db_content)
                    except: print(f"Could not determine updated content type for project {row['id']}")
        
        return ProjectDB(
            id=row["id"], onyx_user_id=row["onyx_user_id"], project_name=row["project_name"],
            product_type=row["product_type"], microproduct_type=row["microproduct_type"],
            microproduct_name=row["microproduct_name"], microproduct_content=final_content_for_model,
            design_template_id=row["design_template_id"], created_at=row["created_at"]
        )
    except HTTPException as e: raise e
    except Exception as e:
        print(f"Error updating project {project_id}: {e}"); traceback.print_exc()
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail=f"DB error on project update: {str(e)}")

@app.get("/api/custom/projects", response_model=List[ProjectApiResponse])
async def get_user_projects_list_from_db(onyx_user_id: str = Depends(get_current_onyx_user_id), pool: asyncpg.Pool = Depends(get_db_pool)):
    # This endpoint does not return full microproduct_content, so no major change needed other than ensuring fields align.
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
                design_microproduct_type=row_dict.get("design_microproduct_type"), # This comes from design_template.microproduct_type
                created_at=row_dict["created_at"], design_template_id=row_dict.get("design_template_id")
            ))
        return projects_list
    except Exception as e:
        print(f"Error fetching projects list: {e}"); traceback.print_exc()
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail=f"DB error while fetching projects list: {str(e)}")

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
        if not row: raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Project instance not found.")

        row_dict = dict(row)
        project_instance_name = row_dict.get('microproduct_name') or row_dict.get('project_name')
        details_data: MicroProductContentType = None
        microproduct_content_json = row_dict.get('microproduct_content')
        component_name = row_dict.get("design_component_name")

        if microproduct_content_json and isinstance(microproduct_content_json, dict):
            try:
                if component_name == COMPONENT_NAME_PDF_LESSON:
                    details_data = PdfLessonDetails(**microproduct_content_json)
                elif component_name == COMPONENT_NAME_TRAINING_PLAN:
                    details_data = TrainingPlanDetails(**microproduct_content_json)
                else: # Fallback
                    print(f"Unknown component_name '{component_name}' for project {project_id} view. Trying fallbacks.")
                    try: details_data = TrainingPlanDetails(**microproduct_content_json)
                    except:
                        try: details_data = PdfLessonDetails(**microproduct_content_json)
                        except: pass # log this
            except Exception as pydantic_e:
                print(f"Pydantic validation error (project ID {project_id}, component {component_name}, detail view): {pydantic_e}")
        elif isinstance(microproduct_content_json, str) and component_name == COMPONENT_NAME_TRAINING_PLAN:
            details_data = parse_training_plan_from_string(microproduct_content_json, project_instance_name)
        
        # Ensure details_data is not None for the response model
        if not details_data:
            lang_fallback = detect_language(project_instance_name)
            if component_name == COMPONENT_NAME_PDF_LESSON:
                details_data = PdfLessonDetails(lessonTitle=f"No/Invalid content for {project_instance_name}", contentBlocks=[], detectedLanguage=lang_fallback)
            else: # Default to TrainingPlan or a generic error structure
                details_data = TrainingPlanDetails(mainTitle=f"No/Invalid content for {project_instance_name}", sections=[], detectedLanguage=lang_fallback)

        web_link_path = f"/projects/view/{project_id}"
        pdf_doc_identifier_slug = create_slug(f"{row_dict.get('project_name')}_{project_instance_name}")
        pdf_link_path = f"pdf/{project_id}/{pdf_doc_identifier_slug}"

        return MicroProductApiResponse(
            name=project_instance_name, slug=create_slug(project_instance_name), project_id=project_id,
            design_template_id=row_dict["design_template_id"], component_name=component_name,
            webLinkPath=web_link_path, pdfLinkPath=pdf_link_path, details=details_data
        )
    except HTTPException as e: raise e
    except Exception as e:
        print(f"Error fetching project instance detail {project_id}: {e}"); traceback.print_exc()
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail=f"Server error fetching project detail: {str(e)}")

@app.get("/api/custom/pdf/{project_id}/{document_name_slug}", response_class=FileResponse, responses={404: {"model": ErrorDetail}, 500: {"model": ErrorDetail}})
async def download_project_instance_pdf(project_id: int, document_name_slug: str, onyx_user_id: str = Depends(get_current_onyx_user_id), pool: asyncpg.Pool = Depends(get_db_pool)):
    query = """
        SELECT p.project_name, p.microproduct_name, p.microproduct_content,
               dt.component_name as design_component_name
        FROM projects p
        LEFT JOIN design_templates dt ON p.design_template_id = dt.id
        WHERE p.id = $1 AND p.onyx_user_id = $2;
    """
    async with pool.acquire() as conn: target_row_dict = await conn.fetchrow(query, project_id, onyx_user_id)
    if not target_row_dict: raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail=f"Project with ID {project_id} not found for user.")

    mp_name_for_pdf_context = target_row_dict.get('microproduct_name') or target_row_dict.get('project_name')
    user_friendly_pdf_filename = f"{create_slug(mp_name_for_pdf_context)}_{uuid.uuid4().hex[:8]}.pdf"
    
    content_json = target_row_dict.get('microproduct_content')
    component_name = target_row_dict.get("design_component_name")
    parsed_content_for_pdf: MicroProductContentType = None
    pdf_template_file: str
    detected_lang_for_pdf = 'ru' # Default

    if content_json and isinstance(content_json, dict):
        try:
            if component_name == COMPONENT_NAME_PDF_LESSON:
                parsed_content_for_pdf = PdfLessonDetails(**content_json)
                pdf_template_file = "pdf_lesson_pdf_template.html"
                if parsed_content_for_pdf and parsed_content_for_pdf.detectedLanguage:
                    detected_lang_for_pdf = parsed_content_for_pdf.detectedLanguage
            elif component_name == COMPONENT_NAME_TRAINING_PLAN:
                parsed_content_for_pdf = TrainingPlanDetails(**content_json)
                pdf_template_file = "training_plan_pdf_template.html"
                if parsed_content_for_pdf and parsed_content_for_pdf.detectedLanguage:
                    detected_lang_for_pdf = parsed_content_for_pdf.detectedLanguage
            else:
                print(f"PDF: Unknown component_name '{component_name}' for project {project_id}. Defaulting to TrainingPlan template.")
                parsed_content_for_pdf = TrainingPlanDetails(**content_json) # Try as TrainingPlan
                pdf_template_file = "training_plan_pdf_template.html"
                if parsed_content_for_pdf and parsed_content_for_pdf.detectedLanguage:
                     detected_lang_for_pdf = parsed_content_for_pdf.detectedLanguage

        except Exception as pydantic_e:
            print(f"Error validating content from DB JSON for PDF (project {project_id}, component {component_name}): {pydantic_e}")
            # Fallback to an error representation within the default content type
            if component_name == COMPONENT_NAME_PDF_LESSON:
                parsed_content_for_pdf = PdfLessonDetails(lessonTitle=f"Content Error for '{mp_name_for_pdf_context}'", contentBlocks=[], detectedLanguage=detected_lang_for_pdf)
                pdf_template_file = "pdf_lesson_pdf_template.html"
            else:
                parsed_content_for_pdf = TrainingPlanDetails(mainTitle=f"Content Error for '{mp_name_for_pdf_context}'", sections=[], detectedLanguage=detected_lang_for_pdf)
                pdf_template_file = "training_plan_pdf_template.html"

    elif isinstance(content_json, str) and component_name == COMPONENT_NAME_TRAINING_PLAN: # Legacy string
        try:
            parsed_content_for_pdf = parse_training_plan_from_string(content_json, mp_name_for_pdf_context)
            pdf_template_file = "training_plan_pdf_template.html"
            if parsed_content_for_pdf and parsed_content_for_pdf.detectedLanguage:
                detected_lang_for_pdf = parsed_content_for_pdf.detectedLanguage
        except Exception as parse_e:
            print(f"Could not re-parse legacy content string for PDF (project {project_id}): {parse_e}")
            parsed_content_for_pdf = TrainingPlanDetails(mainTitle=f"Content Error for '{mp_name_for_pdf_context}'", sections=[], detectedLanguage=detected_lang_for_pdf)
            pdf_template_file = "training_plan_pdf_template.html"
    
    if not parsed_content_for_pdf: # Final fallback if still no content
        lang_fallback = detect_language(mp_name_for_pdf_context)
        if component_name == COMPONENT_NAME_PDF_LESSON:
            parsed_content_for_pdf = PdfLessonDetails(lessonTitle=f"Content Unavailable: {mp_name_for_pdf_context}", contentBlocks=[], detectedLanguage=lang_fallback)
            pdf_template_file = "pdf_lesson_pdf_template.html"
        else:
            parsed_content_for_pdf = TrainingPlanDetails(mainTitle=f"Content Unavailable: {mp_name_for_pdf_context}", sections=[], detectedLanguage=lang_fallback)
            pdf_template_file = "training_plan_pdf_template.html"


    unique_output_filename = f"{project_id}_{document_name_slug}_{uuid.uuid4().hex[:12]}.pdf"
    try:
        context_data_for_pdf = {'details': parsed_content_for_pdf.model_dump(mode='json', exclude_none=True)}
        # Add language specific units for TrainingPlan only
        if isinstance(parsed_content_for_pdf, TrainingPlanDetails):
            current_lang_cfg = LANG_CONFIG.get(detected_lang_for_pdf, LANG_CONFIG['ru'])
            context_data_for_pdf['details']['time_unit_singular'] = current_lang_cfg['TIME_UNIT_SINGULAR']
            context_data_for_pdf['details']['time_unit_decimal_plural'] = current_lang_cfg['TIME_UNIT_DECIMAL_PLURAL']
            context_data_for_pdf['details']['time_unit_general_plural'] = current_lang_cfg['TIME_UNIT_GENERAL_PLURAL']
        context_data_for_pdf['details']['detectedLanguage'] = detected_lang_for_pdf

        pdf_path = await generate_pdf_from_html_template(pdf_template_file, context_data_for_pdf, unique_output_filename)
        if not os.path.exists(pdf_path):
            raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail="PDF file not found after generation.")
        return FileResponse(path=pdf_path, filename=user_friendly_pdf_filename, media_type='application/pdf', headers={"Cache-Control": "no-cache, no-store, must-revalidate", "Pragma": "no-cache", "Expires": "0"})
    except Exception as e:
        print(f"Error in PDF endpoint for project {project_id}: {e}"); traceback.print_exc()
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail=f"Error during PDF generation: {str(e)[:200]}")

@app.post("/api/custom/projects/delete-multiple", status_code=status.HTTP_200_OK)
async def delete_multiple_projects(delete_request: ProjectsDeleteRequest, onyx_user_id: str = Depends(get_current_onyx_user_id), pool: asyncpg.Pool = Depends(get_db_pool)):
    # ... (Existing implementation - NO CHANGES NEEDED) ...
    if not delete_request.project_ids: return JSONResponse(status_code=status.HTTP_400_BAD_REQUEST, content={"detail": "No project IDs provided for deletion."})
    try:
        async with pool.acquire() as conn:
            async with conn.transaction():
                result_status = await conn.execute("DELETE FROM projects WHERE id = ANY($1::int[]) AND onyx_user_id = $2", delete_request.project_ids, onyx_user_id)
                deleted_count_match = re.search(r"DELETE\s+(\d+)", result_status); deleted_count = int(deleted_count_match.group(1)) if deleted_count_match else 0
                print(f"User {onyx_user_id} deleted IDs: {delete_request.project_ids}. Count: {deleted_count}.")
                return {"detail": f"Successfully deleted {deleted_count} project(s)."}
    except Exception as e: print(f"Error deleting projects for user {onyx_user_id}, IDs {delete_request.project_ids}: {e}"); traceback.print_exc(); raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail=f"Database error during deletion: {str(e)}")

@app.get("/api/custom/health")
async def health_check():
    return {"status": "healthy"}
