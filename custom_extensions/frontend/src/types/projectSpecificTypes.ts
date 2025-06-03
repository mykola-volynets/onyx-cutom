// custom_extensions/frontend/src/types/projectSpecificTypes.ts
import {
  PdfLessonData as PdfLessonDataType,
  type AnyContentBlock as ContentBlockType,
  type HeadlineBlock as HeadlineBlockType,
  type ParagraphBlock as ParagraphBlockType,
  type BulletListBlock as BulletListBlockType,
  type NumberedListBlock as NumberedListBlockType,
  type AlertBlock as AlertBlockType,
  type SectionBreakBlock as SectionBreakBlockType
} from './pdfLesson';
import { VideoLessonData } from './videoLessonTypes'; // <-- Import the new VideoLessonData type

// --- TrainingPlan Specific Types (existing) ---
export interface StatusInfo {
  type: string;
  text: string;
}

export interface Lesson {
  id?: string;
  title: string;
  check: StatusInfo;
  contentAvailable: StatusInfo;
  source: string;
  hours: number;
}

export interface Section {
  id: string;
  title: string;
  totalHours: number;
  lessons: Lesson[];
  autoCalculateHours?: boolean;
}

export interface TrainingPlanData {
  mainTitle?: string | null;
  sections: Section[];
  detectedLanguage?: string | null;
}
// --- End TrainingPlan Specific Types ---


// Generic Content Type for MicroProducts
// UPDATED to include VideoLessonData
export type MicroProductContentData = TrainingPlanData | PdfLessonDataType | VideoLessonData | null;


// For fetching project details for the edit page
export interface ProjectDetailDataForEdit {
  id: number;
  projectName: string;
  microProductName?: string | null;
  design_template_id?: number | null;
  microProductContent?: MicroProductContentData;
  createdAt?: string | Date | null;
  design_template_name?: string | null;
  design_component_name?: string | null;
  design_image_path?: string | null;
}

// Type for the project list API response (simplified)
export interface ProjectListItem {
  id: number;
  projectName: string;
  projectSlug: string;
  microproduct_name?: string | null;
  design_template_name?: string | null;
  design_microproduct_type?: string | null;
  created_at: string | Date;
  design_template_id?: number | null;
}

// For the detailed view of a project instance
export interface ProjectInstanceDetail {
  name: string;
  slug: string;
  project_id: number;
  design_template_id: number;
  component_name: string;
  webLinkPath?: string | null;
  pdfLinkPath?: string | null;
  details?: MicroProductContentData; // This now implicitly includes VideoLessonData
  detectedLanguage?: string; // Added to match other data structures if needed at this level
}

// Type for Design Template API Response
export interface DesignTemplateResponse {
  id: number;
  template_name: string;
  template_structuring_prompt: string;
  microproduct_type: string;
  component_name: string;
  design_image_path?: string | null;
  date_created: string | Date;
}

// Re-export PdfLessonData and its supporting types using "export type"
export type {
  PdfLessonDataType as PdfLessonData, // Re-export with the original name
  ContentBlockType as ContentBlock,
  HeadlineBlockType as HeadlineBlock,
  ParagraphBlockType as ParagraphBlock,
  BulletListBlockType as BulletListBlock,
  NumberedListBlockType as NumberedListBlock,
  AlertBlockType as AlertBlock,
  SectionBreakBlockType as SectionBreakBlock
};

// It's good practice to also export VideoLesson types if they are only defined in videoLessonTypes.ts
// and used by MicroProductContentData here.
// However, if videoLessonTypes.ts already exports them, this isn't strictly necessary
// but makes projectSpecificTypes.ts a more complete "aggregator" if desired.
export type { VideoLessonData, VideoLessonSlideData } from './videoLessonTypes';
