// // src/i18n.ts
// import i18n, { init } from 'i18next';
// import { initReactI18next } from 'react-i18next';
// import LanguageDetector from 'i18next-browser-languagedetector';
// import HttpApi from 'i18next-http-backend';

// i18n
//   .use(HttpApi)
//   .use(LanguageDetector)
//   .use(initReactI18next)
//   init({
//   lng: 'en',
//   fallbackLng: 'en',
//   backend: {
//     loadPath: '/locales/{{lng}}/translation.json',
//   }
// });
// // npm install i18next-http-backend@2.2.0 i18next-browser-languagedetector@8.0.4

// export default i18n;


"use client";

import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import config from '../app-config.json';

// Access locale from config and initialize locale resources
const resources: any = {}
// Object.keys(config.features.localization.locales).forEach(locale => {
//   resources[locale] = {
//     translations: require(`./locales/${locale}/translations.json`),
//   };
// });

// i18n
//   .use(initReactI18next) // Bind i18n to React
//   .use(LanguageDetector) // Auto-detect user language
//   .init({
//     fallbackLng: "en",
//     resources,
//     detection: {
//       order: ["localStorage", "navigator"],
//       lookupLocalStorage: "i18nextLng",
//       caches: ["localStorage"],
//     },
//     ns: ["translations"],
//     defaultNS: "translations",
//   })
//   .catch((err) => console.error("i18n init error:", err));
async function loadTranslations() {
  for (const locale of Object.keys(config.features.localization.locales)) {
    const translations = await import(`./locales/${locale}/translations.json`);
    resources[locale] = { translations: translations.default };
  }
}

loadTranslations().then(() => {
  i18n
    .use(initReactI18next) // Bind i18n to React
    .use(LanguageDetector) // Auto-detect user language
    .init({
      fallbackLng: "en",
      resources,
      detection: {
        order: ["localStorage", "navigator"],
        lookupLocalStorage: "i18nextLng",
        caches: ["localStorage"],
      },
      ns: ["translations"],
      defaultNS: "translations",
    })
    .catch((err) => console.error("i18n init error:", err));
});

export default i18n
