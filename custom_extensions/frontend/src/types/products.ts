// custom_extensions/frontend/src/types/products.ts
/* eslint-disable @typescript-eslint/no-explicit-any */

// Matches CustomProductDBResponse from backend
export interface Product {
  id: number;
  product_name: string;
  product_description?: string | null;
  is_discovery_prompts: boolean;
  is_structuring_prompts: boolean;
  discovery_prompts?: { [key: string]: string } | null;
  structuring_prompts?: { [key: string]: string } | null;
  created_at: string; // Or Date, depending on how you parse it
}

// For creating a new Product
export interface ProductCreateFormData {
  id?: number; // Optional: useful for edit page to carry over ID
  product_name: string;
  product_description?: string | null;
  is_discovery_prompts: boolean;
  is_structuring_prompts: boolean;
  discovery_prompts_list: string[]; // For Discovery Prompts (free text)
  structuring_prompts_list: string[]; // For Structuring Prompts (will store the selected template's text)
}

// For fetching a single product for editing (matches CustomProductGetResponse)
export interface ProductEditData extends ProductCreateFormData {
  id: number; // Ensure ID is present for editing
  created_at: string;
}

export interface PromptTemplate {
  id: string;
  name: string;
  templateText: string;
  imageUrl?: string; // Optional image URL for the template
  imageAltText?: string; // Optional alt text for the image
}

export const PROMPT_TEMPLATES: PromptTemplate[] = [
  {
    id: 'training-plan-structure-v1',
    name: 'Structure for Training Plan microproduct',
    templateText: `It is critical that you strictly adhere to the following markdown formatting and exact keywords for the specified language.
Your answer should be in LANGUAGE

Overall Structure:

Optionally, begin with a main program title: # [Program Title]
Modules can be visually separated by a --- line if desired.
Module Format:

Module Title Line: Start with ##, then Module (English) or Модуль (Russian), the module number, a colon, and the title. Example: ## Module 1: Introduction or ## Модуль 1: Введение. This line must end with a newline.
Optional Blank Line(s): Zero or more blank lines can follow the module title line.
Total Time Line: Must be formatted exactly as: **Total Time:** [Value] (English) or **Общее время:** [Значение] (Russian). This line must end with a newline.
Number of Lessons Line: Must be formatted exactly as: **Number of Lessons:** [Value] (English) or **Количество уроков:** [Значение] (Russian). This line must end with a newline.
Mandatory Blank Line: Exactly one blank line must follow the "Number of Lessons" / "Количество уроков" line.
Lessons Header Line: Must be formatted exactly as: ### Lessons (English) or ### Уроки (Russian). This line must end with a newline.
Lesson Format (within a module, after the ### Lessons/Уроки header):

Lesson Titles:
English: Numbered list, bolded title. Example: 1. **Lesson Title Text**
Russian: Hyphenated list, bolded title. Example: - **Название урока**
Lesson Details: Each detail must be on a new line, indented with two spaces, a hyphen, and a space (-). The keyword must be bolded, followed by a colon, a space, and then the value. Use these exact keywords:
For English:
- **Time:** [Value]
- **Knowledge Assessment:** [Description]
- **Information Source:** [Description]
For Russian:
- **Время:** [Значение]
- **Проверка знаний:** [Описание]
- **Источник:** [Описание] (Important: use the keyword "Источник" for Russian source details)
Blank Lines: Ensure one blank line after all details of one lesson before starting the next lesson title.
Use the exact keywords and markdown formatting as shown for the specified [TARGET LANGUAGE]. Replace bracketed placeholders like [Value] or [Description] with actual content. If content is unknown, you may use the placeholder itself but maintain the surrounding structure and keywords.`,
    imageUrl: 'https://via.placeholder.com/100x80?text=TrainingPlan', // Replace with actual image URL
    imageAltText: 'Training Plan Structure Template Image'
  }
];
