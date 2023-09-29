import React from 'react';
import FinalSum from '../components/CostCalc/FinalSum';
import UniversalInput from '../components/SharedComponents/UniversalInput';
import InsuranceCheckbox from '../components/CostCalc/InsuranceCheckbox';
import RoomType from '../components/CostCalc/RoomType';
import NavigationButton from '../components/SharedComponents/NavigationButton';
import useWindowWidth from '../hooks/windowWidthHook';
import useFormNavigation from '../hooks/formNavigationHook';

const CostCalc = ({ f }) => {
  const { page, buttonText } = useFormNavigation();
  const { windowWidth } = useWindowWidth();
  const {
    values, errors, touched, handleChange, handleBlur,
  } = f;
  const { finalSum } = f.values;

  return (
    <div className="form-container">
      <div className="form-inputs">
        <UniversalInput
          type="number"
          label="Количество взрослых"
          attributeName="adultsAmount"
          errors={errors.adultsAmount}
          touched={touched.adultsAmount}
          value={values.adultsAmount}
          handleChange={handleChange}
          handleBlur={handleBlur}
        />
        <UniversalInput
          type="number"
          label="Количество детей от 5 до 12 лет"
          attributeName="children5To12"
          errors={errors.children5To12}
          touched={touched.children5To12}
          value={values.children5To12}
          handleChange={handleChange}
          handleBlur={handleBlur}
        />
        <UniversalInput
          type="number"
          label="Количество детей до 5 лет"
          attributeName="childrenBelow5"
          errors={errors.childrenBelow5}
          touched={touched.childrenBelow5}
          value={values.childrenBelow5}
          handleChange={handleChange}
          handleBlur={handleBlur}
        />
        <RoomType
          mode={windowWidth < 641 ? 'mobile' : 'desktop'}
          value={values.roomType}
          handleChange={handleChange}
          handleBlur={handleBlur}
        />
        <UniversalInput
          type="number"
          label="Количество ночей"
          attributeName="nightsAmount"
          errors={errors.nightsAmount}
          touched={touched.nightsAmount}
          value={values.nightsAmount}
          handleChange={handleChange}
          handleBlur={handleBlur}
        />
        <InsuranceCheckbox
          value={values.insurance}
          handleChange={handleChange}
        />
        {windowWidth > 640 && <FinalSum sum={finalSum} />}
      </div>
      <div className="form-navigation-buttons">
        {windowWidth < 641 && <FinalSum sum={finalSum} />}
        <NavigationButton
          direction="next"
          page={page}
          buttonText={buttonText}
        />
      </div>
    </div>
  );
};

export default CostCalc;
