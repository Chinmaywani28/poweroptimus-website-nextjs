// src/i18n.ts
import i18n, { init } from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

i18n
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  init({
  lng: 'en',
  fallbackLng: 'en',
  backend: {
    loadPath: '/locales/{{lng}}/translation.json',
  }
});
// npm install i18next-http-backend@2.2.0 i18next-browser-languagedetector@8.0.4

export default i18n;
