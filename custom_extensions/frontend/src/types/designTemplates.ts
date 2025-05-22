// custom_extensions/frontend/src/types/designTemplates.ts

export interface DesignTemplate {
  id: number;
  template_name: string;
  template_structuring_prompt: string;
  design_image_path: string;
  microproduct_type: string;
  component_name: string;
  date_created: string; // or Date
}

export interface DesignTemplateFormData {
  template_name: string;
  template_structuring_prompt: string;
  design_image_path: string; // This will hold the path returned by the upload API
  microproduct_type: string;
  component_name: string;
}

// You might also want to define the type for the image upload response
export interface ImageUploadResponse {
  file_path: string;
}
