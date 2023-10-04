import React from 'react';
import success from '../assets/paymentSuccess.svg';
import NavigationButton from '../components/SharedComponents/NavigationButton';
import useFormNavigation from '../hooks/formNavigationHook';

const PaymentSuccess = () => {
  const { page, buttonText } = useFormNavigation();

  return (
    <div className="form-success-container">
      <div className="form-success">
        <div className="success">
          <img className="success-image" src={success} alt="Заказ оплачен" />
          <p className="success-text">Заказ успешно оплачен.</p>
        </div>
        <div className="form-navigation-buttons">
          <NavigationButton
            direction="next"
            page={page}
            buttonText={buttonText}
          />
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
