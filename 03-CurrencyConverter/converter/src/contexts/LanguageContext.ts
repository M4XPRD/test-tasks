import { createContext } from 'react';

interface LangContextType {
  getLocalLanguage: () => string | null;
  activeLanguage: string;
  setNewLanguage: () => void;
}

const LangContext = createContext<LangContextType>({
  getLocalLanguage: () => null,
  activeLanguage: 'ru',
  setNewLanguage: () => {},
});

export default LangContext;
