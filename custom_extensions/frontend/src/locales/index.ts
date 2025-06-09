import { en } from './en';
import { ru } from './ru';
import { uk } from './uk';
import { es } from './es';

export const locales = {
  en,
  ru,
  uk,
  es
};

export type LocaleType = keyof typeof locales; 