// custom_extensions/frontend/src/types/pipelines.ts
/* eslint-disable @typescript-eslint/no-explicit-any */

export interface PromptTemplate {
  id: string;
  name: string;
  templateText: string;
  picture: string; // New field for image URL or path
}

// Example updated templates - replace with your actual data and picture paths/URLs
export const PROMPT_TEMPLATES: PromptTemplate[] = [
  { id: 'template1', name: 'General Summary', templateText: 'Summarize the following text: {{text_input}}', picture: '/images/template_summary.png' },
  { id: 'template2', name: 'Key Points Extraction', templateText: 'Extract key points from: {{text_input}}', picture: '/images/template_keypoints.png' },
  { id: 'template3', name: 'Sentiment Analysis', templateText: 'Analyze sentiment of: {{text_input}}', picture: '/images/template_sentiment.png' },
  // Add more templates as needed
];

// Base type for API responses (list view)
export interface Pipeline {
  id: number;
  pipeline_name: string;
  pipeline_description?: string | null; // Description is still fetched, just not shown on list page
  is_discovery_prompts: boolean;      // Renamed
  is_structuring_prompts: boolean;    // Renamed
  // The following are the dictionary versions from MicroproductPipelineDBResponse
  discovery_prompts?: { [key: string]: string } | null;    // Renamed
  structuring_prompts?: { [key: string]: string } | null;  // Renamed
  created_at: string; // Or Date
}

// For form data (Create)
export interface PipelineCreateFormData {
  id?: number; // Optional for create, present for edit state
  pipeline_name: string;
  pipeline_description?: string | null;
  is_discovery_prompts: boolean;    // Renamed
  is_structuring_prompts: boolean;  // Renamed
  discovery_prompts_list: string[];   // Renamed
  structuring_prompts_list: string[]; // Renamed - this will hold template *texts*
}

// Base type for API responses (list view - matches MicroproductPipelineDBResponse from backend)
export interface Pipeline {
  id: number;
  pipeline_name: string;
  pipeline_description?: string | null;
  is_discovery_prompts: boolean;
  is_structuring_prompts: boolean;
  discovery_prompts?: { [key: string]: string } | null; 
  structuring_prompts?: { [key: string]: string } | null;
  created_at: string; // Or Date
}

// For form data (Create and also shape of data for Edit form state)
export interface PipelineFormData { // Combined for simplicity, 'id' distinguishes create/edit
  id?: number; 
  pipeline_name: string;
  pipeline_description?: string | null;
  is_discovery_prompts: boolean;
  is_structuring_prompts: boolean;
  discovery_prompts_list: string[]; 
  structuring_prompts_list: string[]; // Will store the TEXT of selected templates
}

// For data returned specifically by GET /pipelines/{id} (backend's MicroproductPipelineGetResponse)
export interface PipelineGetResponse extends Pipeline { // Extends basic Pipeline info
  discovery_prompts_list: string[];  // Already a list from backend
  structuring_prompts_list: string[]; // Already a list from backend
}
