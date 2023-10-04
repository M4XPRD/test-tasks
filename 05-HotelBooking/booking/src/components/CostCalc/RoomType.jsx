import React from 'react';

const RoomType = (props) => {
  const {
    mode, value, handleChange, handleBlur,
  } = props;

  return (
    <div className={mode === 'mobile' ? 'form-control' : 'form-control-desktop'}>
      {mode === 'mobile' ? (
        <label htmlFor="roomType">
          Тип номера
          <select
            id="roomType"
            name="roomType"
            value={value}
            onChange={handleChange}
            onBlur={handleBlur}
          >
            <option value="Эконом">Эконом</option>
            <option value="Стандарт">Стандарт</option>
            <option value="Люкс">Люкс</option>
          </select>
        </label>
      ) : (
        <div className="roomtype-container">
          <div>Тип номера</div>
          <div className="radio-container">
            <label htmlFor="roomType">
              <input
                name="roomType"
                id="roomType"
                type="radio"
                value="Эконом"
                checked={value === 'Эконом'}
                onChange={handleChange}
              />
              Эконом
            </label>
            <label htmlFor="roomType">
              <input
                name="roomType"
                id="roomType"
                type="radio"
                value="Стандарт"
                checked={value === 'Стандарт'}
                onChange={handleChange}
              />
              Стандарт
            </label>
            <label htmlFor="roomType">
              <input
                name="roomType"
                id="roomType"
                type="radio"
                value="Люкс"
                checked={value === 'Люкс'}
                onChange={handleChange}
              />
              Люкс
            </label>
          </div>
        </div>
      )}
    </div>
  );
};

export default RoomType;
