import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import resources from './locales/index';

const defaultLanguage = () => {
  const storedLanguage = localStorage.getItem('currentLanguage');
  return storedLanguage ? JSON.parse(storedLanguage) : 'ru';
};

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'ru',
    lng: defaultLanguage(),
    debug: false,
    resources,
  });

export default i18next;
