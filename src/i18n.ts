import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from './translations/en.json';
import translationFR from './translations/fr.json';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: translationEN },
    fr: { translation: translationFR },
  },
  lng: localStorage.getItem('language') || 'fr',
  fallbackLng: 'fr',
  interpolation: { escapeValue: false },
});

export default i18n;
