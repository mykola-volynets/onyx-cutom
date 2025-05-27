// custom_extensions/frontend/src/types/pdfLesson.ts
import { LucideIcon } from 'lucide-react';

export type ContentBlockType =
  | 'headline'
  | 'paragraph'
  | 'bullet_list'
  | 'numbered_list'
  | 'alert' // For sections with background/icon
  | 'section_break'; // Simple visual separator

export interface HeadlineBlock {
  type: 'headline';
  level: 1 | 2 | 3 | 4; // H1, H2, H3, H4
  text: string;
  iconName?: string; // Optional: For icons next to headlines
  backgroundColor?: string; // Optional: For headline background
  textColor?: string; // Optional: For headline text color
}

export interface ParagraphBlock {
  type: 'paragraph';
  text: string;
}

export interface BulletListBlock {
  type: 'bullet_list';
  items: string[];
  iconName?: string; // Optional: Icon for each list item (if needed)
}

export interface NumberedListBlock {
  type: 'numbered_list';
  items: string[];
}

export interface AlertBlock {
  type: 'alert';
  title?: string; // Optional title for the alert box
  text: string;
  alertType: 'info' | 'warning' | 'success' | 'danger'; // To control color/icon
  iconName?: string; // Corresponds to Lucide icon names or custom ones
  backgroundColor?: string; // e.g., '#FEE2E2' for danger
  borderColor?: string; // e.g., '#F87171' for danger
  textColor?: string; // e.g., '#B91C1C' for danger
  iconColor?: string; // e.g., '#DC2626' for danger
}

export interface SectionBreakBlock {
    type: 'section_break';
    style?: 'dashed' | 'solid' | 'none'; // Optional styling for the break
}

export type ContentBlock =
  | HeadlineBlock
  | ParagraphBlock
  | BulletListBlock
  | NumberedListBlock
  | AlertBlock
  | SectionBreakBlock;

export interface PdfLessonData {
  lessonTitle: string;
  contentBlocks: ContentBlock[];
  detectedLanguage?: string | null;
  // Future: Consider adding global style overrides or metadata here
}
