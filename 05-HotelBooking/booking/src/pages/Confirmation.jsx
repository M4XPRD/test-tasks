import React from 'react';
import LoadingAnimation from '../components/Confirmation/LoadingAnimation';
import NavigationButton from '../components/SharedComponents/NavigationButton';
import ConfirmationData from '../components/Confirmation/ConfirmationData';
import useFormNavigation from '../hooks/formNavigationHook';

const Confirmation = ({ f }) => {
  const { page, buttonText, isLoading } = useFormNavigation();
  const { values } = f;

  return (
    <div className="form-container">
      {isLoading && <LoadingAnimation />}
      <div className="form-confirmation">
        {!isLoading && <ConfirmationData values={values} />}
        <div className="form-navigation-buttons">
          <NavigationButton
            direction="next"
            page={page}
            buttonText={buttonText}
            submitButton
          />
          <NavigationButton
            direction="previous"
            page={page}
            buttonText={buttonText}
          />
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
