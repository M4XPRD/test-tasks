import React, {
  useCallback,
  useMemo, useState,
} from 'react';
import ErrorsContext from './ErrorsContext';

const ErrorsProvider = ({ children }) => {
  const [isNetworkError, setIsNetworkError] = useState(false);
  const [isValidationError, setIsValidationError] = useState({ 0: false, 1: false });

  const setNetworkError = useCallback((error) => {
    setIsNetworkError(error);
  }, [setIsNetworkError]);

  const setValidationError = useCallback((page, isError) => {
    setIsValidationError((previousState) => ({
      ...previousState, [page]: isError,
    }));
  }, [setIsValidationError]);

  const providedData = useMemo(() => ({
    isNetworkError,
    setNetworkError,
    isValidationError,
    setValidationError,
  }), [
    isNetworkError,
    setNetworkError,
    isValidationError,
    setValidationError,
  ]);

  return (
    <ErrorsContext.Provider value={providedData}>
      {children}
    </ErrorsContext.Provider>
  );
};

export default ErrorsProvider;
