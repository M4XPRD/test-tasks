import React from 'react';

const InsuranceCheckbox = (props) => {
  const { value, handleChange } = props;
  return (
    <div className="form-insurance">
      <span>Страховка</span>
      <div
        className={`insurance ${
          value ? 'insurance-checked' : ''
        }`}
      >
        <label htmlFor="insurance">
          <input
            type="checkbox"
            id="insurance"
            checked={value}
            onChange={handleChange}
          />
          <div className={`insurance-circle ${
            value ? 'insurance-circle-checked' : ''
          }`}
          />
        </label>
      </div>
    </div>
  );
};

export default InsuranceCheckbox;
