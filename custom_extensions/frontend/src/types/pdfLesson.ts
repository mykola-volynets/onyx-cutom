// custom_extensions/frontend/src/types/pdfLesson.ts
import { LucideIcon } from 'lucide-react'; // Kept as it was in your file

// Individual block type interfaces
export interface HeadlineBlock {
  type: 'headline';
  level: 1 | 2 | 3 | 4;
  text: string;
  iconName?: string;
  backgroundColor?: string;
  textColor?: string;
  isImportant?: boolean;
}

export interface ParagraphBlock {
  type: 'paragraph';
  text: string;
}

// ListItem can be a string, or any of the ContentBlock types (including nested lists)
// This requires ContentBlock to be defined first or use a forward-compatible way if ListItem is used inside it.
// Let's define ContentBlock (the union) first, then ListItem uses it.

export type AnyContentBlock = // Union of all block types
  | HeadlineBlock
  | ParagraphBlock
  | BulletListBlock // Forward reference to BulletListBlock defined below
  | NumberedListBlock // Forward reference to NumberedListBlock defined below
  | AlertBlock
  | SectionBreakBlock;

export type ListItem = string | AnyContentBlock; // MODIFIED: ListItem can be string or ANY block

export interface BulletListBlock {
  type: 'bullet_list';
  items: ListItem[];
  iconName?: string;
}

export interface NumberedListBlock {
  type: 'numbered_list';
  items: ListItem[];
}

export interface AlertBlock {
  type: 'alert';
  title?: string;
  text: string;
  alertType: 'info' | 'warning' | 'success' | 'danger';
  iconName?: string;
  backgroundColor?: string;
  borderColor?: string;
  textColor?: string;
  iconColor?: string;
}

export interface SectionBreakBlock {
  type: 'section_break';
  style?: 'dashed' | 'solid' | 'none';
}

// Main data structure for the lesson
export interface PdfLessonData {
  lessonTitle: string;
  contentBlocks: AnyContentBlock[]; // Uses the main union type
  detectedLanguage?: string | null;
}
