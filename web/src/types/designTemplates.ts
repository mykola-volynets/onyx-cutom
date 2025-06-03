// web/src/types/designTemplates.ts

export interface DesignTemplateResponse {
  id: number;
  template_name: string;
  template_structuring_prompt: string;
  design_image_path: string | null;
  microproduct_type: string;
  component_name: string;
  date_created: string; // Assuming datetime objects are serialized as ISO strings
}
