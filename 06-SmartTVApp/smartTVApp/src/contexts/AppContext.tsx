import { createContext } from 'react';

interface AppContextTypes {
  page: number;
  nextPage: () => void;
  closeApp: () => void;
}

const defaultValue: AppContextTypes = {
  page: 0,
  nextPage: () => {},
  closeApp: () => {},
};

const AppContext = createContext<AppContextTypes>(defaultValue);

export default AppContext;
