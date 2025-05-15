# custom_extensions/backend/main.py
from fastapi import FastAPI, HTTPException, Depends, Request
from fastapi.middleware.cors import CORSMiddleware
from typing import List, Optional, Dict, Any
from pydantic import BaseModel, Field
import re
import os
import asyncpg
from datetime import datetime
from fastapi.responses import FileResponse
import httpx
import traceback

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
        dummy_path = os.path.join("/app/tmp_pdf", output_filename) 
        os.makedirs(os.path.dirname(dummy_path), exist_ok=True)
        with open(dummy_path, "w") as f: f.write(f"Dummy PDF for {output_filename} using context: {str(context_data)[:200]}")
        return dummy_path

# --- Constants & DB Setup ---
CUSTOM_PROJECTS_DATABASE_URL = os.getenv("CUSTOM_PROJECTS_DATABASE_URL")
ONYX_API_SERVER_URL = "http://api_server:8080" 
ONYX_SESSION_COOKIE_NAME = os.getenv("ONYX_SESSION_COOKIE_NAME", "fastapiusersauth") # VERIFY THIS

DB_POOL = None

async def get_db_pool():
    if DB_POOL is None: raise HTTPException(status_code=503, detail="Database service not available.")
    return DB_POOL

app = FastAPI(title="Custom Extension Backend")

@app.on_event("startup")
async def startup_event():
    print(f"Custom Backend starting...")
    global DB_POOL
    if not CUSTOM_PROJECTS_DATABASE_URL: print("CRITICAL: CUSTOM_PROJECTS_DATABASE_URL env var not set."); return
    try:
        DB_POOL = await asyncpg.create_pool(dsn=CUSTOM_PROJECTS_DATABASE_URL, min_size=1, max_size=10)
        async with DB_POOL.acquire() as connection:
            await connection.execute("""
                CREATE TABLE IF NOT EXISTS projects (
                    id SERIAL PRIMARY KEY, onyx_user_id TEXT NOT NULL, project_name TEXT NOT NULL,
                    product_type TEXT, microproduct_type TEXT, microproduct_content TEXT,
                    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP);
            """)
            await connection.execute("CREATE INDEX IF NOT EXISTS idx_projects_onyx_user_id ON projects(onyx_user_id);")
        print("Custom projects DB pool initialized & 'projects' table ensured.")
    except Exception as e: print(f"CRITICAL: Failed to init custom projects DB pool or table: {e}"); DB_POOL = None

@app.on_event("shutdown")
async def shutdown_event():
    if DB_POOL: await DB_POOL.close(); print("Custom projects DB pool closed.")

origins = [ 
    "http://localhost:3001", "http://143.198.59.56:3001", "http://143.198.59.56:8088", 
    os.environ.get("WEB_DOMAIN", "http://localhost:3000"), settings.CUSTOM_FRONTEND_URL
]
app.add_middleware(CORSMiddleware, allow_origins=list(set(origins)), allow_credentials=True, allow_methods=["*"], allow_headers=["*"])

# --- Pydantic Models ---
class StatusInfo(BaseModel): type: str = "unknown"; text: str = ""; model_config = {"from_attributes": True}
class LessonDetail(BaseModel): title: str; check: StatusInfo = Field(default_factory=StatusInfo); contentAvailable: StatusInfo = Field(default_factory=StatusInfo); source: str = ""; hours: float = 0.0; model_config = {"from_attributes": True}
class SectionDetail(BaseModel): id: str; title: str; totalHours: float = 0.0; lessons: List[LessonDetail] = Field(default_factory=list); model_config = {"from_attributes": True}
class TrainingPlanDetails(BaseModel): mainTitle: Optional[str] = None; sections: List[SectionDetail] = Field(default_factory=list); model_config = {"from_attributes": True}
class MicroProductApiResponse(BaseModel): name: str; slug: str; webLinkPath: Optional[str] = None; pdfLinkPath: Optional[str] = None; details: Optional[TrainingPlanDetails] = None; model_config = {"from_attributes": True}
class ProjectApiResponse(BaseModel): projectName: str; projectSlug: str; product: str; productSlug: str; microProduct: MicroProductApiResponse; model_config = {"from_attributes": True}
class ProjectCreateRequest(BaseModel): projectName: str; product: str; microProduct: str; aiResponse: str
class ProjectDB(BaseModel): id: int; onyx_user_id: str; project_name: str; product_type: Optional[str] = None; microproduct_type: Optional[str] = None; microproduct_content: Optional[str] = None; created_at: datetime; model_config = {"from_attributes": True}
class ErrorDetail(BaseModel): detail: str

# --- Onyx User ID Function ---
async def get_current_onyx_user_id(request: Request) -> str:
    session_cookie_value = request.cookies.get(ONYX_SESSION_COOKIE_NAME)
    if not session_cookie_value:
        print(f"Onyx session cookie '{ONYX_SESSION_COOKIE_NAME}' not found.")
        dev_user_id = request.headers.get("X-Dev-Onyx-User-ID")
        if dev_user_id: print(f"DEV MODE: Using Onyx User ID from X-Dev-Onyx-User-ID header: {dev_user_id}"); return dev_user_id
        raise HTTPException(status_code=401, detail=f"Onyx session cookie '{ONYX_SESSION_COOKIE_NAME}' missing.")
    onyx_user_info_url = f"{ONYX_API_SERVER_URL}/me" 
    cookies_to_forward = {ONYX_SESSION_COOKIE_NAME: session_cookie_value}
    try:
        async with httpx.AsyncClient() as client:
            print(f"Custom_backend: Calling Onyx API '{onyx_user_info_url}' with cookie '{ONYX_SESSION_COOKIE_NAME}'")
            response = await client.get(onyx_user_info_url, cookies=cookies_to_forward)
            if response.status_code == 200:
                user_data = response.json()
                onyx_user_id = user_data.get("userId") or user_data.get("id")
                if not onyx_user_id: print(f"Onyx '{onyx_user_info_url}' no 'userId' or 'id'. Data: {user_data}"); raise HTTPException(status_code=500, detail="Could not extract user ID from Onyx.")
                print(f"Onyx User ID: {onyx_user_id}"); return str(onyx_user_id)
            else: print(f"Onyx '{onyx_user_info_url}' failed. Status: {response.status_code}, Resp: {response.text[:500]}"); raise HTTPException(status_code=response.status_code, detail=f"Onyx user validation failed ({response.status_code}).")
    except httpx.RequestError as e: print(f"Err request to Onyx '{onyx_user_info_url}': {e}"); raise HTTPException(status_code=503, detail=f"Could not connect to Onyx auth: {str(e)[:100]}")
    except Exception as e: print(f"Unexpected err in get_current_onyx_user_id: {e}"); traceback.print_exc(); raise HTTPException(status_code=500, detail=f"Internal user validation err: {str(e)[:100]}")

# --- Slug Creation Function ---
def create_slug(text: Optional[str]) -> str:
    if not text: return "default-slug"
    text_processed = str(text).lower(); text_processed = re.sub(r'\s+', '-', text_processed)
    text_processed = re.sub(r'[^\wа-яёa-z0-9\-]+', '', text_processed, flags=re.UNICODE | re.IGNORECASE)
    return text_processed or "generated-slug"

# --- MULTI-LANGUAGE PARSER SECTION (REFINED Module ID) ---
CANONICAL_ATTRIBUTE_FIELDS = {
    "check": ["knowledge check", "проверка знаний", "перевірка знань", "verificación de conocimientos", "control de conocimientos"],
    "contentAvailable": ["content available", "наличие контента", "наявність контенту", "contenido disponible"],
    "source": ["information source", "источник информации", "джерело інформації", "fuente de información"],
    "hours": ["duration", "время", "тривалість", "час", "duración", "tiempo"],
}

def get_canonical_field(raw_key: str) -> Optional[str]:
    raw_key_lower = raw_key.lower().strip()
    for canonical_name, variations in CANONICAL_ATTRIBUTE_FIELDS.items():
        for variation in variations: # Try exact match first
            if variation.lower() == raw_key_lower: return canonical_name
    for canonical_name, variations in CANONICAL_ATTRIBUTE_FIELDS.items(): # Fallback to partial match
        for variation in variations:
            if variation.lower() in raw_key_lower: return canonical_name
    return None

def parse_check_type_versatile(text_val: str) -> dict:
    text_lower = text_val.strip().lower()
    if "практика с куратором" in text_lower or "practice with a supervisor" in text_lower or "практика з куратором" in text_lower or "práctica con supervisor" in text_lower: return {"type": "practice_supervisor", "text": text_val.strip()}
    if "ролевая игра" in text_lower or "role play" in text_lower or "рольова гра" in text_lower or "juego de roles" in text_lower : return {"type": "role_play", "text": text_val.strip()}
    if "демонстрация с куратором" in text_lower or "demonstration with a supervisor" in text_lower : return {"type": "demo_supervisor", "text": text_val.strip()}
    if "разбор ошибок с куратором" in text_lower or "error analysis with a supervisor" in text_lower: return {"type": "error_analysis_supervisor", "text": text_val.strip()}
    if "демонстрация с практикой" in text_lower or "demonstration with practice" in text_lower: return {"type": "demo_practice", "text": text_val.strip()}
    if "практика + кейс" in text_lower or "practice + case study" in text_lower: return {"type": "practice_case", "text": text_val.strip()}
    if "практика + обсуждение" in text_lower or "practice + discussion" in text_lower: return {"type": "practice_discussion", "text": text_val.strip()}
    if "видео + тест" in text_lower or "video + test" in text_lower: return {"type": "video_test", "text": text_val.strip()}
    if "фоторазбор" in text_lower or "photo analysis" in text_lower: return {"type": "photo_analysis", "text": text_val.strip()}
    if "устный опрос" in text_lower or "oral quiz" in text_lower: return {"type": "oral_quiz", "text": text_val.strip()}
    if "тест" in text_lower or "test" in text_lower or "prueba" in text_lower or "examen" in text_lower: return {"type": "test", "text": text_val.strip()}
    if "практика" in text_lower or "practice" in text_lower or "práctica" in text_lower: return {"type": "practice", "text": text_val.strip()}
    return {"type": "other_check", "text": text_val.strip()}

def parse_content_available_versatile(text_val: str) -> dict:
    text_lower = text_val.strip().lower()
    if text_lower in ["да", "yes", "так", "sí"]: return {"type": "yes", "text": "100%"}
    if text_lower in ["нет", "no", "ні"]: return {"type": "no", "text": text_val.strip()}
    if "%" in text_val: return {"type": "percentage", "text": text_val.strip()}
    return {"type": "unknown_availability", "text": text_val.strip()}

def parse_training_plan_from_string(content_str: str) -> Optional[TrainingPlanDetails]:
    if not content_str or not content_str.strip(): return None

    plan_data = {"mainTitle": None, "sections": []}
    current_section_dict: Optional[Dict[str, Any]] = None
    current_lesson_dict: Optional[Dict[str, Any]] = None
    section_id_counter = 0 # This will be used for "№" + counter
    total_hours_explicitly_set_for_section = False
    
    lines = content_str.splitlines()
    program_summary_keywords = ["итог по всей программе", "program summary:", "підсумок програми", "resumen del programa"]

    # Regex to capture the explicit module number (like №1, 1, 2.1) if present, then the title
    # It looks for "Module/Модуль/Módulo", then optional "№" or "#", then captures digits/dots (ID), then ":" or "-", then title.
    module_line_regex = r"^\s*(?:###\s*\*\*)?(?:Модуль|Module|Módulo)\s*(?:№|#)?\s*([\w\d.]+)\s*[:\-]\s*(.+)$"
    # Fallback if no explicit number after "Module" but still a title (e.g. "### **Module: Title**")
    module_line_no_id_regex = r"^\s*(?:###\s*\*\*)?(?:Модуль|Module|Módulo)\s*[:\-]*\s*([^#*(].*?)(?:\s*\*\*)?$"


    for line_num, line_raw in enumerate(lines, 1):
        line = line_raw.strip()
        if not line or line.startswith("---") or any(line.lower().startswith(sk) for sk in program_summary_keywords):
            continue

        module_match = re.match(module_line_regex, line, re.IGNORECASE | re.UNICODE)
        module_title_candidate = None
        parsed_section_id_text = None

        if module_match:
            parsed_section_id_text = module_match.group(1).strip() # Captured ID like "1", "2", "1.1"
            module_title_candidate = module_match.group(2).strip()
        else: # Try fallback if no explicit ID was found but it's a module line
            module_fallback_match = re.match(module_line_no_id_regex, line, re.IGNORECASE | re.UNICODE)
            if module_fallback_match:
                module_title_candidate = module_fallback_match.group(1).strip()
                # If no ID parsed, we use the counter
                # section_id_counter will be incremented below if this path is taken

        if module_title_candidate: # If it's a module line (either with parsed ID or just title)
            if current_section_dict: plan_data["sections"].append(current_section_dict)
            
            section_id_counter += 1 # Always increment counter for internal use or fallback
            
            # Use parsed ID if available, otherwise use the counter with "№"
            display_section_id = parsed_section_id_text if parsed_section_id_text else f"№{section_id_counter}"
            
            # Clean title parts
            title_parts = re.match(r"([^.]*?)(?:\.\s+(.+))?$", module_title_candidate)
            title_part1 = module_title_candidate
            title_part2 = None
            if title_parts:
                title_part1 = title_parts.group(1).strip().strip('.:-* ').strip()
                if title_parts.group(2):
                    title_part2 = title_parts.group(2).strip().strip('.:-* ').strip()

            full_section_title = title_part1
            if title_part2 and title_part1 and title_part2.lower() != title_part1.lower(): # Avoid appending if context is already in title_part1
                full_section_title = f"{title_part1}{'. ' if not title_part1.endswith('.') else ' '}{title_part2}"
            
            if not plan_data["mainTitle"]:
                plan_data["mainTitle"] = title_part2 if title_part2 else title_part1
            
            current_section_dict = {
                "id": display_section_id, # Use parsed or formatted counter ID
                "title": full_section_title,
                "totalHours": 0.0, "lessons": []
            }
            current_lesson_dict = None
            total_hours_explicitly_set_for_section = False
            
            combined_line_for_hours = line_raw
            if line_num < len(lines) and not re.search(r"(?:Общее время на модуль|Total Module Duration|Загальна тривалість модуля|Duración total del módulo)", line_raw, re.IGNORECASE | re.UNICODE):
                combined_line_for_hours += " " + lines[line_num].strip() 
            
            total_hours_regex = r"(?:Общее время на модуль|Total Module Duration|Загальна тривалість модуля|Duración total del módulo)\s*[:\-]*\s*([\d.,]+)\s*(?:час|год|годин|hours?|hora|horas)"
            total_hours_match = re.search(total_hours_regex, combined_line_for_hours, re.IGNORECASE | re.UNICODE)
            if total_hours_match:
                try: 
                    current_section_dict["totalHours"] = float(total_hours_match.group(1).replace(',', '.'))
                    total_hours_explicitly_set_for_section = True
                except ValueError: print(f"Warn: Could not parse total module hours from '{total_hours_match.group(1)}' in line: {combined_line_for_hours}")
            continue

        lesson_regex = r"^\s*(?:\*\*)?(?:Урок|Lesson|Lección)\s*[\d.]+\s*[:\-]*\s*(?:[\"\'«“„”]?)(.+?)(?:[\"\'«“„”]?)(?:\*\*)?$"
        lesson_match = re.match(lesson_regex, line, re.IGNORECASE | re.UNICODE)
        
        if lesson_match and current_section_dict is not None:
            lesson_title_raw = lesson_match.group(1).strip()
            lesson_title = re.sub(r'^[\s.:\-*"«“„”\'\[\(]+|[\s.:\-*"«“„”\'\]\)]+$', '', lesson_title_raw).strip()
            current_lesson_dict = {"title": lesson_title, "check": StatusInfo(), "contentAvailable": StatusInfo(), "source": "", "hours": 0.0}
            current_section_dict["lessons"].append(current_lesson_dict)
            continue

        attr_match = re.match(r"^\s*[•*-]\s*([^:]+):\s*(.*)", line)
        if attr_match and current_lesson_dict is not None:
            key_raw, value_raw = attr_match.group(1).strip(), attr_match.group(2).strip()
            canonical_field = get_canonical_field(key_raw)
            
            if canonical_field == "check": current_lesson_dict["check"] = StatusInfo(**parse_check_type_versatile(value_raw))
            elif canonical_field == "contentAvailable": current_lesson_dict["contentAvailable"] = StatusInfo(**parse_content_available_versatile(value_raw))
            elif canonical_field == "source": current_lesson_dict["source"] = value_raw
            elif canonical_field == "hours":
                try:
                    hours_val_match = re.search(r"([\d.,]+)", value_raw)
                    if hours_val_match:
                        lesson_hours = float(hours_val_match.group(1).replace(',', '.'))
                        current_lesson_dict["hours"] = lesson_hours
                        if current_section_dict and not total_hours_explicitly_set_for_section:
                             current_section_dict["totalHours"] += lesson_hours
                except ValueError: print(f"Warn: Could not parse lesson hours: {value_raw}")
            continue
            
    if current_section_dict: plan_data["sections"].append(current_section_dict)
    if not plan_data.get("mainTitle") and plan_data["sections"]: 
        plan_data["mainTitle"] = plan_data["sections"][0]["title"].split('.')[0].strip()

    try: return TrainingPlanDetails(**plan_data)
    except Exception as e: print(f"Error Pydantic TrainingPlanDetails: {e}. Data: {plan_data}"); traceback.print_exc(); return TrainingPlanDetails(mainTitle=plan_data.get("mainTitle") or "Parse Error", sections=[])

# --- API Endpoints (Unchanged from previous response) ---
@app.post("/api/custom/projects/add", response_model=ProjectDB, status_code=201)
async def add_project_to_custom_db(project_data: ProjectCreateRequest, onyx_user_id: str = Depends(get_current_onyx_user_id), pool: asyncpg.Pool = Depends(get_db_pool)):
    insert_query = """INSERT INTO projects (onyx_user_id, project_name, product_type, microproduct_type, microproduct_content, created_at) VALUES ($1, $2, $3, $4, $5, NOW()) RETURNING id, onyx_user_id, project_name, product_type, microproduct_type, microproduct_content, created_at;"""
    try:
        async with pool.acquire() as conn: row = await conn.fetchrow(insert_query, onyx_user_id, project_data.projectName, project_data.product, project_data.microProduct, project_data.aiResponse)
        if not row: raise HTTPException(status_code=500, detail="Failed to create project entry.")
        return ProjectDB(**dict(row))
    except Exception as e: print(f"Error inserting project: {e}"); raise HTTPException(status_code=500, detail=f"DB error: {str(e)}")

@app.get("/api/custom/projects", response_model=List[ProjectApiResponse])
async def get_user_projects_from_db_transformed(onyx_user_id: str = Depends(get_current_onyx_user_id), pool: asyncpg.Pool = Depends(get_db_pool)):
    select_query = "SELECT * FROM projects WHERE onyx_user_id = $1 ORDER BY created_at DESC;"
    try:
        async with pool.acquire() as conn: db_rows = await conn.fetch(select_query, onyx_user_id)
        transformed_projects: List[ProjectApiResponse] = []
        for r_dict in [dict(row) for row in db_rows]:
            pn, pt, mpt = r_dict.get('project_name','N/A'), r_dict.get('product_type','N/A'), r_dict.get('microproduct_type','N/A')
            ps, pts_slug, mpts_slug = create_slug(pn), create_slug(pt), create_slug(mpt)
            wlp, pdflp = f"/projects/{ps}/{pts_slug}/{mpts_slug}", f"pdf/{create_slug(f'{pn}_{pt}_{mpt}')}"
            mpa = MicroProductApiResponse(name=mpt, slug=mpts_slug, webLinkPath=wlp, pdfLinkPath=pdflp, details=None)
            pra = ProjectApiResponse(projectName=pn, projectSlug=ps, product=pt, productSlug=pts_slug, microProduct=mpa)
            transformed_projects.append(pra)
        return transformed_projects
    except Exception as e: print(f"Error fetching projects: {e}"); raise HTTPException(status_code=500, detail=f"DB error: {str(e)}")

@app.get("/api/custom/microproducts/{project_slug}/{product_slug}/{micro_product_slug}",
         response_model=MicroProductApiResponse, responses={404: {"model": ErrorDetail}})
async def get_microproduct_detail_from_db(
    project_slug: str, product_slug: str, micro_product_slug: str,
    onyx_user_id: str = Depends(get_current_onyx_user_id),
    pool: asyncpg.Pool = Depends(get_db_pool)
):
    try:
        async with pool.acquire() as connection:
            all_projects_raw = await connection.fetch("SELECT * FROM projects WHERE onyx_user_id = $1", onyx_user_id)
        found_project_row = None
        for r_dict in [dict(r) for r in all_projects_raw]:
            if (create_slug(r_dict.get('project_name')) == project_slug and
                create_slug(r_dict.get('product_type')) == product_slug and
                create_slug(r_dict.get('microproduct_type')) == micro_product_slug):
                found_project_row = r_dict; break
        if not found_project_row: raise HTTPException(status_code=404, detail="Micro-product not found for slugs/user.")
        
        project_name_from_db = found_project_row['project_name']
        product_type_from_db = found_project_row.get('product_type', 'N/A')
        microproduct_name_from_db = found_project_row.get('microproduct_type', 'N/A')
        microproduct_content_str = found_project_row.get('microproduct_content')

        details_data: Optional[TrainingPlanDetails] = None
        if microproduct_content_str:
            parsed_details_obj = parse_training_plan_from_string(microproduct_content_str)
            if parsed_details_obj: details_data = parsed_details_obj
            else: details_data = TrainingPlanDetails(mainTitle=f"Content for {microproduct_name_from_db} not parsable/empty", sections=[])
        else: details_data = TrainingPlanDetails(mainTitle=f"No content for {microproduct_name_from_db}", sections=[])
        
        web_link_path = f"/projects/{project_slug}/{product_slug}/{micro_product_slug}"
        pdf_doc_identifier_slug = create_slug(f"{project_name_from_db}_{product_type_from_db}_{microproduct_name_from_db}")
        pdf_link_path = f"pdf/{pdf_doc_identifier_slug}"

        return MicroProductApiResponse(
            name=microproduct_name_from_db, slug=micro_product_slug,
            webLinkPath=web_link_path, pdfLinkPath=pdf_link_path, details=details_data
        )
    except HTTPException as e: raise e
    except Exception as e: print(f"Error detail from DB: {e}"); traceback.print_exc(); raise HTTPException(status_code=500, detail=f"Server error: {str(e)}")

@app.get("/api/custom/pdf/{document_slug}", response_class=FileResponse,
         responses={404: {"model": ErrorDetail}, 500: {"model": ErrorDetail}})
async def download_micro_product_pdf_from_db( document_slug: str, onyx_user_id: str = Depends(get_current_onyx_user_id), pool: asyncpg.Pool = Depends(get_db_pool)):
    print(f"PDF req for slug: {document_slug}, user {onyx_user_id}")
    async with pool.acquire() as conn: user_projects_raw = await conn.fetch("SELECT * FROM projects WHERE onyx_user_id = $1", onyx_user_id)
    target_row = None; mp_name_for_pdf = "document"
    for r_dict in [dict(r) for r in user_projects_raw]:
        pn, pt, mpt = r_dict['project_name'], r_dict.get('product_type',''), r_dict.get('microproduct_type','')
        current_pdf_slug = create_slug(f"{pn}_{pt}_{mpt}")
        if current_pdf_slug == document_slug: target_row = r_dict; mp_name_for_pdf = mpt or pn; break
    if not target_row: raise HTTPException(status_code=404, detail=f"PDF def not found: {document_slug}")

    content_str = target_row.get('microproduct_content')
    details_pdf: Optional[TrainingPlanDetails] = parse_training_plan_from_string(content_str) if content_str else None
    if not details_pdf: details_pdf = TrainingPlanDetails(mainTitle=f"No/unparsable content for PDF of '{mp_name_for_pdf}'", sections=[])
    
    pdf_cache_fn, user_friendly_fn = f"{document_slug}.pdf", f"{create_slug(mp_name_for_pdf)}.pdf"
    try:
        context_data_for_pdf = details_pdf.model_dump(exclude_none=True) if details_pdf else {}
        pdf_path = await generate_pdf_from_html_template("training_plan_pdf_template.html", context_data_for_pdf, pdf_cache_fn)
        if not os.path.exists(pdf_path): raise HTTPException(status_code=500, detail="PDF file not found post-gen.")
        return FileResponse(path=pdf_path, filename=user_friendly_fn, media_type='application/pdf')
    except Exception as e: print(f"Err PDF endpoint {document_slug}: {e}"); traceback.print_exc(); raise HTTPException(status_code=500, detail=f"Err PDF gen: {str(e)[:200]}")

@app.get("/api/custom/health")
async def health_check(): return {"status": "healthy"}

# if __name__ == "__main__":
#     uvicorn.run("main:app", host="0.0.0.0", port=8001, reload=True)
