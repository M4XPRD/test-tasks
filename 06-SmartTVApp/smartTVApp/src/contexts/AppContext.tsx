import { createContext } from 'react';

interface AppContextTypes {
  step: number;
  nextStep: () => void;
  closeApp: () => void;
}

const defaultValue: AppContextTypes = {
  step: 0,
  nextStep: () => {},
  closeApp: () => {},
};

const AppContext = createContext<AppContextTypes>(defaultValue);

export default AppContext;
