# custom_extensions/backend/main.py
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from typing import List, Optional, Dict, Any
from pydantic import BaseModel
import re
import os
import copy
from fastapi.responses import FileResponse

# Assuming app.services.pdf_generator and app.core.config are structured correctly
try:
    from app.services.pdf_generator import generate_pdf_from_html_template
    from app.core.config import settings # settings.CUSTOM_FRONTEND_URL is crucial
except ImportError:
    print("CRITICAL: Could not import pdf_generator or settings. Using dummy implementations.")
    class DummySettings:
        CUSTOM_FRONTEND_URL = os.environ.get("CUSTOM_FRONTEND_URL", "http://custom_frontend:3001")
    settings = DummySettings()
    async def generate_pdf_from_frontend_url(page_url: str, output_filename: str) -> str:
        print(f"PDF Generation Skipped (Dummy Service): Would generate for {page_url} to {output_filename}")
        dummy_path = os.path.join("/tmp", output_filename)
        os.makedirs("/tmp", exist_ok=True)
        with open(dummy_path, "w") as f: f.write(f"Dummy PDF for {page_url}")
        return dummy_path

import uvicorn

# --- Constants ---
DATA_DIR = os.path.join(os.path.dirname(__file__), "data")

def create_slug(text: str) -> str:
    text = text.lower()
    text = re.sub(r'\s+', '-', text)
    text = re.sub(r'[^\wа-яёa-z0-9\-]+', '', text, flags=re.UNICODE | re.IGNORECASE)
    return text or "default-slug"

# This mapping uses the MICROPRODUCT's own slug as the key
MICROPRODUCT_DATA_FILES = {
    create_slug("План обучения для мастеров маникюра"): os.path.join(DATA_DIR, "vogue_lash_spa_training_plan.txt"),
    # e.g., create_slug("Цели клиента"): os.path.join(DATA_DIR, "vogue_lash_spa_audit_celi_klienta.txt"),
}

app = FastAPI(title="Custom Extension Backend")

# --- CORS Middleware ---
origins = [
    "http://localhost:3000", "http://143.198.59.56:3000", # Onyx frontend
    "http://localhost:3001", "http://143.198.59.56:3001", # Custom frontend
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# --- Pydantic Models (matching your frontend's reverted types) ---
class StatusInfo(BaseModel):
    type: str = "unknown"; text: str = ""
class LessonDetail(BaseModel):
    title: str; check: StatusInfo = StatusInfo(); contentAvailable: StatusInfo = StatusInfo(); source: str = ""; hours: float = 0
class SectionDetail(BaseModel):
    id: str; title: str; totalHours: float = 0; lessons: List[LessonDetail] = []
class TrainingPlanDetails(BaseModel): # This is what the parser should produce for 'details'
     mainTitle: Optional[str] = None; sections: List[SectionDetail] = []

class MicroProduct(BaseModel):
    name: str; slug: str # slug of the micro-product itself
    webLinkPath: Optional[str] = None # e.g., /projects/{projectSlug}/{productSlug}/{microProductSlug}
    pdfLinkPath: Optional[str] = None # This will be the unique {document_slug} for the PDF API
    details: Optional[TrainingPlanDetails] = None # Parsed data goes here

class ProjectEntry(BaseModel):
    projectName: str; projectSlug: str; product: str; productSlug: str; microProduct: MicroProduct

class ErrorDetail(BaseModel): detail: str

# --- TXT Parsing Logic (Reverted structure + keyword mapping) ---
def parse_check_type(text: str) -> dict:
    text_lower = text.strip().lower()
    if "практика с куратором" in text_lower: return {"type": "practice", "text": text.strip()}
    if "тест" in text_lower: return {"type": "test", "text": text.strip()}
    if "практика" in text_lower: return {"type": "practice", "text": text.strip()}
    if "ролевая игра" in text_lower: return {"type": "practice", "text": text.strip()}
    return {"type": "other", "text": text.strip()}

def parse_content_available(text: str) -> dict:
    text_lower = text.strip().lower()
    if text_lower == "да": return {"type": "percent", "text": "100%"}
    if text_lower == "нет": return {"type": "none", "text": "Нет"} # For frontend to use PieChart
    if "%" in text: return {"type": "percent", "text": text.strip()}
    return {"type": "unknown", "text": text.strip()}

def parse_training_plan_with_mapping(file_path: str) -> Optional[Dict[str, Any]]:
    # ... (Parser function from Response #21, ensuring it returns a dict that matches TrainingPlanDetails) ...
    # (Make sure the output structure of this parser strictly matches TrainingPlanDetails for Pydantic validation)
    if not os.path.exists(file_path): print(f"Warning: File not found {file_path}"); return None
    plan_raw = {"mainTitle": None, "sections": []}; current_section_raw = None; current_lesson_raw_attrs = None; section_id_counter = 1; total_hours_parsed_from_module_line = False; line_num = 0
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            current_section_lessons_list_raw = []
            for line_num_iter, line in enumerate(f, 1):
                line_num = line_num_iter; line = line.strip()
                if not line or line.startswith("Итог по всей программе"): continue
                module_match = re.match(r"Модуль\s*[\d:]+(.*)", line, re.IGNORECASE | re.UNICODE)
                if module_match: # Simplified for brevity, full logic in prior response
                    if current_section_raw: plan_raw["sections"].append(current_section_raw)
                    section_title = module_match.group(1).strip().rstrip('.').strip(); current_section_lessons_list_raw = []
                    current_section_raw = {"id": f"№{section_id_counter}", "title": section_title, "totalHours": 0.0, "lessons": current_section_lessons_list_raw}
                    section_id_counter += 1; current_lesson_raw_attrs = None; total_hours_parsed_from_module_line = False
                    total_time_match = re.search(r"Общее время на модуль:\s*([\d\.]+)\s*час", line, re.IGNORECASE | re.UNICODE)
                    if total_time_match:
                        try: current_section_raw["totalHours"] = float(total_time_match.group(1)); total_hours_parsed_from_module_line = True
                        except ValueError: pass
                    continue
                lesson_match = re.match(r"Урок\s*[\d\.]+:\s*(.*)", line, re.IGNORECASE | re.UNICODE)
                if lesson_match and current_section_raw:
                    lesson_title = lesson_match.group(1).strip().strip('“').strip('”'); current_lesson_raw_attrs = {"title": lesson_title}
                    current_section_lessons_list_raw.append(current_lesson_raw_attrs); continue
                attribute_match = re.match(r"\s*•\s*([^:]+):\s*(.*)", line)
                if attribute_match and current_lesson_raw_attrs:
                    key, value = attribute_match.group(1).strip(), attribute_match.group(2).strip(); current_lesson_raw_attrs[key] = value
                    if key == "Время" and current_section_raw and not total_hours_parsed_from_module_line:
                        try:
                            hours_match = re.search(r'([\d\.]+)', value)
                            if hours_match: current_section_raw["totalHours"] += float(hours_match.group(1))
                        except ValueError: pass
                    continue
                if current_section_raw and not current_section_raw["totalHours"] and not total_hours_parsed_from_module_line:
                     total_time_match_sep = re.search(r"Общее время на модуль:\s*([\d\.]+)\s*час", line, re.IGNORECASE | re.UNICODE)
                     if total_time_match_sep:
                          try: current_section_raw["totalHours"] = float(total_time_match_sep.group(1)); total_hours_parsed_from_module_line = True
                          except ValueError: pass
            if current_section_raw: plan_raw["sections"].append(current_section_raw)
            if plan_raw["sections"] and not plan_raw["mainTitle"]:
                 first_title = plan_raw["sections"][0].get("title", "Training Plan"); parts = first_title.split('.')
                 plan_raw["mainTitle"] = parts[-1].strip() if len(parts) > 1 else first_title
            final_sections_data = []
            for sec_data in plan_raw.get("sections", []):
                final_lessons_data = []
                for raw_attrs in sec_data.get("lessons", []):
                    lesson_dict = {"title": raw_attrs.get("title", "N/A"), "check": {"type": "unknown", "text": ""}, "contentAvailable": {"type": "unknown", "text": ""}, "source": "", "hours": 0.0}
                    hours = 0.0
                    for k, v_attr in raw_attrs.items(): # Renamed value to v_attr to avoid conflict
                        if k == "title": continue
                        if "Проверка знаний" in k: lesson_dict["check"] = parse_check_type(v_attr)
                        elif "Наличие контента" in k: lesson_dict["contentAvailable"] = parse_content_available(v_attr)
                        elif "Источник информации" in k: lesson_dict["source"] = v_attr
                        elif k == "Время":
                            try: hm = re.search(r'([\d\.]+)', v_attr); hours = float(hm.group(1)) if hm else 0.0
                            except ValueError: hours = 0.0
                    lesson_dict["hours"] = hours
                    final_lessons_data.append(lesson_dict)
                final_sections_data.append({"id": sec_data.get("id",""), "title": sec_data.get("title",""), "totalHours": sec_data.get("totalHours",0.0), "lessons": final_lessons_data})
            return {"mainTitle": plan_raw.get("mainTitle"), "sections": final_sections_data}
    except Exception as e: print(f"Error parsing file {file_path} near line {line_num}: {e}"); return None


# --- Mock Project Structure ---
# pdfLinkPath here is the UNIQUE SLUG for the PDF document itself
DOC_SLUG_VOGUE_STRATEGIA_PLAN = f'pdf/{create_slug("Vogue Lash Spa_Стратегия_План обучения для мастеров маникюра")}'
DOC_SLUG_VOGUE_AUDIT_CELI = create_slug("Vogue Lash Spa_Аудит_Цели клиента")
DOC_SLUG_WEFIX_KOMMERCH_ROI = create_slug("We Fix Appliance_Коммерческое_ROI от внедрения LMS")

mock_projects_base_data: List[ProjectEntry] = [
    ProjectEntry(
        projectName='Vogue Lash Spa', projectSlug=create_slug('Vogue Lash Spa'),
        product='Стратегия', productSlug=create_slug('Стратегия'),
        microProduct=MicroProduct(
            name='План обучения для мастеров маникюра',
            slug=create_slug('План обучения для мастеров маникюра'), # Slug for the micro-product page
            webLinkPath=f"/projects/{create_slug('Vogue Lash Spa')}/{create_slug('Стратегия')}/{create_slug('План обучения для мастеров маникюра')}",
            pdfLinkPath=DOC_SLUG_VOGUE_STRATEGIA_PLAN # This is used by frontend to construct the /api/custom/pdf/{this_slug}
        )
    ),
    ProjectEntry(
        projectName='Vogue Lash Spa', projectSlug=create_slug('Vogue Lash Spa'),
        product='Аудит', productSlug=create_slug('Аудит'),
        microProduct=MicroProduct(name='Цели клиента', slug=create_slug('Цели клиента'),
            webLinkPath=f"/projects/{create_slug('Vogue Lash Spa')}/{create_slug('Аудит')}/{create_slug('Цели клиента')}",
            pdfLinkPath=DOC_SLUG_VOGUE_AUDIT_CELI)
    ),
    ProjectEntry(
        projectName='We Fix Appliance', projectSlug=create_slug('We Fix Appliance'),
        product='Коммерческое', productSlug=create_slug('Коммерческое'),
        microProduct=MicroProduct(name='ROI от внедрения LMS', slug=create_slug('ROI от внедрения LMS'),
            webLinkPath=f"/projects/{create_slug('We Fix Appliance')}/{create_slug('Коммерческое')}/{create_slug('ROI от внедрения LMS')}",
            pdfLinkPath=DOC_SLUG_WEFIX_KOMMERCH_ROI)
    )
]

# --- API Endpoints ---
@app.get("/api/custom/projects", response_model=List[ProjectEntry])
async def get_projects():
    return copy.deepcopy(mock_projects_base_data)

@app.get("/api/custom/microproducts/{project_slug}/{product_slug}/{micro_product_slug}",
         response_model=MicroProduct, responses={404: {"model": ErrorDetail}})
async def get_microproduct_detail_by_slug(project_slug: str, product_slug: str, micro_product_slug: str):
    # (Logic from Response #21 to find project and parse details on demand)
    found_project_base: Optional[ProjectEntry] = None
    for p in mock_projects_base_data:
        if p.projectSlug == project_slug and p.productSlug == product_slug and p.microProduct.slug == micro_product_slug:
            found_project_base = copy.deepcopy(p); break
    if not found_project_base: raise HTTPException(status_code=404, detail="Micro-product not found")
    
    file_to_parse = MICROPRODUCT_DATA_FILES.get(micro_product_slug) # Lookup by micro-product's own slug
    if file_to_parse:
        print(f"Attempting to parse details for '{micro_product_slug}' from: {file_to_parse}")
        parsed_details_dict = parse_training_plan_with_mapping(file_to_parse)
        if parsed_details_dict:
            print("Successfully parsed details.")
            try: found_project_base.microProduct.details = TrainingPlanDetails(**parsed_details_dict)
            except Exception as val_err: print(f"Pydantic validation error for details: {val_err}"); found_project_base.microProduct.details = None
        else: print("Parsing details failed."); found_project_base.microProduct.details = None
    else: print(f"No data file configured for micro-product slug: {micro_product_slug}."); found_project_base.microProduct.details = None
    return found_project_base.microProduct

@app.get("/api/custom/pdf/{document_slug}", response_class=FileResponse,
         responses={404: {"model": ErrorDetail}, 500: {"model": ErrorDetail}})
async def download_micro_product_pdf_by_slug(document_slug: str):
    print(f"PDF download request for document slug: {document_slug}")
    target_mp_data: Optional[MicroProduct] = None # Will hold the full MicroProduct object with details

    # Find the project and get the micro-product details (including parsed data)
    # This loop structure needs to stay to identify which micro-product is being requested
    temp_proj_slug = None
    temp_prod_slug = None
    temp_micro_slug = None

    for project_entry in mock_projects_base_data: # Iterate over base data
        if project_entry.microProduct.pdfLinkPath.replace('pdf/', '') == document_slug: # Match by the unique PDF document slug
            # Now fetch its full details including parsed content
            # This simulates fetching full data needed for the template
            # (We are essentially re-doing what get_microproduct_detail_by_slug does,
            #  but we need the parsed 'details' specifically)

            # Get the slugs required to fetch details
            temp_proj_slug = project_entry.projectSlug
            temp_prod_slug = project_entry.productSlug
            temp_micro_slug = project_entry.microProduct.slug # The micro-product's own slug

            # Get full micro-product data, including parsed details
            # This uses the existing endpoint temporarily; in a real app, you'd call a service function.
            try:
                # This re-uses the existing logic to get the parsed details
                mp_with_details = await get_microproduct_detail_by_slug(temp_proj_slug, temp_prod_slug, temp_micro_slug)
                target_mp_data = mp_with_details # This now has .details populated
            except HTTPException: # Catch if microproduct detail fetch fails
                pass # Will be caught by the check below
            break
    
    if not target_mp_data or not target_mp_data.details:
        available_pdf_slugs = [p.microProduct.pdfLinkPath for p in mock_projects_base_data]
        print(f"Failed to find PDF definition or details. Searched for: '{document_slug}'. Available: {available_pdf_slugs}")
        raise HTTPException(status_code=404, detail=f"Micro-product details not found for PDF: {document_slug}")

    pdf_cache_filename = f"{document_slug}.pdf" # For caching
    user_friendly_download_filename = f"{target_mp_data.name.replace(' ', '_')}.pdf"

    try:
        # Use the new service function, passing the 'details' data for templating
        pdf_file_path = await generate_pdf_from_html_template(
            template_name="training_plan_pdf_template.html", # Name of your Jinja2 template
            context_data=target_mp_data.details.model_dump(), # Pass the 'details' part
            output_filename=pdf_cache_filename
        )
        
        if not os.path.exists(pdf_file_path):
             raise HTTPException(status_code=500, detail="PDF file not found after generation attempt.")
        return FileResponse(path=pdf_file_path, filename=user_friendly_download_filename, media_type='application/pdf')
    except HTTPException as http_exc:
        raise http_exc
    except Exception as e:
        print(f"Unexpected error in PDF endpoint for {document_slug}: {e}")
        raise HTTPException(status_code=500, detail=f"Unexpected PDF error: {str(e)[:200]}")


@app.get("/api/custom/health")
async def health_check(): return {"status": "healthy"}

@app.on_event("startup")
async def startup_event():
    print(f"Custom Backend starting. Frontend URL for PDF Gen: {settings.CUSTOM_FRONTEND_URL}")
    if not os.path.exists(DATA_DIR): os.makedirs(DATA_DIR, exist_ok=True); print(f"Created data dir: {DATA_DIR}")
    for slug, path in MICROPRODUCT_DATA_FILES.items():
        if not os.path.exists(path): print(f"WARNING: Data file for {slug} not found at {path}")
        else: print(f"Data file for {slug} found at {path}")

# To run locally if needed (though Docker CMD is used)
# if __name__ == "__main__":
#     uvicorn.run("main:app", host="0.0.0.0", port=8001, reload=True)
