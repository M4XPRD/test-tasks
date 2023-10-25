import {
  ReactNode, useCallback, useMemo, useState,
} from 'react';
import AppContext from './AppContext';

interface AppProviderProps {
  children: ReactNode;
}

const AppProvider = ({ children }: AppProviderProps) => {
  const [page, setPage] = useState(2);

  const nextPage = useCallback(() => {
    setPage((previousPage) => previousPage + 1);
  }, []);

  const closeApp = useCallback(() => {
    setPage(1);
  }, []);

  const providedData = useMemo(() => ({
    page,
    nextPage,
    closeApp,
  }), [page, nextPage, closeApp]);

  return (
    <AppContext.Provider value={providedData}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
