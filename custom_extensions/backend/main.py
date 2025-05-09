# custom_extensions/backend/main.py
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from typing import List, Optional, Dict, Any
from pydantic import BaseModel
import re
import os
import copy
from app.services.pdf_generator import generate_pdf_from_frontend_url # Import the service
from app.core.config import settings
import uvicorn
from fastapi.responses import FileResponse # To return the PDF file

# --- Constants ---
DATA_DIR = os.path.join(os.path.dirname(__file__), "data")
# Define a mapping for known micro-product slugs to their data files
MICROPRODUCT_DATA_FILES = {
    "план-обучения-для-мастеров-маникюра": os.path.join(DATA_DIR, "vogue_lash_spa_training_plan.txt"),
    # "celi-klienta": os.path.join(DATA_DIR, "celi_klienta_details.txt"),
}

app = FastAPI()

origins = [
     "http://web_server:3000",
     "http://localhost:3000",
     "http://custom_frontend:3001",
     "http://localhost:3001",
]
app.add_middleware(
     CORSMiddleware,
     allow_origins=origins,
     allow_credentials=True,
     allow_methods=["*"],
     allow_headers=["*"],
)

# --- Pydantic Models ---
class MicroProduct(BaseModel):
    name: str
    slug: str
    webLinkPath: Optional[str] = None
    pdfLinkPath: Optional[str] = None
    details: Optional[Dict[str, Any]] = None

class ProjectEntry(BaseModel):
    projectName: str
    projectSlug: str
    product: str
    productSlug: str
    microProduct: MicroProduct

# --- Slug Function ---
def create_slug(text: str) -> str:
    text = text.lower()
    text = re.sub(r'\s+', '-', text)
    text = re.sub(r'[^\wа-яё\-]+', '', text, flags=re.UNICODE)
    return text or "default-slug"

# --- Structure-Based TXT Parsing Logic ---
def parse_training_plan_structurally(file_path: str) -> Optional[Dict[str, Any]]:
    """Parses the training plan based on structure (line prefixes)."""
    if not os.path.exists(file_path):
        print(f"Warning: Training plan file not found at {file_path}")
        return None

    plan = {"mainTitle": None, "sections": []}
    current_section = None
    current_lesson = None
    section_id_counter = 1

    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            for line in f:
                line = line.strip()
                if not line or line.startswith("Итог по всей программе"):
                    continue

                module_match = re.match(r"Модуль\s*[\d:]+(.*)", line, re.IGNORECASE | re.UNICODE)
                if module_match:
                    # Save previous section if exists
                    if current_section:
                        plan["sections"].append(current_section)

                    section_title = module_match.group(1).strip().rstrip('.').strip() # Clean title
                    current_section = {
                        "id": f"№{section_id_counter}",
                        "title": section_title,
                        "totalHours": 0, # Reset for new section
                        "lessons": []
                    }
                    section_id_counter += 1
                    current_lesson = None # Reset lesson context
                    # Try to parse total time if it's on a separate line (optional)
                    total_time_match = re.search(r"Общее время на модуль:\s*([\d\.]+)\s*час", line, re.IGNORECASE | re.UNICODE)
                    if total_time_match:
                         try:
                             current_section["totalHours"] = float(total_time_match.group(1))
                         except ValueError:
                             pass
                    continue

                # Match Lesson Title (Starts with "Урок" followed by digits/dots)
                lesson_match = re.match(r"Урок\s*[\d\.]+:\s*(.*)", line, re.IGNORECASE | re.UNICODE)
                if lesson_match and current_section:
                    lesson_title = lesson_match.group(1).strip().strip('“').strip('”')
                    current_lesson = {
                        "title": lesson_title,
                        # Store raw attributes, frontend can interpret later
                        "attributes": {}
                    }
                    current_section["lessons"].append(current_lesson)
                    continue

                # Match Lesson Attributes (Starts with "•", has ":")
                # Needs a current_lesson context to be active
                attribute_match = re.match(r"\s*•\s*([^:]+):\s*(.*)", line)
                if attribute_match and current_lesson:
                    key = attribute_match.group(1).strip()
                    value = attribute_match.group(2).strip()
                    current_lesson["attributes"][key] = value # Store raw key-value

                    # Optionally accumulate total hours if not parsed from module line
                    if key == "Время" and current_section and "totalHours" not in current_section: # Or if totalHours parsing failed
                         try:
                            hours_match = re.search(r'([\d\.]+)', value)
                            if hours_match:
                                current_section["totalHours"] += float(hours_match.group(1))
                         except ValueError:
                             pass
                    continue

                # Optional: Try to parse total module time if it wasn't on the module line
                if current_section and not current_section["totalHours"]:
                    total_time_match = re.search(r"Общее время на модуль:\s*([\d\.]+)\s*час", line, re.IGNORECASE | re.UNICODE)
                    if total_time_match:
                         try:
                             current_section["totalHours"] = float(total_time_match.group(1))
                         except ValueError:
                             pass

            # Append the last section after the loop finishes
            if current_section:
                plan["sections"].append(current_section)

            # Optional: Set main title (e.g., derive from first section)
            if plan["sections"] and not plan["mainTitle"]:
                 # Simple heuristic: take title from first section
                 plan["mainTitle"] = plan["sections"][0].get("title", "Training Plan")

            # Map raw attributes to frontend structure (do this here or in frontend)
            frontend_check_map = { "тест": "test", "практика": "practice", "практика с куратором": "practice" }
            frontend_content_map = { "да": {"type": "percent", "text": "100%"}, "нет": {"type": "none", "text": "Нет"}}

            for section in plan.get("sections", []):
                for lesson in section.get("lessons", []):
                    raw_attributes = lesson.pop("attributes", {}) # Remove raw attributes
                    lesson["check"] = {"type": "unknown", "text": ""}
                    lesson["contentAvailable"] = {"type": "unknown", "text": ""}
                    lesson["source"] = ""
                    lesson["hours"] = 0

                    for key, value in raw_attributes.items():
                        if "Проверка знаний" in key:
                            val_lower = value.lower()
                            mapped_type = "other"
                            for k, v in frontend_check_map.items():
                                if k in val_lower:
                                    mapped_type = v
                                    break
                            lesson["check"] = {"type": mapped_type, "text": value}
                        elif "Наличие контента" in key:
                            lesson["contentAvailable"] = frontend_content_map.get(value.lower(), {"type": "unknown", "text": value})
                        elif "Источник информации" in key:
                            lesson["source"] = value
                        elif "Время" in key:
                            try:
                                hours_match = re.search(r'([\d\.]+)', value)
                                if hours_match:
                                    lesson["hours"] = float(hours_match.group(1))
                            except ValueError:
                                lesson["hours"] = 0 # Default if parsing fails

            return plan

    except Exception as e:
        print(f"Error parsing file {file_path}: {e}")
        return None

# --- Base Mock Project Structure (WITHOUT details initially) ---
# Details will be loaded on demand for specific micro-products
mock_projects_base_data: List[ProjectEntry] = [
    ProjectEntry(
        projectName='Vogue Lash Spa',
        projectSlug=create_slug('Vogue Lash Spa'),
        product='Стратегия',
        productSlug=create_slug('Стратегия'),
        microProduct=MicroProduct(
            name='План обучения для мастеров маникюра',
            slug=create_slug('План обучения для мастеров маникюра'),
            webLinkPath=f"/projects/{create_slug('Vogue Lash Spa')}/{create_slug('Стратегия')}/{create_slug('План обучения для мастеров маникюра')}",
            pdfLinkPath=f"/api/custom/pdf/{create_slug('Vogue Lash Spa_Стратегия_План обучения')}",
            # details=None # Details will be loaded on demand
        )
    ),
    ProjectEntry(
        projectName='Vogue Lash Spa',
        projectSlug=create_slug('Vogue Lash Spa'),
        product='Аудит',
        productSlug=create_slug('Аудит'),
        microProduct=MicroProduct(
            name='Цели клиента',
            slug=create_slug('Цели клиента'),
            webLinkPath=f"/projects/{create_slug('Vogue Lash Spa')}/{create_slug('Аудит')}/{create_slug('Цели клиента')}",
            pdfLinkPath=f"/api/custom/pdf/{create_slug('Vogue Lash Spa_Аудит_Цели клиента')}",
            # details=None
        )
    ),
    ProjectEntry(
        projectName='We Fix Appliance',
        projectSlug=create_slug('We Fix Appliance'),
        product='Коммерческое',
        productSlug=create_slug('Коммерческое'),
        microProduct=MicroProduct(
            name='ROI от внедрения LMS',
            slug=create_slug('ROI от внедрения LMS'),
            webLinkPath=f"/projects/{create_slug('We Fix Appliance')}/{create_slug('Коммерческое')}/{create_slug('ROI от внедрения LMS')}",
            pdfLinkPath=f"/api/custom/pdf/{create_slug('We Fix Appliance_Коммерческое_ROI')}",
            # details=None
        )
    )
]

# Pydantic model for error responses
class ErrorDetail(BaseModel):
    detail: str

# --- API Endpoints ---
@app.get("/api/custom/projects", response_model=List[ProjectEntry])
async def get_projects():
    # Return only the base data, frontend doesn't need details for the list view
    print("GET /api/custom/projects called")
    # Return a copy to avoid modifying the original mock data if details were added elsewhere
    return copy.deepcopy(mock_projects_base_data)

@app.get(
    "/api/custom/microproducts/{project_slug}/{product_slug}/{micro_product_slug}",
    response_model=MicroProduct,
    responses={404: {"model": ErrorDetail}}
)
async def get_microproduct_detail_by_slug(
    project_slug: str,
    product_slug: str,
    micro_product_slug: str
):
    """
    Get details for a specific micro-product using slugs.
    Reads and parses data file ON DEMAND if applicable.
    """
    print(f"Searching for microproduct by slug: {project_slug} / {product_slug} / {micro_product_slug}")

    found_project: Optional[ProjectEntry] = None
    for project in mock_projects_base_data:
        if (project.projectSlug == project_slug and
            project.productSlug == product_slug and
            project.microProduct.slug == micro_product_slug):
            # Found the base project entry, make a copy to potentially add details
            found_project = copy.deepcopy(project)
            break

    if not found_project:
        print("Micro-product base entry NOT found by slug, raising HTTPException")
        raise HTTPException(status_code=404, detail="Micro-product not found")

    # --- On-Demand Parsing ---
    # Check if this specific micro-product has a corresponding data file
    file_to_parse = MICROPRODUCT_DATA_FILES.get(micro_product_slug)
    if file_to_parse:
        print(f"Attempting to parse details from: {file_to_parse}")
        parsed_details = parse_training_plan_structurally(file_to_parse)
        if parsed_details:
            print("Successfully parsed details.")
            found_project.microProduct.details = parsed_details
        else:
            print("Parsing failed or file not found, returning without details.")
            # Keep details as None or empty dict if parsing fails
            found_project.microProduct.details = {}
    else:
         print("No specific data file configured for this micro-product slug.")
         found_project.microProduct.details = {} # Return empty details if no file mapping

    print("Returning micro-product data.")
    return found_project.microProduct # Return the MicroProduct part

# --- PDF Endpoint ---
@app.get(
    "/api/custom/pdf/{document_slug}", # Use a slug that identifies the document
    response_class=FileResponse,
    responses={
        404: {"model": ErrorDetail, "description": "Micro-product or PDF not found"},
        500: {"model": ErrorDetail, "description": "PDF Generation Failed"}
    }
)
async def download_micro_product_pdf_by_slug(document_slug: str):
    """
    Generates and downloads the PDF for a micro-product based on its document slug.
    """
    print(f"PDF download request for document slug: {document_slug}")

    # **Mapping Logic:** Determine the project/product/micro-product slugs from document_slug
    # This depends on how you structure `document_slug`.
    target_micro_product: Optional[MicroProduct] = None
    target_project_slug : Optional[str] = None
    target_product_slug : Optional[str] = None

    expected_pdf_path = f"/api/custom/pdf/{document_slug}"

    for project in mock_projects_base_data:
         # Check if the pdfLinkPath in the mock data matches the requested path
         # Need to strip the leading '/api/custom/pdf/' part for comparison if using full path
         if project.microProduct.pdfLinkPath == expected_pdf_path:
             target_micro_product = project.microProduct
             target_project_slug = project.projectSlug
             target_product_slug = project.productSlug
             break

    if not target_micro_product or not target_project_slug or not target_product_slug:
        raise HTTPException(status_code=404, detail="Micro-product definition not found for this PDF slug.")

    # Construct the full frontend URL to render the page for PDF generation
    # Ensure CUSTOM_FRONTEND_URL is set in environment (via docker-compose)
    frontend_page_url = f"{settings.CUSTOM_FRONTEND_URL}/projects/{target_project_slug}/{target_product_slug}/{target_micro_product.slug}"

    # Define a unique filename for the output PDF
    pdf_filename = f"{document_slug}.pdf"

    try:
        # Call the pyppeteer service
        pdf_path = await generate_pdf_from_frontend_url(frontend_page_url, pdf_filename)

        if not os.path.exists(pdf_path):
             raise HTTPException(status_code=500, detail="PDF file not found after generation attempt.")

        # Return the generated file
        return FileResponse(
            path=pdf_path,
            filename=pdf_filename,
            media_type='application/pdf'
        )
    except HTTPException as http_exc:
         # Re-raise HTTPExceptions from the generator service
         raise http_exc
    except Exception as e:
        # Catch unexpected errors during the process
        print(f"Unexpected error in PDF endpoint: {e}")
        raise HTTPException(status_code=500, detail=f"An unexpected error occurred during PDF processing: {e}")

# --- Health Check ---
@app.get("/api/custom/health")
async def health_check():
    return {"status": "healthy"}


# Startup event
@app.on_event("startup")
async def startup_event():
    print(f"Custom Backend starting...")
    print(f"Custom Frontend URL for PDF Gen: {settings.CUSTOM_FRONTEND_URL}")
    # Ensure the data directory exists
    if not os.path.exists(DATA_DIR):
        print(f"Data directory {DATA_DIR} not found!")
    else:
        print(f"Data directory: {DATA_DIR}")

