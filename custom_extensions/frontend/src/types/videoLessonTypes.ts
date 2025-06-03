// custom_extensions/frontend/src/types/videoLessonTypes.ts

export interface VideoLessonSlideData {
  slideId: string; // Unique ID, e.g., "slide_1_introduction"
  slideNumber: number;
  slideTitle: string;
  displayedText: string; // Constraint: one short sentence
  displayedPictureDescription: string; // Constraint: concise textual description
  displayedVideoDescription: string; // Constraint: concise textual description
  voiceoverText: string; // Constraint: not more than 3 sentences
}

export interface VideoLessonData {
  mainPresentationTitle: string;
  slides: VideoLessonSlideData[];
  currentSlideId?: string; // Optional: To store/restore the active slide
  detectedLanguage: string; // e.g., 'en', 'ru', 'uk'
}

