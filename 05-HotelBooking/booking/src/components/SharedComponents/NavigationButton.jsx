import React from 'react';
import useForm from '../../hooks/formNavigationHook';
import useErrors from '../../hooks/errorsHook';

const NavigationButton = (props) => {
  const {
    direction, page, buttonText, submitButton,
  } = props;

  const { handleNextPage, handlePreviousPage } = useForm();
  const { isValidationError } = useErrors();

  const handleClick = () => {
    if (submitButton) {
      return;
    } if (direction === 'next') {
      handleNextPage();
    } else {
      handlePreviousPage();
    }
  };

  return (
    <div className={`form-${direction}-button`}>
      <button
        type={submitButton ? 'submit' : 'button'}
        className={`${direction}-button ${page === 3 && 'last-button'}`}
        disabled={direction === 'next' && isValidationError[page]}
        onClick={handleClick}
      >
        {buttonText[direction][page]}
      </button>
    </div>
  );
};

export default NavigationButton;
