import {
  useState, useMemo, useCallback, useEffect, ReactNode,
} from 'react';
import { useTranslation } from 'react-i18next';
import LangContext from './LanguageContext';

interface LangProviderProps {
  children: ReactNode;
}

const LangProvider = ({ children }: LangProviderProps) => {
  const { i18n } = useTranslation();
  const [activeLanguage, setActiveLanguage] = useState(i18n.language);

  const getLocalLanguage = useCallback(() => {
    const storedLanguage = localStorage.getItem('currentLanguage');
    return storedLanguage ? JSON.parse(storedLanguage) : null;
  }, []);

  const setCurrentLanguage = useCallback(() => {
    localStorage.setItem('currentLanguage', JSON.stringify(activeLanguage));
  }, [activeLanguage]);

  const setNewLanguage = useCallback(() => {
    const currentLanguage = i18n.language;
    const updatedLanguage = currentLanguage === 'ru' ? 'en' : 'ru';
    i18n.changeLanguage(updatedLanguage);
    setActiveLanguage(updatedLanguage);
    localStorage.setItem('currentLanguage', JSON.stringify(updatedLanguage));
  }, [i18n]);

  useEffect(() => {
    if (!getLocalLanguage()) {
      setCurrentLanguage();
    }
  }, [getLocalLanguage, setCurrentLanguage]);

  const providedData = useMemo(() => ({
    getLocalLanguage,
    activeLanguage,
    setNewLanguage,
  }), [getLocalLanguage, activeLanguage, setNewLanguage]);

  return (
    <LangContext.Provider value={providedData}>
      {children}
    </LangContext.Provider>
  );
};

export default LangProvider;
