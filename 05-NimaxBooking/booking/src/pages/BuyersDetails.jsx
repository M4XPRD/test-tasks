import React from 'react';
import NavigationButton from '../components/SharedComponents/NavigationButton';
import UniversalInput from '../components/SharedComponents/UniversalInput';
import useFormNavigation from '../hooks/formNavigationHook';

const BuyersDetails = ({ f }) => {
  const { page, buttonText } = useFormNavigation();
  const {
    values, errors, touched, handleChange, handleBlur,
  } = f;

  return (
    <div className="form-container">
      <div className="form-inputs">
        <UniversalInput
          type="text"
          label="Фамилия"
          attributeName="surname"
          errors={errors.surname}
          touched={touched.surname}
          value={values.surname}
          handleChange={handleChange}
          handleBlur={handleBlur}
        />
        <UniversalInput
          type="text"
          label="Имя"
          attributeName="name"
          errors={errors.name}
          touched={touched.name}
          value={values.name}
          handleChange={handleChange}
          handleBlur={handleBlur}
        />
        <UniversalInput
          type="text"
          label="Отчество"
          attributeName="middleName"
          errors={errors.middleName}
          touched={touched.middleName}
          value={values.middleName}
          handleChange={handleChange}
          handleBlur={handleBlur}
        />
        <UniversalInput
          type="tel"
          label="Номер телефона"
          attributeName="phoneNumber"
          errors={errors.phoneNumber}
          touched={touched.phoneNumber}
          value={values.phoneNumber}
          handleChange={handleChange}
          handleBlur={handleBlur}
        />
        <UniversalInput
          type="date"
          label="Дата рождения"
          attributeName="birthDate"
          errors={errors.birthDate}
          touched={touched.birthDate}
          value={values.birthDate}
          handleChange={handleChange}
          handleBlur={handleBlur}
        />
      </div>
      <div className="form-navigation-buttons">
        <NavigationButton
          direction="next"
          page={page}
          buttonText={buttonText}
        />
        <NavigationButton
          direction="previous"
          page={page}
          buttonText={buttonText}
        />
      </div>
    </div>
  );
};

export default BuyersDetails;
