import {
  ReactNode, useCallback, useMemo, useState,
} from 'react';
import AppContext from './AppContext';

interface AppProviderProps {
  children: ReactNode;
}

const AppProvider = ({ children }: AppProviderProps) => {
  const [step, setStep] = useState(3);

  const nextStep = useCallback(() => {
    setStep((previousStep) => previousStep + 1);
  }, []);

  const closeApp = useCallback(() => {
    setStep(1);
  }, []);

  const providedData = useMemo(() => ({
    step,
    nextStep,
    closeApp,
  }), [step, nextStep, closeApp]);

  return (
    <AppContext.Provider value={providedData}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
