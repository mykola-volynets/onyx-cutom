// custom_extensions/frontend/src/types/designTemplates.ts

export interface DesignTemplateResponse {
  id: number;
  template_name: string;
  template_structuring_prompt: string;
  design_image_path: string | null;
  microproduct_type: string;
  component_name: string;
  date_created: string;
}

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
  design_image_path: string; // Path from upload or manual input
  microproduct_type: string;
  component_name: string;
}

export interface ImageUploadResponse {
  file_path: string;
}

// Data structure for updating a design template (image path is not updatable here)
export interface DesignTemplateUpdateData {
  template_name?: string;
  template_structuring_prompt?: string;
  microproduct_type?: string;
  component_name?: string;
}
