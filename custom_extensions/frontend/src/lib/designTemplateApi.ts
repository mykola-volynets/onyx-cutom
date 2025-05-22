// custom_extensions/frontend/src/lib/designTemplateApi.ts
import { DesignTemplate, DesignTemplateFormData, ImageUploadResponse } from '@/types/designTemplates';

const API_BASE_URL = '/api/custom-projects-backend'; // Adjust if your proxy path is different

export async function fetchDesignTemplates(): Promise<DesignTemplate[]> {
  const response = await fetch(`${API_BASE_URL}/design_templates`);
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({ detail: 'Failed to fetch design templates' }));
    throw new Error(errorData.detail || `HTTP error! status: ${response.status}`);
  }
  return response.json();
}

export async function fetchMicroproductTypes(): Promise<string[]> {
  const response = await fetch(`${API_BASE_URL}/microproduct_types`);
   if (!response.ok) {
    const errorData = await response.json().catch(() => ({ detail: 'Failed to fetch microproduct types' }));
    throw new Error(errorData.detail || `HTTP error! status: ${response.status}`);
  }
  return response.json();
}

export async function uploadDesignImage(imageFile: File): Promise<ImageUploadResponse> {
  const formData = new FormData();
  formData.append('file', imageFile);

  const response = await fetch(`${API_BASE_URL}/design_templates/upload_image`, {
    method: 'POST',
    body: formData,
    // Note: Do not set 'Content-Type' header when using FormData with fetch,
    // the browser will set it correctly with the boundary.
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({ detail: 'Failed to upload image' }));
    throw new Error(errorData.detail || `HTTP error! status: ${response.status}`);
  }
  return response.json();
}

export async function addDesignTemplate(templateData: DesignTemplateFormData): Promise<DesignTemplate> {
  const response = await fetch(`${API_BASE_URL}/design_templates/add`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(templateData),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({ detail: 'Failed to add design template' }));
    throw new Error(errorData.detail || `HTTP error! status: ${response.status}`);
  }
  return response.json();
}
