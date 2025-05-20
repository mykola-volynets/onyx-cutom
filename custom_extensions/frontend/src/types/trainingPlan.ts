// custom_extensions/frontend/src/types/trainingPlan.ts

export interface StatusInfo {
  type: string;
  text: string;
}

export interface Lesson { // Kept original name
  id?: string; // Optional client-side unique key for editing
  title: string;
  check: StatusInfo;
  contentAvailable: StatusInfo;
  source: string;
  hours: number;
}

export interface Section { // Kept original name
  id: string; 
  title: string;
  totalHours: number;
  lessons: Lesson[]; // Uses your Lesson interface
}

export interface TrainingPlanData { // Kept original name
  mainTitle?: string | null;
  sections: Section[]; // Uses your Section interface
  detectedLanguage?: string | null;
}

// This interface is for the data structure that the /projects/edit/[id] page will fetch.
// It's derived from the backend's ProjectDetailForEditResponse Pydantic model.
export interface ProjectDetailDataForEdit {
  id: number;
  projectName: string;
  product?: string | null;
  microProductType?: string | null;
  microProductName?: string | null;
  microProductContent?: TrainingPlanData | null; // Uses your TrainingPlanData
  createdAt?: string | null; 
}

// This interface is used by the existing project detail page:
// src/app/projects/[projectSlug]/[productSlug]/[microProductSlug]/page.tsx
// Ensure its 'details' field uses your 'TrainingPlanData'
export interface MicroProductDetail {
  name: string;
  slug: string;
  webLinkPath?: string;
  pdfLinkPath?: string;
  details?: TrainingPlanData | null; // Uses your TrainingPlanData
}


// LANG_CONFIG_JS can remain as it might be useful for display logic
// even if reconstruction to string isn't the primary save mechanism anymore.
export interface LangConfig {
  MODULE_KEYWORD: string;
  TOTAL_TIME_KEYWORD: string;
  LESSONS_COUNT_KEYWORD: string;
  LESSONS_HEADER_KEYWORD: string;
  TIME_KEYWORD: string;
  ASSESSMENT_KEYWORD: string;
  SOURCE_KEYWORD: string;
  OUTPUT_LESSON_PREFIX: string;
  OUTPUT_ASSESSMENT: string;
  OUTPUT_CONTENT_AVAIL: string;
  OUTPUT_SOURCE_INFO: string;
  OUTPUT_TIME: string;
  OUTPUT_MODULE_TOTAL_TIME: string;
  PLACEHOLDER_CONTENT_MISSING: string;
  PLACEHOLDER_DATA_MISSING: string;
  TIME_UNIT_SINGULAR: string;
  TIME_UNIT_DECIMAL_PLURAL: string;
  TIME_UNIT_GENERAL_PLURAL: string;
}

export const LANG_CONFIG_JS: { [key: string]: LangConfig } = {
  'ru': {
    MODULE_KEYWORD: "Модуль", TOTAL_TIME_KEYWORD: "Общее время", LESSONS_COUNT_KEYWORD: "Количество уроков",
    LESSONS_HEADER_KEYWORD: "Уроки", TIME_KEYWORD: "Время", ASSESSMENT_KEYWORD: "Проверка знаний",
    SOURCE_KEYWORD: "Источник", OUTPUT_LESSON_PREFIX: "Урок", OUTPUT_ASSESSMENT: "Проверка знаний",
    OUTPUT_CONTENT_AVAIL: "Наличие контента", OUTPUT_SOURCE_INFO: "Источник информации", OUTPUT_TIME: "Время",
    OUTPUT_MODULE_TOTAL_TIME: "Общее время на модуль", PLACEHOLDER_CONTENT_MISSING: "[ДАННЫЕ О НАЛИЧИИ КОНТЕНТА ОТСУТСТВУЮТ]",
    PLACEHOLDER_DATA_MISSING: "[ДАННЫЕ ОТСУТСТВУЮТ]", TIME_UNIT_SINGULAR: "час", TIME_UNIT_DECIMAL_PLURAL: "часа", TIME_UNIT_GENERAL_PLURAL: "часов",
  },
  'en': {
    MODULE_KEYWORD: "Module", TOTAL_TIME_KEYWORD: "Total Time", LESSONS_COUNT_KEYWORD: "Number of Lessons",
    LESSONS_HEADER_KEYWORD: "Lessons", TIME_KEYWORD: "Time", ASSESSMENT_KEYWORD: "Knowledge Assessment",
    SOURCE_KEYWORD: "Information Source", OUTPUT_LESSON_PREFIX: "Lesson", OUTPUT_ASSESSMENT: "Knowledge Assessment",
    OUTPUT_CONTENT_AVAIL: "Content Availability", OUTPUT_SOURCE_INFO: "Information Source", OUTPUT_TIME: "Time",
    OUTPUT_MODULE_TOTAL_TIME: "Total time for module", PLACEHOLDER_CONTENT_MISSING: "[CONTENT AVAILABILITY DATA MISSING]",
    PLACEHOLDER_DATA_MISSING: "[DATA MISSING]", TIME_UNIT_SINGULAR: "hour", TIME_UNIT_DECIMAL_PLURAL: "hours", TIME_UNIT_GENERAL_PLURAL: "hours",
  }
};
