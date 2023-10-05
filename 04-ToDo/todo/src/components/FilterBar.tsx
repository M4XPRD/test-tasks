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

  return (
    <div className={`page__filter filter ${dropdownActive && type !== 'main' ? 'filter_hide' : ''}`} data-testid="filterBar">
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
        onClick={() => handleTodosFilter?.('active')}
        className={`filter__button ${activeFilter === 'active' ? 'filter__button_active' : ''}`}
        type="button"
      >
        Active
      </button>
      <button
        onClick={() => handleTodosFilter?.('completed')}
        className={`filter__button ${activeFilter === 'completed' ? 'filter__button_active' : ''}`}
        type="button"
      >
        Completed
      </button>
      <button
        onClick={() => handleTodosFilter?.('clear')}
        className={`filter__button ${activeFilter === 'clear' ? 'filter__button_active' : ''}`}
        type="button"
      >
        Clear completed
      </button>
    </div>
  );
};

export default FilterBar;
