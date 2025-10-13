/**
 * i18n Configuration
 * Internationalization setup with lazy-loaded translations for better performance
 */

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Lazy load translation resources
const loadTranslations = async (lang: string) => {
  if (lang === 'pt-BR') {
    return (await import('./locales/pt-BR/translation.json')).default;
  } else {
    return (await import('./locales/en/translation.json')).default;
  }
};

i18n
  .use(LanguageDetector) // Detect user language
  .use(initReactI18next) // Pass i18n to React
  .init({
    resources: {}, // Start with empty resources, load on demand
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
      useSuspense: true, // Enable suspense for async loading
    },
  });

// Load initial language
const detectedLang = i18n.language || 'pt-BR';
loadTranslations(detectedLang).then((translations) => {
  i18n.addResourceBundle(detectedLang, 'translation', translations);
});

// Load translations when language changes
i18n.on('languageChanged', async (lang) => {
  if (!i18n.hasResourceBundle(lang, 'translation')) {
    const translations = await loadTranslations(lang);
    i18n.addResourceBundle(lang, 'translation', translations);
  }
});

export default i18n;
