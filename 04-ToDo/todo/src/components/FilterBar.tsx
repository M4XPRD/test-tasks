/* eslint-disable max-len */
import React from 'react';
import useTodo from '../hooks/todoHook';

const FilterBar = (props: { type: string }) => {
  const { type } = props;

  const todo = useTodo();
  const {
    dropdownActive,
    renderTodos,
    activeFilter,
    handleTodosFilter,
  } = todo;

  /*
    return (
    <div className={`page__filter filter ${dropdownActive && type !== 'main' ? 'filter_hide' : ''}`}>
      <span className="filter__counter">
        {renderTodos?.()}
        {' '}
        items left
      </span>
      <button
        onClick={() => handleTodosFilter?.('all')}
        className={`filter__button ${activeFilter === 'all' ? 'filter__button_active' : ''}`}
        type="button"
      >
        All
      </button>
      <button
        onClick={() => handleTodosFilter?.('all')}
        className={`filter__button ${activeFilter === 'all' ? 'filter__button_active' : ''}`}
        type="button"
      >
        Active
      </button>
      <button
        onClick={() => handleTodosFilter?.('all')}
        className={`filter__button ${activeFilter === 'all' ? 'filter__button_active' : ''}`}
        type="button"
      >
        Completed
      </button>
      <button
        onClick={() => handleTodosFilter?.('all')}
        className={`filter__button ${activeFilter === 'all' ? 'filter__button_active' : ''}`}
        type="button"
      >
        Clear completed
      </button>
    </div>
  );
  */

  return (
    <div className={`page__footer__container ${dropdownActive && type !== 'main' ? 'hide' : ''}`}>
      <span className="page__form__footer">
        {renderTodos?.()}
        {' '}
        items left
      </span>
      <button
        onClick={() => handleTodosFilter?.('all')}
        className={`page__form__button page__form__footer ${activeFilter === 'all' ? 'page__form__footer__active' : ''}`}
        type="button"
      >
        All
      </button>
      <button
        onClick={() => handleTodosFilter?.('active')}
        className={`page__form__button page__form__footer ${activeFilter === 'active' ? 'page__form__footer__active' : ''}`}
        type="button"
      >
        Active
      </button>
      <button
        onClick={() => handleTodosFilter?.('completed')}
        className={`page__form__button page__form__footer ${activeFilter === 'completed' ? 'page__form__footer__active' : ''}`}
        type="button"
      >
        Completed
      </button>
      <button
        onClick={() => handleTodosFilter?.('clear')}
        className={`page__form__button page__form__footer ${activeFilter === 'clear' ? 'page__form__footer__active' : ''}`}
        type="button"
      >
        Clear completed
      </button>
    </div>
  );
};

export default FilterBar;
