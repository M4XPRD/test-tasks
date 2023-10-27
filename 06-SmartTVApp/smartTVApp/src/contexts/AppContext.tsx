import { createContext } from 'react';

interface AppContextTypes {
  page: number;
  playbackTime: number;
  nextPage: () => void;
  closeApp: () => void;
  saveTime: (time: number) => void;
}

const defaultValue: AppContextTypes = {
  page: 0,
  playbackTime: 0,
  nextPage: () => {},
  closeApp: () => {},
  saveTime: () => {},
};

const AppContext = createContext<AppContextTypes>(defaultValue);

export default AppContext;
