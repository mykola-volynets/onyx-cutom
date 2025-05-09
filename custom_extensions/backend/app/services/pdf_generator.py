# custom_extensions/backend/app/services/pdf_generator.py
import pyppeteer
import asyncio
import os
from fastapi import HTTPException
import logging

# Attempt to import settings, provide dummy if not found
try:
    from app.core.config import settings
except ImportError:
    class DummySettings:
        CUSTOM_FRONTEND_URL = os.environ.get("CUSTOM_FRONTEND_URL", "http://custom_frontend:3001")
    settings = DummySettings()


logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

PDF_OUTPUT_DIR = "/tmp/generated_pdfs"
os.makedirs(PDF_OUTPUT_DIR, exist_ok=True)

POSSIBLE_CHROMIUM_PATHS = [
    '/usr/bin/chromium-browser', # Often on Debian/Ubuntu
    '/usr/bin/chromium',         # Sometimes this name
]

def find_chrome_executable():
    # Check environment variable first (allows override in Dockerfile or docker-compose)
    env_path = os.environ.get('PUPPETEER_EXECUTABLE_PATH')
    if env_path and os.path.exists(env_path):
        logger.info(f"Using Chromium executable from ENV: {env_path}")
        return env_path
    for path in POSSIBLE_CHROMIUM_PATHS:
        if os.path.exists(path):
            logger.info(f"Found Chromium executable at: {path}")
            return path
    logger.warning("Could not automatically find system-installed Chromium executable. Pyppeteer will try its default.")
    return None # Let Pyppeteer try its default behavior

CHROME_EXEC_PATH = find_chrome_executable()

async def generate_pdf_from_frontend_url(page_url: str, output_filename: str) -> str:
    browser = None
    page = None
    pdf_path = os.path.join(PDF_OUTPUT_DIR, output_filename)
    logger.info(f"Attempting PDF generation for URL: {page_url}")
    logger.info(f"Output path: {pdf_path}")

    launch_options = {
        'headless': True,
        'args': [
            '--no-sandbox',
            '--disable-setuid-sandbox',
            '--disable-dev-shm-usage',
            '--disable-gpu',
            '--no-zygote',
            # Potentially add:
            # '--single-process', # For older Docker versions or resource-constrained environments
            # '--disable-software-rasterizer',
            # '--font-render-hinting=none' # Can help with font rendering issues
        ],
        'dumpio': True # Log browser process stderr/stdout to FastAPI console
    }
    if CHROME_EXEC_PATH:
        launch_options['executablePath'] = CHROME_EXEC_PATH
        logger.info(f"Launching pyppeteer with explicit executablePath: {CHROME_EXEC_PATH}")

    try:
        logger.info(f"Pyppeteer launch options: {launch_options}")
        browser = await pyppeteer.launch(**launch_options)
        logger.info("Browser launched successfully.")
        browser_version = await browser.version()
        logger.info(f"Browser version: {browser_version}")

        browser.on('disconnected', lambda: logger.warning('Browser disconnected event fired.'))

        page = await browser.newPage()
        logger.info("New page created.")
        await page.setViewport({'width': 1200, 'height': 800, 'deviceScaleFactor': 1}) # Common viewport

        page.on('console', lambda msg: logger.info(f'BROWSER CONSOLE: {msg.type().upper()}: {msg.text()}'))
        page.on('pageerror', lambda err: logger.error(f'BROWSER PAGEERROR: {err}'))
        page.on('requestfailed', lambda req: logger.warning(f'BROWSER REQUESTFAILED: {req.url()} error: {req.failure().errorText}'))


        logger.info(f"Navigating to {page_url}")
        await page.goto(page_url, {'waitUntil': 'domcontentloaded', 'timeout': 90000})
        logger.info(f"Page navigation completed for {page_url}")

        await asyncio.sleep(3) # Give extra time for any final JS rendering
        logger.info("Additional delay completed. Generating PDF...")

        await page.pdf({
            'path': pdf_path,
            'format': 'A4',
            'printBackground': True,
            'margin': {'top': '20px', 'right': '20px', 'bottom': '20px', 'left': '20px'}
        })
        logger.info(f"PDF generated successfully at {pdf_path}")

    except pyppeteer.errors.TimeoutError as e:
         logger.error(f"Timeout error during PDF generation for {page_url}: {e}")
         raise HTTPException(status_code=504, detail=f"PDF generation timed out: {e}")
    except Exception as e:
        logger.error(f"Error during PDF generation for {page_url}: {e}", exc_info=True)
        if browser and browser.process and browser.process.returncode is not None:
             logger.error(f"Browser process exited with code: {browser.process.returncode}")
             raise HTTPException(status_code=500, detail=f"PDF generation failed: Browser process exited unexpectedly (code {browser.process.returncode}).")
        raise HTTPException(status_code=500, detail=f"PDF generation failed: {e}")
    finally:
        if page and not page.isClosed(): await page.close()
        if browser and browser.isConnected():
            logger.info("Closing browser in finally block.")
            await browser.close()
            logger.info("Browser closed in finally.")
    return pdf_path
