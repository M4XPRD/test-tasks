import { createContext } from 'react';

interface AppContextTypes {
  page: number;
  playbackTime: number;
  idleTime: number;
  nextPage: () => void;
  closeApp: () => void;
  saveTime: (num: number) => void;
  resetIdleTime: () => void;
  increaseIdleTime: () => void;
}

const defaultValue: AppContextTypes = {
  page: 0,
  playbackTime: 0,
  idleTime: 0,
  nextPage: () => {},
  closeApp: () => {},
  saveTime: () => {},
  resetIdleTime: () => {},
  increaseIdleTime: () => {},
};

const AppContext = createContext<AppContextTypes>(defaultValue);

export default AppContext;
