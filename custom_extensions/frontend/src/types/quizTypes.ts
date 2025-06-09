export interface QuizQuestionOption {
    id: string;  // e.g., "A", "B", "C"
    text: string;
}

export interface MatchingPrompt {
    id: string; // e.g., "A", "B", "C"
    text: string;
}

export interface MatchingOption {
    id: string; // e.g., "1", "2", "3"
    text: string;
}

export interface SortableItem {
    id: string; // e.g., "step1", "step2"
    text: string;
}

export interface BaseQuestion {
    question_text: string;
    explanation?: string;
}

export interface MultipleChoiceQuestion extends BaseQuestion {
    question_type: "multiple-choice";
    options: QuizQuestionOption[];
    correct_option_id: string;
}

export interface MultiSelectQuestion extends BaseQuestion {
    question_type: "multi-select";
    options: QuizQuestionOption[];
    correct_option_ids: string[] | string;
}

export interface MatchingQuestion extends BaseQuestion {
    question_type: "matching";
    prompts: MatchingPrompt[];
    options: MatchingOption[];
    correct_matches: Record<string, string>;  // Maps prompt.id to option.id, e.g. {"A": "3", "B": "1"}
}

export interface SortingQuestion extends BaseQuestion {
    question_type: "sorting";
    items_to_sort: SortableItem[];
    correct_order: string[];  // List of SortableItem.id in the correct sequence
}

export interface OpenAnswerQuestion extends BaseQuestion {
    question_type: "open-answer";
    acceptable_answers: string[];
}

export type AnyQuizQuestion = 
    | MultipleChoiceQuestion 
    | MultiSelectQuestion 
    | MatchingQuestion 
    | SortingQuestion 
    | OpenAnswerQuestion;

export interface QuizData {
    quizTitle: string;
    questions: AnyQuizQuestion[];
    detectedLanguage?: string;
} 