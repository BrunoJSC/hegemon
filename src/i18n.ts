import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import translationPT from "./locales/pt/translation.json";
import translationEN from "./locales/en/translation.json";
import translationZH from "./locales/zh/translation.json";

const resources = {
  pt: {
    translation: translationPT,
  },
  en: {
    translation: translationEN,
  },
  zh: {
    translation: translationZH,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "pt",
    debug: false,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
