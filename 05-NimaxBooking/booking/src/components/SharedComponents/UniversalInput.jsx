import React from 'react';

const UniversalInput = (props) => {
  const {
    type,
    label,
    attributeName,
    errors,
    touched,
    value,
    handleChange,
    handleBlur,
  } = props;

  return (
    <div className="form-control">
      <label htmlFor={attributeName}>
        {label}
        <input
          className={
            errors && touched && 'input-error'
        }
          type={type}
          id={attributeName}
          name={attributeName}
          min="0"
          value={value}
          onBlur={handleBlur}
          onChange={type === 'tel' ? (e) => {
            const inputValue = e.target.value;
            const numericInputValue = inputValue
              .replace(/[^0-9+\s-]/g, '')
              .replace(/[^+\d]/g, '').replace(/(\d{2})(?=\d{2}$)/, '$1-');
            handleChange({
              target: {
                name: 'phoneNumber',
                value: numericInputValue,
              },
            });
          } : handleChange}
          pattern={type === 'tel' ? '\\+7\\s\\d{3}\\s\\d{3}\\s\\d{2}-\\d{2}' : undefined}
          inputMode={type === 'tel' ? 'numeric' : undefined}
          placeholder={type === 'tel' ? '+ 7 999 123 45-67' : undefined}
          max={type === 'date' ? '9999-12-31' : undefined}
        />
        {type === 'number' && <div className="input-number-arrows" />}
      </label>
      <span
        className={`hidden-error-text ${
          errors && touched
            ? 'visible-error-text'
            : ''
        }`}
      >
        {errors}
      </span>
    </div>
  );
};

export default UniversalInput;
