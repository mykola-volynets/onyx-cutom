// custom_extensions/frontend/src/types/pipelines.ts

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

export interface Pipeline {
  id: number; 
  pipeline_name: string;
  pipeline_description: string | null; // Make it nullable to match DB
  is_prompts_data_collection: boolean;
  is_prompts_data_formating: boolean;
  prompts_data_collection: Record<string, string> | null; // Stored as JSON object {"1": "prompt"}
  prompts_data_formating: Record<string, string> | null;  // Stored as JSON object
  created_at: string; // ISO date string, matching 'date' alias from backend
}

// For creating a new pipeline, prompts will be managed as arrays of strings in the form
export interface PipelineCreateFormData {
  pipeline_name: string;
  pipeline_description?: string;
  is_prompts_data_collection: boolean;
  is_prompts_data_formating: boolean;
  prompts_data_collection_list: string[];
  prompts_data_formating_list: string[];
}
