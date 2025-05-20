# custom_extensions/backend/main.py
from fastapi import FastAPI, HTTPException, Depends, Request, status
from fastapi.middleware.cors import CORSMiddleware
from typing import List, Optional, Dict, Any
from pydantic import BaseModel, Field
import re
import os
import asyncpg
from datetime import datetime
from fastapi.responses import FileResponse, JSONResponse
import httpx
import traceback
import json
import uuid

# --- PDF Generation and Settings (Keep your existing logic or dummy) ---
# ... (Keep this section as is) ...
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


# --- Constants & DB Setup ---
CUSTOM_PROJECTS_DATABASE_URL = os.getenv("CUSTOM_PROJECTS_DATABASE_URL")
ONYX_API_SERVER_URL = "http://api_server:8080" 
ONYX_SESSION_COOKIE_NAME = os.getenv("ONYX_SESSION_COOKIE_NAME", "fastapiusersauth")

DB_POOL = None

async def get_db_pool():
    if DB_POOL is None: raise HTTPException(status_code=503, detail="Database service not available.")
    return DB_POOL

app = FastAPI(title="Custom Extension Backend")

@app.on_event("startup")
async def startup_event():
    # ... (Keep your existing startup_event that ensures microproduct_content is JSONB) ...
    print(f"Custom Backend starting...")
    global DB_POOL
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
                                          )) # Add init for proper JSONB handling
        async with DB_POOL.acquire() as connection:
            try:
                # Check if column type needs alteration (for existing installations)
                col_type_row = await connection.fetchrow(
                    "SELECT data_type FROM information_schema.columns "
                    "WHERE table_name = 'projects' AND column_name = 'microproduct_content';"
                )
                if col_type_row and col_type_row['data_type'] != 'jsonb':
                    print("Attempting to alter 'microproduct_content' column type to JSONB...")
                    # This is a risky operation if data is not valid JSON.
                    # For existing non-JSON data, a manual migration script is safer.
                    # The `USING microproduct_content::text::jsonb` attempts conversion.
                    await connection.execute("ALTER TABLE projects ALTER COLUMN microproduct_content TYPE JSONB USING microproduct_content::text::jsonb;")
                    print("Successfully altered 'microproduct_content' to JSONB.")
                elif not col_type_row:
                    # Column might not exist, will be created by CREATE TABLE
                    pass

            except Exception as alter_e:
                print(f"Notice: Could not alter 'microproduct_content' to JSONB: {alter_e}. This is expected if table/column doesn't exist or is already JSONB or if conversion fails.")


            await connection.execute("""
                CREATE TABLE IF NOT EXISTS projects (
                    id SERIAL PRIMARY KEY,
                    onyx_user_id TEXT NOT NULL,
                    project_name TEXT NOT NULL,
                    product_type TEXT,
                    microproduct_type TEXT,
                    microproduct_name TEXT,
                    microproduct_content JSONB, /* Ensured JSONB */
                    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
                );
            """)
            try:
                await connection.execute("ALTER TABLE projects ADD COLUMN IF NOT EXISTS microproduct_name TEXT;")
                print("Ensured 'microproduct_name' column exists in 'projects' table.")
            except Exception as alter_e_name:
                print(f"Notice: Could not ensure 'microproduct_name' column via ALTER: {alter_e_name}.")

            await connection.execute("CREATE INDEX IF NOT EXISTS idx_projects_onyx_user_id ON projects(onyx_user_id);")
        print("Custom projects DB pool initialized & 'projects' table ensured with JSONB content field.")
    except Exception as e:
        print(f"CRITICAL: Failed to initialize custom projects DB pool or ensure 'projects' table: {e}")
        traceback.print_exc()
        DB_POOL = None


@app.on_event("shutdown")
async def shutdown_event():
    # ... (Keep as is) ...
    if DB_POOL:
        await DB_POOL.close()
        print("Custom projects DB pool closed.")

# ... (CORS Middleware setup - keep as is) ...
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
    aiResponse: str # Raw text from AI

class ProjectDB(BaseModel): # Represents data from DB for internal use
    id: int
    onyx_user_id: str
    project_name: str
    product_type: Optional[str] = None
    microproduct_type: Optional[str] = None
    microproduct_name: Optional[str] = None
    microproduct_content: Optional[TrainingPlanDetails] = None # Parsed data
    created_at: datetime
    model_config = {"from_attributes": True}

class ErrorDetail(BaseModel):
    detail: str

class ProjectsDeleteRequest(BaseModel):
    project_ids: List[int]

# For fetching full project details for editing
class ProjectDetailForEditResponse(BaseModel):
    id: int
    projectName: str
    product: Optional[str] = None
    microProductType: Optional[str] = None
    microProductName: Optional[str] = None
    microProductContent: Optional[TrainingPlanDetails] = None # Now directly the parsed object
    createdAt: Optional[datetime] = None
    model_config = {"from_attributes": True}

# For updating a project
class ProjectUpdateRequest(BaseModel):
    projectName: str
    product: str
    microProductType: str
    microProductName: Optional[str] = None
    microProductContent: Optional[TrainingPlanDetails] = None # Send the whole object

# --- Onyx User ID Function (keep as is) ---
# ... (get_current_onyx_user_id function) ...
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

# --- Slug Creation Function (keep as is) ---
# ... (create_slug function) ...
def create_slug(text: Optional[str]) -> str:
    if not text: return "default-slug"
    text_processed = str(text).lower()
    text_processed = re.sub(r'\s+', '-', text_processed)
    text_processed = re.sub(r'[^\wа-яёa-z0-9\-]+', '', text_processed, flags=re.UNICODE | re.IGNORECASE)
    return text_processed or "generated-slug"

# --- MULTI-LANGUAGE PARSER SECTION (keep as is, used at creation and PDF, and potentially if a raw string needs re-parsing) ---
# ... (LANG_CONFIG, detect_language, extract_float_time, etc. ... parse_training_plan_from_string) ...
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


def transform_text_new_to_old(new_text: str, lang_configs: Dict = LANG_CONFIG) -> tuple[str, str]:
    detected_lang = detect_language(new_text, lang_configs)
    lang_cfg = lang_configs.get(detected_lang, lang_configs['ru']) 
    output_lines = []
    module_header_parts = [
        rf"## ({lang_cfg['MODULE_KEYWORD']}\s*(\d+)\s*:\s*([^\n]+))\n",
        r"\s*", 
        rf"\*\*{lang_cfg['TOTAL_TIME_KEYWORD']}:\*\* [^\n]+\n",
        rf"\*\*{lang_cfg['LESSONS_COUNT_KEYWORD']}:\*\* \d+\n", 
        r"\n?", 
        rf"### {lang_cfg['LESSONS_HEADER_KEYWORD']}\n"
    ]
    lessons_block_capture_part = r"([\s\S]*?)"
    lookahead_part = r"(?=\n## |\Z)"
    module_pattern_str = "".join(module_header_parts) + lessons_block_capture_part + lookahead_part
    
    try: module_pattern = re.compile(module_pattern_str, re.MULTILINE | re.IGNORECASE)
    except Exception as e:
        print(f"Error compiling module_pattern: {e}"); return "", detected_lang

    lesson_item_prefix_re_str = lang_cfg.get('LESSON_ITEM_PREFIX_RE', r"^-|^\d+\.")
    lesson_title_regex = rf"{lesson_item_prefix_re_str}\s*\*\*(.*?)\*\*\n"
    time_detail_regex = rf"(?:\s*-\s*\*\*{lang_cfg['TIME_KEYWORD']}:\*\*([^\n\r]*)(?:\r?\n|$))?"
    assessment_detail_regex = rf"(?:\s*-\s*\*\*{lang_cfg['ASSESSMENT_KEYWORD']}:\*\*([^\n\r]*)(?:\r?\n|$))?"
    source_detail_regex = rf"(?:\s*-\s*\*\*{lang_cfg['SOURCE_KEYWORD']}:\*\*([^\n\r]*)(?:\r?\n|$))?"
    lesson_pattern_str = (lesson_title_regex + time_detail_regex + assessment_detail_regex + source_detail_regex)
    try: lesson_pattern = re.compile(lesson_pattern_str, re.MULTILINE | re.IGNORECASE)
    except Exception as e:
        print(f"Error compiling lesson_pattern: {e}"); return "", detected_lang

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
            if proverka_str:
                proverka_formatted = proverka_str.replace(", ", " + ")
                module_lessons_text.append(f"- {lang_cfg['OUTPUT_ASSESSMENT']}: {proverka_formatted}")
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
    return {"type": "yes", "text": "100%"}

def parse_training_plan_from_string(original_content_str: str, main_table_title: str) -> Optional[TrainingPlanDetails]:
    # This function remains crucial for initially parsing AI responses.
    # It also serves as the reference for how the data is structured.
    transformed_content_str, detected_lang = transform_text_new_to_old(original_content_str)
    if not transformed_content_str or not transformed_content_str.strip():
        return TrainingPlanDetails(mainTitle=f"Content for {main_table_title} not parsable/empty", sections=[], detectedLanguage=detected_lang or 'ru')

    plan_data = {"mainTitle": main_table_title, "sections": [], "detectedLanguage": detected_lang}
    current_section_dict: Optional[Dict[str, Any]] = None
    current_lesson_dict: Optional[Dict[str, Any]] = None
    section_id_counter = 0
    total_hours_explicitly_set_for_section = False
    
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

    if not plan_data.get("mainTitle") and plan_data["sections"]:
        plan_data["mainTitle"] = plan_data["sections"][0].title.split('.')[0].strip()
    elif not plan_data.get("mainTitle"):
            plan_data["mainTitle"] = main_table_title

    try: return TrainingPlanDetails(**plan_data)
    except Exception as e:
        print(f"Error Pydantic TrainingPlanDetails: {e}. Data: {plan_data}"); traceback.print_exc()
        return TrainingPlanDetails(mainTitle=plan_data.get("mainTitle") or "Parse Error", sections=[], detectedLanguage=detected_lang)


# --- API Endpoints ---
@app.post("/api/custom/projects/add", response_model=ProjectDB, status_code=status.HTTP_201_CREATED)
async def add_project_to_custom_db(
    project_data: ProjectCreateRequest, 
    onyx_user_id: str = Depends(get_current_onyx_user_id), 
    pool: asyncpg.Pool = Depends(get_db_pool)
):
    db_microproduct_name_to_store = project_data.microProductName if project_data.microProductName and project_data.microProductName.strip() else project_data.microProductType
    
    parsed_content: Optional[TrainingPlanDetails] = parse_training_plan_from_string(
        project_data.aiResponse, project_data.projectName
    )
    
    content_to_store_for_db = None
    if parsed_content:
        try: # Pydantic v2
            content_to_store_for_db = parsed_content.model_dump(mode='json', exclude_none=True)
        except AttributeError: # Pydantic v1
             content_to_store_for_db = json.loads(parsed_content.json(exclude_none=True))


    insert_query = """
        INSERT INTO projects (
            onyx_user_id, project_name, product_type,
            microproduct_type, microproduct_name, microproduct_content, created_at
        ) VALUES ($1, $2, $3, $4, $5, $6, NOW())
        RETURNING id, onyx_user_id, project_name, product_type, microproduct_type, microproduct_name, microproduct_content, created_at;
    """
    try:
        async with pool.acquire() as conn:
            row = await conn.fetchrow(
                insert_query,
                onyx_user_id, project_data.projectName, project_data.product,
                project_data.microProductType, db_microproduct_name_to_store, 
                content_to_store_for_db # This should be a Python dict for asyncpg to handle JSONB
            )
        if not row: raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail="Failed to create project entry.")
        
        # Pydantic model will parse the 'microproduct_content' from dict to TrainingPlanDetails
        return ProjectDB(**dict(row)) 
    except Exception as e:
        print(f"Error inserting project: {e}"); traceback.print_exc()
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail=f"DB error on insert: {str(e)}")

# NEW Endpoint to get a single project's details for editing
@app.get("/api/custom/projects/{project_id}", response_model=ProjectDetailForEditResponse)
async def get_project_details_for_edit(
    project_id: int,
    onyx_user_id: str = Depends(get_current_onyx_user_id),
    pool: asyncpg.Pool = Depends(get_db_pool)
):
    query = """
        SELECT id, project_name, product_type, microproduct_type, microproduct_name, microproduct_content, created_at
        FROM projects
        WHERE id = $1 AND onyx_user_id = $2;
    """
    try:
        async with pool.acquire() as conn:
            row = await conn.fetchrow(query, project_id, onyx_user_id)
        
        if not row:
            raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Project not found.")
        
        row_dict = dict(row)
        # microproduct_content is already a dict/None from JSONB
        return ProjectDetailForEditResponse(
            id=row_dict["id"],
            projectName=row_dict["project_name"],
            product=row_dict.get("product_type"),
            microProductType=row_dict.get("microproduct_type"),
            microProductName=row_dict.get("microproduct_name"),
            microProductContent=row_dict.get("microproduct_content"), # Pydantic will validate this into TrainingPlanDetails
            createdAt=row_dict.get("created_at")
        )
    except HTTPException as e:
        raise e
    except Exception as e:
        print(f"Error fetching project {project_id} for edit: {e}")
        traceback.print_exc()
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail=f"DB error fetching project details: {str(e)}")

# NEW Endpoint to update a project
@app.put("/api/custom/projects/update/{project_id}", response_model=ProjectDB)
async def update_project_in_db(
    project_id: int,
    project_update_data: ProjectUpdateRequest, # This model now takes TrainingPlanDetails
    onyx_user_id: str = Depends(get_current_onyx_user_id),
    pool: asyncpg.Pool = Depends(get_db_pool)
):
    db_microproduct_name_to_store = project_update_data.microProductName
    if db_microproduct_name_to_store is None or not db_microproduct_name_to_store.strip():
        db_microproduct_name_to_store = project_update_data.microProductType

    content_to_store_for_db = None
    if project_update_data.microProductContent:
        try: # Pydantic v2
            content_to_store_for_db = project_update_data.microProductContent.model_dump(mode='json', exclude_none=True)
        except AttributeError: # Pydantic v1
            content_to_store_for_db = json.loads(project_update_data.microProductContent.json(exclude_none=True))

    update_query = """
        UPDATE projects
        SET project_name = $1,
            product_type = $2,
            microproduct_type = $3,
            microproduct_name = $4,
            microproduct_content = $5 
            /* created_at is not updated on edit */
        WHERE id = $6 AND onyx_user_id = $7
        RETURNING id, onyx_user_id, project_name, product_type, microproduct_type, microproduct_name, microproduct_content, created_at;
    """
    try:
        async with pool.acquire() as conn:
            row = await conn.fetchrow(
                update_query,
                project_update_data.projectName,
                project_update_data.product,
                project_update_data.microProductType,
                db_microproduct_name_to_store,
                content_to_store_for_db, # Store the JSON dict/object
                project_id,
                onyx_user_id
            )
        if not row:
            raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Project not found or update failed (user may not own project).")
        return ProjectDB(**dict(row)) # Pydantic will parse JSONB from DB to model
    except HTTPException as e:
        raise e
    except Exception as e:
        print(f"Error updating project {project_id}: {e}")
        traceback.print_exc()
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail=f"DB error on update: {str(e)}")


# ... (Existing /api/custom/projects endpoint - no changes needed here for now) ...
@app.get("/api/custom/projects", response_model=List[ProjectApiResponse])
async def get_user_projects_from_db_transformed(onyx_user_id: str = Depends(get_current_onyx_user_id), pool: asyncpg.Pool = Depends(get_db_pool)):
    # This endpoint does not return microProductContent details, so it's largely unaffected.
    select_query = "SELECT id, project_name, product_type, microproduct_type, microproduct_name, created_at FROM projects WHERE onyx_user_id = $1 ORDER BY created_at DESC;"
    try:
        async with pool.acquire() as conn: db_rows = await conn.fetch(select_query, onyx_user_id)
        transformed_projects: List[ProjectApiResponse] = []
        for r_dict_full in [dict(row) for row in db_rows]:
            project_db_id = r_dict_full.get('id')
            if project_db_id is None:
                print(f"WARNING: Project row encountered without an ID (user: {onyx_user_id}): {r_dict_full.get('project_name')}")
                continue 

            pn = r_dict_full.get('project_name', 'N/A')
            pt = r_dict_full.get('product_type', 'N/A')
            
            name_for_display = r_dict_full.get('microproduct_name') or r_dict_full.get('microproduct_type', 'Unnamed MicroProduct')
            type_for_slug_generation = r_dict_full.get('microproduct_type')
            if not type_for_slug_generation: type_for_slug_generation = "default-mptype-slug"

            ps = create_slug(pn)
            pts_slug = create_slug(pt)
            mpt_type_slug = create_slug(type_for_slug_generation)

            wlp = f"/projects/{ps}/{pts_slug}/{mpt_type_slug}"
            pdf_doc_identifier_slug = create_slug(f'{pn}_{pt}_{type_for_slug_generation}')
            pdflp = f"pdf/{pdf_doc_identifier_slug}"

            mpa = MicroProductApiResponse(
                name=name_for_display, 
                slug=mpt_type_slug,    
                webLinkPath=wlp,
                pdfLinkPath=pdflp,
                details=None # Details are not needed for the list view
            )
            pra = ProjectApiResponse(
                id=project_db_id, 
                projectName=pn, projectSlug=ps, 
                product=pt, productSlug=pts_slug, 
                microProduct=mpa
            )
            transformed_projects.append(pra)
        return transformed_projects
    except Exception as e:
        print(f"Error fetching projects: {e}"); traceback.print_exc()
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail=f"DB error while fetching projects: {str(e)}")


# ... (Existing /api/custom/microproducts/... endpoint - already updated in previous step to handle JSONB) ...
@app.get("/api/custom/microproducts/{project_slug}/{product_slug}/{micro_product_type_slug}",
         response_model=MicroProductApiResponse, responses={404: {"model": ErrorDetail}})
async def get_microproduct_detail_from_db(
    project_slug: str, product_slug: str, micro_product_type_slug: str, 
    onyx_user_id: str = Depends(get_current_onyx_user_id),
    pool: asyncpg.Pool = Depends(get_db_pool)
):
    try:
        async with pool.acquire() as connection:
            all_projects_raw = await connection.fetch(
                "SELECT id, project_name, product_type, microproduct_type, microproduct_name, microproduct_content, created_at " # Fetch content
                "FROM projects WHERE onyx_user_id = $1", onyx_user_id
            )
        
        found_project_row_dict = None
        for r_dict in [dict(r) for r in all_projects_raw]:
            db_project_slug = create_slug(r_dict.get('project_name'))
            db_product_type_slug = create_slug(r_dict.get('product_type'))
            db_microproduct_type_slug = create_slug(r_dict.get('microproduct_type')) 

            if (db_project_slug == project_slug and
                db_product_type_slug == product_slug and
                db_microproduct_type_slug == micro_product_type_slug):
                found_project_row_dict = r_dict
                break 
        
        if not found_project_row_dict: raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Micro-product not found.")

        project_name_from_db = found_project_row_dict['project_name']
        product_type_from_db = found_project_row_dict.get('product_type', 'N/A')
        microproduct_display_name = found_project_row_dict.get('microproduct_name') or found_project_row_dict.get('microproduct_type', 'N/A')
        microproduct_type_for_routing = found_project_row_dict.get('microproduct_type') or "default-type"
        
        microproduct_content_json = found_project_row_dict.get('microproduct_content')
        
        details_data: Optional[TrainingPlanDetails] = None
        if microproduct_content_json: # Should be a dict if from JSONB
            try:
                details_data = TrainingPlanDetails(**microproduct_content_json)
            except Exception as pydantic_e:
                print(f"Error validating TrainingPlanDetails from DB JSON for project {project_name_from_db} (detail view): {pydantic_e}")
                # Fallback if validation fails or if it's somehow still a string that's not JSON
                if isinstance(microproduct_content_json, str):
                     details_data = parse_training_plan_from_string(microproduct_content_json, project_name_from_db)
                else:     
                    details_data = TrainingPlanDetails(mainTitle=f"Content for {microproduct_display_name} (validation error)", sections=[], detectedLanguage='ru')

        else: # No content
            details_data = TrainingPlanDetails(mainTitle=f"No content for {microproduct_display_name}", sections=[], detectedLanguage='ru')


        web_link_path = f"/projects/{project_slug}/{product_slug}/{micro_product_type_slug}"
        pdf_doc_identifier_slug = create_slug(f"{project_name_from_db}_{product_type_from_db}_{microproduct_type_for_routing}")
        pdf_link_path = f"pdf/{pdf_doc_identifier_slug}"

        return MicroProductApiResponse(
            name=microproduct_display_name, 
            slug=micro_product_type_slug,       
            webLinkPath=web_link_path,
            pdfLinkPath=pdf_link_path,
            details=details_data 
        )
    except HTTPException as e: raise e
    except Exception as e:
        print(f"Error fetching microproduct detail: {e}"); traceback.print_exc()
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail=f"Server error: {str(e)}")

@app.get("/api/custom/pdf/{document_slug}", response_class=FileResponse,
         responses={404: {"model": ErrorDetail}, 500: {"model": ErrorDetail}})
async def download_micro_product_pdf_from_db(
    document_slug: str, 
    onyx_user_id: str = Depends(get_current_onyx_user_id), 
    pool: asyncpg.Pool = Depends(get_db_pool)
):
    print(f"PDF req for doc_slug: {document_slug}, user {onyx_user_id}")
    async with pool.acquire() as conn: 
        user_projects_raw = await conn.fetch(
            "SELECT id, project_name, product_type, microproduct_type, microproduct_name, microproduct_content, created_at "
            "FROM projects WHERE onyx_user_id = $1", 
            onyx_user_id
        )
    
    target_row_dict = None
    mp_name_for_pdf_context = "document"
    project_name_for_pdf_context = "Project"
    # Use a unique name for the generated PDF to avoid browser caching issues if filenames were reused
    # Or, more simply for now, ensure the generated PDF always has a distinct name for this request.
    # For true "no-caching" at the PDF generation step, we ensure it always regenerates.
    user_friendly_pdf_filename = f"{create_slug(document_slug)}_{uuid.uuid4().hex[:8]}.pdf"


    for r_dict in [dict(r) for r in user_projects_raw]:
        pn_db = r_dict['project_name']
        pt_db = r_dict.get('product_type','')
        mpt_type_for_slug = r_dict.get('microproduct_type', '') 
        current_pdf_slug = create_slug(f"{pn_db}_{pt_db}_{mpt_type_for_slug}")
        if current_pdf_slug == document_slug:
            target_row_dict = r_dict
            mp_name_for_pdf_context = r_dict.get('microproduct_name') or mpt_type_for_slug or pn_db
            project_name_for_pdf_context = pn_db
            # Update user_friendly_pdf_filename to be more specific if desired, but unique name helps avoid browser cache
            user_friendly_pdf_filename = f"{create_slug(mp_name_for_pdf_context)}_{uuid.uuid4().hex[:8]}.pdf"
            break
            
    if not target_row_dict: 
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail=f"PDF definition not found for slug: {document_slug}")

    content_json = target_row_dict.get('microproduct_content')
    details_pdf: Optional[TrainingPlanDetails] = None
    detected_lang_for_pdf = 'ru' # Default

    if content_json:
        try:
            details_pdf = TrainingPlanDetails(**content_json) # Assumes content_json is already a dict
            if details_pdf.detectedLanguage:
                 detected_lang_for_pdf = details_pdf.detectedLanguage
        except Exception as pydantic_e:
            print(f"Error validating TrainingPlanDetails from DB JSON for PDF ({document_slug}): {pydantic_e}")
            # Optionally, try to re-parse if it was a string for some reason (legacy data, etc.)
            if isinstance(content_json, str):
                try:
                    parsed_from_str = parse_training_plan_from_string(content_json, project_name_for_pdf_context)
                    if parsed_from_str:
                        details_pdf = parsed_from_str
                        if details_pdf.detectedLanguage:
                            detected_lang_for_pdf = details_pdf.detectedLanguage
                except Exception as parse_e:
                     print(f"Could not re-parse content string for PDF ({document_slug}): {parse_e}")
    
    if not details_pdf: 
        details_pdf = TrainingPlanDetails(
            mainTitle=f"Content for '{mp_name_for_pdf_context}' is unavailable or unparsable.", 
            sections=[],
            detectedLanguage=detected_lang_for_pdf
        )
    
    # Use a timestamp or UUID to ensure the generated PDF filename is unique for this request
    # This helps if generate_pdf_from_html_template itself might have some internal caching based on output_filename
    unique_output_filename = f"{document_slug}_{uuid.uuid4().hex[:12]}.pdf"
    
    try:
        if details_pdf is None: # Should be initialized by now
             details_pdf = TrainingPlanDetails(mainTitle="Error preparing PDF data", sections=[], detectedLanguage=detected_lang_for_pdf)

        context_data_for_pdf = {'details': details_pdf.model_dump(exclude_none=True)}
        
        current_lang_cfg = LANG_CONFIG.get(detected_lang_for_pdf, LANG_CONFIG['ru']) # Default to 'ru' if lang not found
        context_data_for_pdf['details']['detectedLanguage'] = detected_lang_for_pdf
        context_data_for_pdf['details']['time_unit_singular'] = current_lang_cfg['TIME_UNIT_SINGULAR']
        context_data_for_pdf['details']['time_unit_decimal_plural'] = current_lang_cfg['TIME_UNIT_DECIMAL_PLURAL']
        context_data_for_pdf['details']['time_unit_general_plural'] = current_lang_cfg['TIME_UNIT_GENERAL_PLURAL']
        
        # Always generate the PDF for each request
        pdf_path = await generate_pdf_from_html_template(
            "training_plan_pdf_template.html", 
            context_data_for_pdf, 
            unique_output_filename # Pass the unique filename to the generator
        )

        if not os.path.exists(pdf_path): 
            raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail="PDF file not found after generation.")
        
        # The FileResponse itself doesn't cache aggressively, but client/proxies might.
        # Forcing a unique user_friendly_pdf_filename for each download can also help.
        return FileResponse(
            path=pdf_path, 
            filename=user_friendly_pdf_filename, # This is the name the user sees
            media_type='application/pdf',
            # Add headers to suggest no caching by browsers/proxies
            headers={
                "Cache-Control": "no-cache, no-store, must-revalidate",
                "Pragma": "no-cache",
                "Expires": "0"
            }
        )
    except Exception as e:
        print(f"Error in PDF endpoint for {document_slug}: {e}"); traceback.print_exc()
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail=f"Error during PDF generation: {str(e)[:200]}")

# ... (Existing delete-multiple and health_check endpoints - keep as is) ...
@app.post("/api/custom/projects/delete-multiple", status_code=status.HTTP_200_OK)
async def delete_multiple_projects(
    delete_request: ProjectsDeleteRequest,
    onyx_user_id: str = Depends(get_current_onyx_user_id),
    pool: asyncpg.Pool = Depends(get_db_pool)
):
    if not delete_request.project_ids:
        return JSONResponse(status_code=status.HTTP_400_BAD_REQUEST, content={"detail": "No project IDs provided for deletion."})

    try:
        async with pool.acquire() as conn:
            async with conn.transaction():
                result_status = await conn.execute(
                    "DELETE FROM projects WHERE id = ANY($1::int[]) AND onyx_user_id = $2",
                    delete_request.project_ids,
                    onyx_user_id
                )
                deleted_count_match = re.search(r"DELETE\s+(\d+)", result_status)
                deleted_count = int(deleted_count_match.group(1)) if deleted_count_match else 0
                print(f"User {onyx_user_id} requested deletion for IDs: {delete_request.project_ids}. Successfully deleted: {deleted_count} project(s).")
                return {"detail": f"Successfully deleted {deleted_count} project(s)."}
    except Exception as e:
        print(f"Error deleting projects for user {onyx_user_id}, IDs {delete_request.project_ids}: {e}")
        traceback.print_exc()
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail=f"Database error during deletion: {str(e)}")

@app.get("/api/custom/health")
async def health_check():
    return {"status": "healthy"}
