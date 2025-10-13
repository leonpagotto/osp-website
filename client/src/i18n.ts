/**
 * i18n Configuration
 * Internationalization setup for Portuguese (BR) and English
 */

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Translation resources
import translationPT from './locales/pt-BR/translation.json';
import translationEN from './locales/en/translation.json';

const resources = {
  'pt-BR': {
    translation: translationPT,
  },
  en: {
    translation: translationEN,
  },
};

i18n
  .use(LanguageDetector) // Detect user language
  .use(initReactI18next) // Pass i18n to React
  .init({
    resources,
    fallbackLng: 'pt-BR', // Default language
    supportedLngs: ['pt-BR', 'en'],
    
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },

    interpolation: {
      escapeValue: false, // React already escapes
    },

    react: {
      useSuspense: false,
    },
  });

export default i18n;
