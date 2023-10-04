import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import CostCalc from './CostCalc';
import BuyersDetails from './BuyersDetails';
import Confirmation from './Confirmation';
import PaymentSuccess from './PaymentSuccess';
import useErrors from '../hooks/errorsHook';
import validationSchema from '../utils/validation/validationSchema';
import countPrice from '../utils/price/countPrice';
import shouldDisableButton from '../utils/validation/shouldDisableButton';
import useFormNavigation from '../hooks/formNavigationHook';

const MainForm = () => {
  const {
    page, pageTitle, handleNextPage, setLoading,
  } = useFormNavigation();
  const { setNetworkError, setValidationError } = useErrors();

  const f = useFormik({
    initialValues: {
      adultsAmount: '',
      children5To12: '',
      childrenBelow5: '',
      roomType: 'Эконом',
      nightsAmount: '',
      insurance: false,
      finalSum: 0,
      surname: '',
      name: '',
      middleName: '',
      phoneNumber: '',
      birthDate: '',
    },
    validationSchema,
    validateOnBlur: true,
    validateOnChange: false,
    onSubmit: async () => {
      setNetworkError(false);
      try {
        setLoading(true);
        const url = 'https://httpbin.org/post';
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(f.values),
        });
        const data = await response.json();
        console.log(data);
        setTimeout(() => {
          handleNextPage();
          f.resetForm();
          setLoading(false);
        }, 3000);
      } catch (e) {
        setNetworkError(true);
        setLoading(false);
      }
    },
  });

  const {
    values, errors, setFieldValue,
  } = f;

  const {
    adultsAmount, children5To12, roomType, nightsAmount, insurance,
  } = f.values;

  useEffect(() => {
    const countedPrice = countPrice(values);
    setFieldValue('finalSum', countedPrice);
    setValidationError(page, shouldDisableButton(errors, values, page));
  }, [
    adultsAmount,
    children5To12,
    roomType,
    nightsAmount,
    insurance,
    values,
    errors,
    setFieldValue,
    setValidationError,
    page,
  ]);

  const inputsMapping = {
    0: <CostCalc f={f} />,
    1: <BuyersDetails f={f} />,
    2: <Confirmation f={f} />,
    3: <PaymentSuccess />,
  };

  return (
    <div className="wrapper">
      <form className="form" onSubmit={f.handleSubmit}>
        {page !== 3 && (
          <header className="form-header">
            <h1>Бронирование номера</h1>
            <h2>{pageTitle[page]}</h2>
          </header>
        )}
        {inputsMapping[page]}
      </form>
    </div>
  );
};

export default MainForm;
