import React from 'react';
import useErrors from '../../hooks/errorsHook';
import { pluralizeNights, pluralizeVisitors } from '../../utils/pluralization/pluralizeData';

const ConfirmationData = (props) => {
  const { values } = props;
  const {
    surname,
    name,
    middleName,
    phoneNumber,
    finalSum,
  } = values;

  const { isNetworkError } = useErrors();

  return (
    <div className="form-confirmation-data">
      <p className="confirmation-name">{`${surname} ${name} ${middleName}`}</p>
      <p>{phoneNumber}</p>
      <p>{pluralizeNights(values)}</p>
      <p>{pluralizeVisitors(values)}</p>
      <p className="confirmation-sum">
        К оплате
        <span className="confirmation-sum-number">{` ${finalSum} ₽`}</span>
        <br />
        <span
          className={`hidden-error-text confirmation-error ${
            isNetworkError ? 'visible-error-text' : ''
          }`}
        >
          Произошла ошибка, попробуйте оплатить ещё раз
        </span>
      </p>
    </div>
  );
};

export default ConfirmationData;
