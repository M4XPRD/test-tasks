import React, { useEffect, useRef } from 'react';
import arrow from '../assets/down-arrow.png';
import addTask from '../assets/add-task.svg';
import useTodo from '../hooks/todoHook';

const InputForm = () => {
  const todo = useTodo();
  const {
    dropdownActive,
    inputValue,
    handleFormSubmit,
    handleDropdown,
    handleInputChange,
  } = todo;

  const inputFocus = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputFocus.current) {
      inputFocus.current.focus();
    }
  }, [inputFocus]);

  return (
    <form onSubmit={handleFormSubmit} className="page__form__container">
      <div className="page__form__input__container">
        <button type="button" className="page__form__img__container" onClick={() => handleDropdown?.()}>
          <img
            className={`page__form__image page__form__arrow ${dropdownActive ? 'rotate' : ''}`}
            src={arrow}
            alt="1"
          />
        </button>
        <input
          className="page__form__input"
          onChange={handleInputChange}
          ref={inputFocus}
          placeholder="What needs to be done?"
          value={inputValue}
          type="text"
        />
        <button type="submit" className="page__form__img__container">
          <img
            className="page__form__image page__form__image__right"
            src={addTask}
            alt="Add task"
          />
        </button>
      </div>
    </form>
  );
};

export default InputForm;
