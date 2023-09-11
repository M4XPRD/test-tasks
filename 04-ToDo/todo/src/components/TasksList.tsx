import React from 'react';
import activeTask from '../assets/active-task.png';
import finishedTask from '../assets/finished-task.png';
import removeTask from '../assets/remove-task.png';
import useTodo from '../hooks/todoHook';

const TasksList = () => {
  const todo = useTodo();
  const {
    dropdownActive,
    todos,
    handleTodoClick,
    handleDeleteClick,
  } = todo;

  return (
    <ul className={`page__form__ul ${dropdownActive ? 'hide' : ''}`}>
      {todos && todos.map(({ text, completed, id }, index) => (
        <li className="page__form__task" key={id}>
          <button
            type="submit"
            className="page__form__img__container"
            onClick={() => handleTodoClick?.(index)}
          >
            <img
              className="page__form__image page__form__image__left"
              src={completed ? finishedTask : activeTask}
              alt={completed ? 'Finished task' : 'Active task'}
            />
          </button>
          <span
            className={`page__form__task__text ${
              completed ? 'page__form__task__completed' : ''
            }`}
          >
            {text}
          </span>
          <button
            type="submit"
            className="page__form__img__container"
            onClick={() => handleDeleteClick?.(index)}
          >
            <img
              className="page__form__image page__form__image__right"
              src={removeTask}
              alt="Remove task"
            />
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TasksList;
