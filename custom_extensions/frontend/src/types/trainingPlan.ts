// custom_extensions/frontend/src/types/trainingPlan.ts

export interface StatusInfo {
  type: string;
  text: string;
}

export interface Lesson {
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
}

export interface TrainingPlanData {
  mainTitle?: string;
  sections: Section[];
}

export interface MicroProductDetail {
  name: string;
  slug: string;
  webLinkPath?: string;
  pdfLinkPath?: string;
  details?: TrainingPlanData | null; // This is the structure from the parser
}