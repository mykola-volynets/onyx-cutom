# custom_extensions/backend/app/services/pdf_generator.py
import pyppeteer
import asyncio
import os
from fastapi import HTTPException
import logging
from pathlib import Path
from jinja2 import Environment, FileSystemLoader, select_autoescape # Import Jinja2

# Attempt to import settings (as before)
try:
    from app.core.config import settings
except ImportError:
    class DummySettings: CUSTOM_FRONTEND_URL = os.environ.get("CUSTOM_FRONTEND_URL", "http://custom_frontend:3001")
    settings = DummySettings()


logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

PDF_CACHE_DIR = Path("/tmp/pdf_cache")
PDF_CACHE_DIR.mkdir(exist_ok=True)

CHROME_EXEC_PATH = '/usr/bin/chromium' # Or use find_chrome_executable()

# --- Setup Jinja2 Environment ---
# Assuming your templates are in a 'templates' subdirectory relative to this file or your main.py
TEMPLATE_DIR = os.path.join(os.path.dirname(os.path.dirname(__file__)), "templates") # Adjust if main.py is not in app/
if not os.path.exists(TEMPLATE_DIR): # Fallback if main.py is in app/ and templates is sibling to app/
    TEMPLATE_DIR = os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(__file__))), "templates")


logger.info(f"PDF Template Directory expected at: {TEMPLATE_DIR}")
if not os.path.isdir(TEMPLATE_DIR):
    logger.error(f"Jinja2 TEMPLATE_DIR does not exist: {TEMPLATE_DIR}")
    # Create a dummy one for the service to not crash on import, but PDF will fail
    os.makedirs(TEMPLATE_DIR, exist_ok=True)

jinja_env = Environment(
    loader=FileSystemLoader(TEMPLATE_DIR),
    autoescape=select_autoescape(['html', 'xml'])
)
# --- End Jinja2 Setup ---

async def generate_pdf_from_html_template(
    template_name: str,
    context_data: dict,
    output_filename: str,
    use_cache: bool = True
) -> str:
    pdf_path_in_cache = PDF_CACHE_DIR / output_filename
    if use_cache and pdf_path_in_cache.exists():
        logger.info(f"PDF CACHE: Serving cached PDF: {pdf_path_in_cache}")
        return str(pdf_path_in_cache)

    browser = None
    page = None
    temp_pdf_path = os.path.join("/tmp", f"temp_html_pdf_{output_filename}")

    logger.info(f"PDF GEN (from HTML template): Rendering template '{template_name}'")
    logger.info(f"PDF GEN: Temp output at {temp_pdf_path}, final cache at {pdf_path_in_cache}")

    try:
        template = jinja_env.get_template(template_name)
        html_content = template.render(details=context_data) # Pass data as 'details' to match template
        logger.info("HTML content rendered from template.")
    except Exception as e:
        logger.error(f"Error rendering HTML template '{template_name}': {e}", exc_info=True)
        raise HTTPException(status_code=500, detail=f"Failed to render PDF template: {e}")

    launch_options = {
        'headless': 'new', 'args': ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage', '--disable-gpu', '--no-zygote', '--js-flags=--max-old-space-size=512', '--single-process', '--disable-extensions', '--disable-background-networking', '--disable-default-apps', '--disable-sync', '--disable-translate', '--hide-scrollbars', '--metrics-recording-only', '--mute-audio', '--no-first-run', '--safeBrowse-disable-auto-update'], 'dumpio': True, 'executablePath': CHROME_EXEC_PATH
    }

    try:
        browser = await pyppeteer.launch(**launch_options)
        logger.info(f"Browser launched for HTML content. Version: {await browser.version()}")
        page = await browser.newPage()
        logger.info("New page created for HTML content.")
        
        # Set content from string - waitUntil option is important
        await page.setContent(html_content)
        logger.info("HTML content set in Pyppeteer page.")
        
        # Optional: Add a small delay for rendering complex CSS if any
        await asyncio.sleep(2)

        logger.info("Generating PDF from HTML content...")
        await page.pdf({
            'path': temp_pdf_path, 'format': 'A4', 'printBackground': True,
            'margin': {'top': '20px', 'right': '20px', 'bottom': '20px', 'left': '20px'},
            'preferCSSPageSize': True
        })
        logger.info(f"PDF generated from HTML successfully at {temp_pdf_path}")

        if os.path.exists(pdf_path_in_cache): os.remove(pdf_path_in_cache)
        os.rename(temp_pdf_path, pdf_path_in_cache)
        logger.info(f"PDF from HTML moved to cache: {pdf_path_in_cache}")
        return str(pdf_path_in_cache)
    except Exception as e:
        logger.error(f"Error during PDF generation from HTML: {e}", exc_info=True)
        if browser and browser.process and browser.process.returncode is not None:
             logger.error(f"Browser process (HTML) exited with code: {browser.process.returncode}")
        if os.path.exists(temp_pdf_path):
            try: os.remove(temp_pdf_path)
            except OSError: pass
        raise HTTPException(status_code=500, detail=f"PDF generation from HTML failed: {str(e)[:200]}")
    finally:
        if page and not page.isClosed(): await page.close()
        if browser: await browser.close(); logger.info("Browser for HTML PDF closed.")
