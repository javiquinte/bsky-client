import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Pseudo from 'i18next-pseudo';
import { en } from './lang/en';
import { nl } from './lang/nl';

export const defaultNS = 'app';

export const languages = {
  en,
  nl,
};

i18n
  .use(
    new Pseudo({
      enabled: process.env.NODE_ENV !== 'production',
      wrapped: true,
    }),
  )
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources: languages,
    fallbackLng: 'en',
    supportedLngs: Object.keys(languages),
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
    postProcess: ['pseudo'],
  });

export default i18n;
