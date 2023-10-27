import {
  ReactNode, useCallback, useMemo, useState,
} from 'react';
import AppContext from './AppContext';

interface AppProviderProps {
  children: ReactNode;
}

const AppProvider = ({ children }: AppProviderProps) => {
  const [page, setPage] = useState(1);
  const [playbackTime, setPlaybackTime] = useState(0);

  const nextPage = useCallback(() => {
    setPage((previousPage) => previousPage + 1);
  }, []);

  const closeApp = useCallback(() => {
    setPage(1);
  }, []);

  const saveTime = useCallback((newPlaybackTime: number) => {
    setPlaybackTime(newPlaybackTime);
  }, []);

  const providedData = useMemo(() => ({
    page,
    nextPage,
    closeApp,
    playbackTime,
    saveTime,
  }), [page, nextPage, closeApp]);

  return (
    <AppContext.Provider value={providedData}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
