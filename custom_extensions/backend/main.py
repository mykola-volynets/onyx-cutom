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
                    template_structuring_prompt TEXT NOT NULL,
                    design_image_path TEXT,
                    microproduct_type TEXT, 
                    component_name TEXT NOT NULL,
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

class DesignTemplateBase(BaseModel):
    template_name: str
    template_structuring_prompt: str
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
    microproduct_content: Optional[TrainingPlanDetails] = None 
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
    details: Optional[TrainingPlanDetails] = None 
    model_config = {"from_attributes": True}

class ProjectApiResponse(BaseModel): 
    id: int
    projectName: str
    projectSlug: str # Slug of the project name
    # These fields are for the specific project *instance* derived from a design template
    microproduct_name: Optional[str] = None # User-defined name for this instance
    design_template_name: Optional[str] = None # Name of the design template used
    design_microproduct_type: Optional[str] = None # Category of the design template
    created_at: datetime
    design_template_id: Optional[int] = None
    model_config = {"from_attributes": True}

class ProjectDetailForEditResponse(BaseModel): 
    id: int
    projectName: str
    microProductName: Optional[str] = None 
    design_template_id: Optional[int] = None 
    microProductContent: Optional[TrainingPlanDetails] = None 
    createdAt: Optional[datetime] = None
    design_template_name: Optional[str] = None
    design_component_name: Optional[str] = None
    design_image_path: Optional[str] = None
    model_config = {"from_attributes": True}

class ProjectUpdateRequest(BaseModel):
    projectName: Optional[str] = None 
    design_template_id: Optional[int] = None 
    microProductName: Optional[str] = None
    microProductContent: Optional[TrainingPlanDetails] = None

class ErrorDetail(BaseModel):
    detail: str

class ProjectsDeleteRequest(BaseModel):
    project_ids: List[int]

class MicroproductPipelineBase(BaseModel):
    pipeline_name: str
    pipeline_description: Optional[str] = None
    is_discovery_prompts: bool = Field(False, alias="is_prompts_data_collection") # Alias for request
    is_structuring_prompts: bool = Field(False, alias="is_prompts_data_formating") # Alias for request
    discovery_prompts_list: Optional[List[str]] = Field(default_factory=list)
    structuring_prompts_list: Optional[List[str]] = Field(default_factory=list)
    
    class Config:
        populate_by_name = True # Allows using alias in request and normal name in code

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
            is_discovery_prompts=db_model.is_prompts_data_collection, # Map from DB name
            is_structuring_prompts=db_model.is_prompts_data_formating, # Map from DB name
            discovery_prompts_list=discovery_list,
            structuring_prompts_list=structuring_list,
            created_at=db_model.created_at
        )

async def get_current_onyx_user_id(request: Request) -> str:
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
    text_processed = str(text).lower()
    text_processed = re.sub(r'\s+', '-', text_processed)
    text_processed = re.sub(r'[^\wа-яёa-z0-9\-]+', '', text_processed, flags=re.UNICODE | re.IGNORECASE)
    return text_processed or "generated-slug"

# --- Multi-language parser functions (detect_language, etc.) ---
# ... (Keep existing implementations of these functions) ...
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
    return 'ru' 

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

def parse_training_plan_from_string(original_content_str: str, main_table_title: str) -> Optional[TrainingPlanDetails]:
    # (Keep existing implementation)
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

async def parse_ai_response_with_llm( ai_response: str, project_name: str, target_json_example: Optional[str] = None ) -> Optional[TrainingPlanDetails]:
    # (Keep existing implementation)
    if not LLM_API_KEY:
        print("ERROR: LLM_API_KEY (e.g., COHERE_API_KEY) not configured. Cannot parse AI response with LLM.")
        return TrainingPlanDetails( mainTitle=f"LLM Parser Error for {project_name}", sections=[SectionDetail(id="error", title="LLM API Key not configured.", lessons=[])], detectedLanguage="en" )
    actual_json_example = target_json_example or DEFAULT_TRAINING_PLAN_JSON_EXAMPLE_FOR_LLM
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
    print("--- DEBUG: LLM Input (Raw aiResponse) ---"); print(ai_response)
    headers = { "Authorization": f"Bearer {LLM_API_KEY}", "Content-Type": "application/json" }
    payload = { "model": LLM_DEFAULT_MODEL, "message": prompt_message, "temperature": 0.2 }
    detected_lang_by_rules = detect_language(ai_response)
    try:
        async with httpx.AsyncClient(timeout=120.0) as client:
            print(f"Calling LLM API at {LLM_API_URL} for project: {project_name}")
            response = await client.post(LLM_API_URL, headers=headers, json=payload)
            response.raise_for_status()
            llm_api_response_data = response.json()
            json_text_output = None
            if "text" in llm_api_response_data: json_text_output = llm_api_response_data["text"]
            elif "chatHistory" in llm_api_response_data and llm_api_response_data["chatHistory"]:
                last_message = next((msg for msg in reversed(llm_api_response_data["chatHistory"]) if msg.get("role") == "CHATBOT"), None)
                if last_message and "message" in last_message: json_text_output = last_message["message"]
                else: json_text_output = llm_api_response_data.get("text","")
            elif llm_api_response_data.get("generations") and isinstance(llm_api_response_data["generations"], list) and llm_api_response_data["generations"][0].get("text"):
                json_text_output = llm_api_response_data["generations"][0]["text"]
            if json_text_output is None:
                print(f"LLM API Response did not contain expected text field. Response: {str(llm_api_response_data)[:500]}")
                return TrainingPlanDetails(mainTitle=f"LLM Parsing Error (Format) for {project_name}", sections=[SectionDetail(id="error", title="LLM did not return expected JSON structure.", lessons=[])], detectedLanguage=detected_lang_by_rules)
            json_text_output = re.sub(r"^```json\s*|\s*```$", "", json_text_output.strip(), flags=re.MULTILINE)
            try: parsed_json_data = json.loads(json_text_output)
            except json.JSONDecodeError as json_e:
                print(f"Failed to decode JSON from LLM. Error: {json_e}. Raw: '{json_text_output[:500]}...'")
                return TrainingPlanDetails(mainTitle=f"LLM Parsing Error (Invalid JSON) for {project_name}", sections=[SectionDetail(id="error", title=f"LLM returned invalid JSON: {str(json_e)[:100]}", lessons=[])], detectedLanguage=detected_lang_by_rules)
            try:
                if 'detectedLanguage' not in parsed_json_data or not parsed_json_data['detectedLanguage']: parsed_json_data['detectedLanguage'] = detected_lang_by_rules
                if 'mainTitle' not in parsed_json_data or not parsed_json_data['mainTitle']: parsed_json_data['mainTitle'] = project_name
                return TrainingPlanDetails(**parsed_json_data)
            except Exception as p_e:
                print(f"Error validating LLM output. Error: {p_e}. Parsed JSON: {str(parsed_json_data)[:500]}")
                return TrainingPlanDetails(mainTitle=f"LLM Data Validation Error for {project_name}", sections=[SectionDetail(id="error", title=f"LLM data validation failed: {str(p_e)[:100]}", lessons=[])], detectedLanguage=parsed_json_data.get('detectedLanguage', detected_lang_by_rules))
    except httpx.HTTPStatusError as http_e:
        error_detail_text = f"LLM API error ({http_e.response.status_code})"
        try: error_body = http_e.response.json(); error_detail_text += f": {error_body.get('message', 'No message.')}"
        except: pass
        print(f"LLM API call failed. Detail: {error_detail_text}, Response: {http_e.response.text[:500]}")
        return TrainingPlanDetails(mainTitle=f"LLM API Error for {project_name}", sections=[SectionDetail(id="error", title=error_detail_text, lessons=[])], detectedLanguage=detected_lang_by_rules)
    except httpx.RequestError as req_e:
        print(f"Error requesting LLM service: {req_e}")
        return TrainingPlanDetails(mainTitle=f"LLM Connection Error for {project_name}", sections=[SectionDetail(id="error", title=f"Could not connect to LLM service: {str(req_e)[:100]}", lessons=[])], detectedLanguage=detected_lang_by_rules)
    except Exception as e:
        print(f"Unexpected error in LLM parsing: {e}"); traceback.print_exc()
        return TrainingPlanDetails(mainTitle=f"Unexpected LLM Parsing Error for {project_name}", sections=[SectionDetail(id="error", title=f"Internal error during LLM parsing: {str(e)[:100]}", lessons=[])], detectedLanguage=detected_lang_by_rules)

# --- API Endpoints ---

# --- Microproduct Pipeline Endpoints ---
@app.post("/api/custom/pipelines/add", response_model=MicroproductPipelineDBRaw, status_code=status.HTTP_201_CREATED)
async def add_pipeline(pipeline_data: MicroproductPipelineCreateRequest, pool: asyncpg.Pool = Depends(get_db_pool)):
    discovery_prompts_json_for_db = {str(i+1): prompt for i, prompt in enumerate(pipeline_data.discovery_prompts_list) if prompt.strip()} if pipeline_data.discovery_prompts_list else None
    structuring_prompts_json_for_db = {str(i+1): prompt for i, prompt in enumerate(pipeline_data.structuring_prompts_list) if prompt.strip()} if pipeline_data.structuring_prompts_list else None
    
    # Use the Pydantic model's aliased field names for DB insertion
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
            # Pass values according to the model's internal names when accessing pipeline_data attributes
            row = await conn.fetchrow(query, pipeline_data.pipeline_name, pipeline_data.pipeline_description, 
                                      pipeline_data.is_discovery_prompts, pipeline_data.is_structuring_prompts, 
                                      discovery_prompts_json_for_db, structuring_prompts_json_for_db, current_time)
        if not row: raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail="Failed to create pipeline.")
        # Map DB column names directly to MicroproductPipelineDBRaw
        return MicroproductPipelineDBRaw(**dict(row))
    except Exception as e: 
        print(f"Error inserting pipeline: {e}"); traceback.print_exc()
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail=f"DB error on pipeline insert: {str(e)}")

@app.get("/api/custom/pipelines", response_model=List[MicroproductPipelineGetResponse])
async def get_pipelines(pool: asyncpg.Pool = Depends(get_db_pool)):
    query = "SELECT id, pipeline_name, pipeline_description, is_prompts_data_collection, is_prompts_data_formating, prompts_data_collection, prompts_data_formating, created_at FROM microproduct_pipelines ORDER BY created_at DESC;"
    try:
        async with pool.acquire() as conn: rows = await conn.fetch(query)
        pipelines_list = []
        for row in rows:
            db_model_instance = MicroproductPipelineDBRaw(**dict(row))
            pipelines_list.append(MicroproductPipelineGetResponse.from_db_model(db_model_instance))
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
        db_model_instance = MicroproductPipelineDBRaw(**dict(row))
        return MicroproductPipelineGetResponse.from_db_model(db_model_instance)
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


# --- Design Template Endpoints ---
# ... (Keep existing Design Template endpoints as provided in previous response) ...
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

ALLOWED_MICROPRODUCT_TYPES_FOR_DESIGNS = ["Training Plan", "Course Module", "FAQ Document", "Tutorial Script", "Marketing Copy", "Onboarding Material", "Sales Script"] 
@app.get("/api/custom/microproduct_types", response_model=List[str])
async def get_allowed_microproduct_types_list_for_design_templates():
    return ALLOWED_MICROPRODUCT_TYPES_FOR_DESIGNS

# --- Project and MicroProduct Endpoints (as modified previously) ---
# ... (add_project_to_custom_db, get_project_details_for_edit, update_project_in_db, get_user_projects_list_from_db, get_project_instance_detail, download_project_instance_pdf, delete_multiple_projects as per previous response) ...
@app.post("/api/custom/projects/add", response_model=ProjectDB, status_code=status.HTTP_201_CREATED)
async def add_project_to_custom_db(project_data: ProjectCreateRequest, onyx_user_id: str = Depends(get_current_onyx_user_id), pool: asyncpg.Pool = Depends(get_db_pool)):
    selected_design_template: Optional[DesignTemplateResponse] = None
    async with pool.acquire() as conn:
        design_row = await conn.fetchrow("SELECT * FROM design_templates WHERE id = $1", project_data.design_template_id)
        if not design_row: raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail=f"Design Template with ID {project_data.design_template_id} not found.")
        selected_design_template = DesignTemplateResponse(**dict(design_row))
    db_microproduct_name_to_store = project_data.microProductName if project_data.microProductName and project_data.microProductName.strip() else selected_design_template.template_name
    parsed_content: Optional[TrainingPlanDetails] = await parse_ai_response_with_llm(ai_response=project_data.aiResponse, project_name=project_data.projectName, target_json_example=selected_design_template.template_structuring_prompt)
    content_to_store_for_db = parsed_content.model_dump(mode='json', exclude_none=True) if parsed_content else TrainingPlanDetails(mainTitle=f"Parsing Error for {project_data.projectName}", sections=[SectionDetail(id="error", title="Failed to parse AI response with LLM.", lessons=[])], detectedLanguage=detect_language(project_data.aiResponse)).model_dump(mode='json', exclude_none=True)
    derived_product_type = selected_design_template.microproduct_type
    derived_microproduct_type = selected_design_template.template_name
    insert_query = "INSERT INTO projects (onyx_user_id, project_name, product_type, microproduct_type, microproduct_name, microproduct_content, design_template_id, created_at) VALUES ($1, $2, $3, $4, $5, $6, $7, NOW()) RETURNING id, onyx_user_id, project_name, product_type, microproduct_type, microproduct_name, microproduct_content, design_template_id, created_at;"
    try:
        async with pool.acquire() as conn: row = await conn.fetchrow(insert_query, onyx_user_id, project_data.projectName, derived_product_type, derived_microproduct_type, db_microproduct_name_to_store, content_to_store_for_db, project_data.design_template_id)
        if not row: raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail="Failed to create project entry.")
        db_content_dict = row["microproduct_content"]
        final_content_for_model = TrainingPlanDetails(**db_content_dict) if db_content_dict and isinstance(db_content_dict, dict) else None
        return ProjectDB(id=row["id"], onyx_user_id=row["onyx_user_id"], project_name=row["project_name"], product_type=row["product_type"], microproduct_type=row["microproduct_type"], microproduct_name=row["microproduct_name"], microproduct_content=final_content_for_model, design_template_id=row["design_template_id"], created_at=row["created_at"])
    except Exception as e: print(f"Error inserting project: {e}"); traceback.print_exc(); raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail=f"DB error on insert: {str(e)}")

@app.get("/api/custom/projects/{project_id}/edit", response_model=ProjectDetailForEditResponse)
async def get_project_details_for_edit(project_id: int, onyx_user_id: str = Depends(get_current_onyx_user_id), pool: asyncpg.Pool = Depends(get_db_pool)):
    query = """
        SELECT 
            p.id, p.project_name, p.microproduct_name, p.microproduct_content, p.created_at,
            p.design_template_id, dt.template_name as design_template_name, 
            dt.component_name as design_component_name,
            dt.design_image_path as design_image_path, -- <<< ADD THIS LINE
            p.product_type, p.microproduct_type 
        FROM projects p
        LEFT JOIN design_templates dt ON p.design_template_id = dt.id
        WHERE p.id = $1 AND p.onyx_user_id = $2;
    """
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
                    parsed_content_for_response = TrainingPlanDetails(mainTitle=f"Content for {row_dict['project_name']} (validation error)", sections=[], detectedLanguage='ru')
            elif isinstance(db_content, str): 
                parsed_content_for_response = parse_training_plan_from_string(db_content, row_dict["project_name"])
        
        return ProjectDetailForEditResponse(
            id=row_dict["id"], 
            projectName=row_dict["project_name"], 
            microProductName=row_dict.get("microproduct_name"), 
            design_template_id=row_dict.get("design_template_id"),
            microProductContent=parsed_content_for_response, 
            createdAt=row_dict.get("created_at"),
            design_template_name=row_dict.get("design_template_name"),
            design_component_name=row_dict.get("design_component_name"),
            design_image_path=row_dict.get("design_image_path") # <<< ADD THIS LINE
        )
    except HTTPException as e: raise e
    except Exception as e: print(f"Error fetching project {project_id} for edit: {e}"); traceback.print_exc(); raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail=f"DB error fetching project details: {str(e)}")

@app.put("/api/custom/projects/update/{project_id}", response_model=ProjectDB)
async def update_project_in_db(project_id: int, project_update_data: ProjectUpdateRequest, onyx_user_id: str = Depends(get_current_onyx_user_id), pool: asyncpg.Pool = Depends(get_db_pool)):
    db_microproduct_name_to_store = project_update_data.microProductName
    if (not db_microproduct_name_to_store or not db_microproduct_name_to_store.strip()) and project_update_data.design_template_id:
        async with pool.acquire() as conn: design_row = await conn.fetchrow("SELECT template_name FROM design_templates WHERE id = $1", project_update_data.design_template_id);
        if design_row: db_microproduct_name_to_store = design_row["template_name"]
    content_to_store_for_db = project_update_data.microProductContent.model_dump(mode='json', exclude_none=True) if project_update_data.microProductContent else None
    derived_product_type = None; derived_microproduct_type = None
    if project_update_data.design_template_id:
        async with pool.acquire() as conn: design_template = await conn.fetchrow("SELECT microproduct_type, template_name FROM design_templates WHERE id = $1", project_update_data.design_template_id)
        if design_template: derived_product_type = design_template["microproduct_type"]; derived_microproduct_type = design_template["template_name"]
    update_clauses = []; update_values = []; arg_idx = 1
    if project_update_data.projectName: update_clauses.append(f"project_name = ${arg_idx}"); update_values.append(project_update_data.projectName); arg_idx += 1
    if db_microproduct_name_to_store: update_clauses.append(f"microproduct_name = ${arg_idx}"); update_values.append(db_microproduct_name_to_store); arg_idx +=1
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
        db_content = row["microproduct_content"]; final_content_for_model = TrainingPlanDetails(**db_content) if db_content and isinstance(db_content, dict) else None
        return ProjectDB(id=row["id"], onyx_user_id=row["onyx_user_id"], project_name=row["project_name"], product_type=row["product_type"], microproduct_type=row["microproduct_type"], microproduct_name=row["microproduct_name"], microproduct_content=final_content_for_model, design_template_id=row["design_template_id"], created_at=row["created_at"])
    except HTTPException as e: raise e
    except Exception as e: print(f"Error updating project {project_id}: {e}"); traceback.print_exc(); raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail=f"DB error on update: {str(e)}")

@app.get("/api/custom/projects", response_model=List[ProjectApiResponse])
async def get_user_projects_list_from_db(onyx_user_id: str = Depends(get_current_onyx_user_id), pool: asyncpg.Pool = Depends(get_db_pool)):
    select_query = "SELECT p.id, p.project_name, p.microproduct_name, p.created_at, p.design_template_id, dt.template_name as design_template_name, dt.microproduct_type as design_microproduct_type FROM projects p LEFT JOIN design_templates dt ON p.design_template_id = dt.id WHERE p.onyx_user_id = $1 ORDER BY p.created_at DESC;"
    try:
        async with pool.acquire() as conn: db_rows = await conn.fetch(select_query, onyx_user_id)
        projects_list: List[ProjectApiResponse] = []
        for row in db_rows:
            row_dict = dict(row); project_slug = create_slug(row_dict.get('project_name'))
            projects_list.append(ProjectApiResponse(id=row_dict["id"], projectName=row_dict["project_name"], projectSlug=project_slug, product_type=row_dict.get("design_microproduct_type"), microproduct_name=row_dict.get("microproduct_name"), created_at=row_dict["created_at"], design_template_id=row_dict.get("design_template_id"), design_template_name=row_dict.get("design_template_name")))
        return projects_list
    except Exception as e: print(f"Error fetching projects list: {e}"); traceback.print_exc(); raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail=f"DB error while fetching projects list: {str(e)}")

@app.get("/api/custom/projects/view/{project_id}", response_model=MicroProductApiResponse, responses={404: {"model": ErrorDetail}})
async def get_project_instance_detail(project_id: int, onyx_user_id: str = Depends(get_current_onyx_user_id), pool: asyncpg.Pool = Depends(get_db_pool)):
    query = "SELECT p.id, p.project_name, p.microproduct_name, p.microproduct_content, p.design_template_id, dt.template_name as design_template_name, dt.component_name as design_component_name, dt.microproduct_type as design_microproduct_type FROM projects p JOIN design_templates dt ON p.design_template_id = dt.id WHERE p.id = $1 AND p.onyx_user_id = $2;"
    try:
        async with pool.acquire() as conn: row = await conn.fetchrow(query, project_id, onyx_user_id)
        if not row: raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Project instance not found.")
        row_dict = dict(row); project_instance_name = row_dict.get('microproduct_name') or row_dict.get('project_name')
        details_data: Optional[TrainingPlanDetails] = None; microproduct_content_json = row_dict.get('microproduct_content')
        if microproduct_content_json:
            if isinstance(microproduct_content_json, dict):
                try: details_data = TrainingPlanDetails(**microproduct_content_json)
                except Exception as pydantic_e: print(f"Pydantic validation error for DB JSON (project ID {project_id}, detail view): {pydantic_e}"); details_data = TrainingPlanDetails(mainTitle=f"Content for {project_instance_name} (validation error)", sections=[], detectedLanguage=microproduct_content_json.get('detectedLanguage', 'ru'))
            elif isinstance(microproduct_content_json, str): details_data = parse_training_plan_from_string(microproduct_content_json, project_instance_name)
        else: details_data = TrainingPlanDetails(mainTitle=f"No content for {project_instance_name}", sections=[], detectedLanguage='ru')
        web_link_path = f"/projects/view/{project_id}"; pdf_doc_identifier_slug = create_slug(f"{row_dict.get('project_name')}_{project_instance_name}"); pdf_link_path = f"pdf/{project_id}/{pdf_doc_identifier_slug}"
        return MicroProductApiResponse(name=project_instance_name, slug=create_slug(project_instance_name), project_id=project_id, design_template_id=row_dict["design_template_id"], component_name=row_dict["design_component_name"], webLinkPath=web_link_path, pdfLinkPath=pdf_link_path, details=details_data)
    except HTTPException as e: raise e
    except Exception as e: print(f"Error fetching project instance detail: {e}"); traceback.print_exc(); raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail=f"Server error: {str(e)}")

@app.get("/api/custom/pdf/{project_id}/{document_name_slug}", response_class=FileResponse, responses={404: {"model": ErrorDetail}, 500: {"model": ErrorDetail}})
async def download_project_instance_pdf(project_id: int, document_name_slug: str, onyx_user_id: str = Depends(get_current_onyx_user_id), pool: asyncpg.Pool = Depends(get_db_pool)):
    print(f"PDF req for project_id: {project_id}, doc_slug: {document_name_slug}, user {onyx_user_id}")
    query = "SELECT p.project_name, p.microproduct_name, p.microproduct_content, dt.microproduct_type as design_microproduct_type FROM projects p LEFT JOIN design_templates dt ON p.design_template_id = dt.id WHERE p.id = $1 AND p.onyx_user_id = $2;"
    async with pool.acquire() as conn: target_row_dict = await conn.fetchrow(query, project_id, onyx_user_id)
    if not target_row_dict: raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail=f"Project with ID {project_id} not found for user.")
    mp_name_for_pdf_context = target_row_dict.get('microproduct_name') or target_row_dict.get('project_name'); user_friendly_pdf_filename = f"{create_slug(mp_name_for_pdf_context)}_{uuid.uuid4().hex[:8]}.pdf"
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
    unique_output_filename_base = f"{project_id}_{document_name_slug}"; unique_output_filename = f"{unique_output_filename_base}_{uuid.uuid4().hex[:12]}.pdf"
    try:
        context_data_for_pdf = {'details': details_pdf.model_dump(exclude_none=True)}; current_lang_cfg = LANG_CONFIG.get(detected_lang_for_pdf, LANG_CONFIG['ru'])
        context_data_for_pdf['details']['detectedLanguage'] = detected_lang_for_pdf; context_data_for_pdf['details']['time_unit_singular'] = current_lang_cfg['TIME_UNIT_SINGULAR']; context_data_for_pdf['details']['time_unit_decimal_plural'] = current_lang_cfg['TIME_UNIT_DECIMAL_PLURAL']; context_data_for_pdf['details']['time_unit_general_plural'] = current_lang_cfg['TIME_UNIT_GENERAL_PLURAL']
        pdf_path = await generate_pdf_from_html_template("training_plan_pdf_template.html", context_data_for_pdf, unique_output_filename)
        if not os.path.exists(pdf_path): raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail="PDF file not found after generation.")
        return FileResponse(path=pdf_path, filename=user_friendly_pdf_filename, media_type='application/pdf', headers={"Cache-Control": "no-cache, no-store, must-revalidate", "Pragma": "no-cache", "Expires": "0"})
    except Exception as e: print(f"Error in PDF endpoint for project {project_id}: {e}"); traceback.print_exc(); raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail=f"Error during PDF generation: {str(e)[:200]}")

@app.post("/api/custom/projects/delete-multiple", status_code=status.HTTP_200_OK)
async def delete_multiple_projects(delete_request: ProjectsDeleteRequest, onyx_user_id: str = Depends(get_current_onyx_user_id), pool: asyncpg.Pool = Depends(get_db_pool)):
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
