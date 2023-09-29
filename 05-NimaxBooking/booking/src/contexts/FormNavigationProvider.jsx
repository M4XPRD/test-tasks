import React, {
  useCallback, useMemo, useState,
} from 'react';
import FormContext from './FormNavigationContext';

const FormProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(0);

  const pageTitle = useMemo(() => ({
    0: 'Расчёт стоимости',
    1: 'Данные покупателя',
    2: 'Подтверждение заказа',
    4: 'Заказ успешно оплачен',
  }), []);

  const buttonText = useMemo(() => ({
    next: {
      0: 'Далее',
      1: 'Далее',
      2: 'Оплатить',
      3: 'Забронировать ещё',
    },
    previous: {
      1: 'Назад к расчёту стоимости',
      2: 'Назад к данным покупателя',
    },
  }), []);

  const setLoading = useCallback((loading) => {
    setIsLoading(loading);
  }, [setIsLoading]);

  const handleNextPage = useCallback(() => {
    setPage((currentPage) => (currentPage === 3 ? 0 : currentPage + 1));
  }, [setPage]);

  const handlePreviousPage = useCallback(() => {
    setPage((currentPage) => currentPage - 1);
  }, [setPage]);

  const providedData = useMemo(() => ({
    page,
    pageTitle,
    isLoading,
    setLoading,
    buttonText,
    handleNextPage,
    handlePreviousPage,
  }), [
    page,
    pageTitle,
    isLoading,
    setLoading,
    buttonText,
    handleNextPage,
    handlePreviousPage,
  ]);

  return (
    <FormContext.Provider value={providedData}>
      {children}
    </FormContext.Provider>
  );
};

export default FormProvider;
