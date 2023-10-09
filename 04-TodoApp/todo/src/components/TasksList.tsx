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
    <ul className={`page__form-ul ${dropdownActive ? 'page__form-ul_hide' : ''}`} data-testid="tasksList">
      {todos && todos.map(({ text, completed, id }, index) => (
        <li className="page__form-ul__task task" key={id}>
          <button
            type="submit"
            className="task__image-container"
            onClick={() => handleTodoClick?.(index)}
          >
            <img
              className="task__image task__image_left-side"
              src={completed ? finishedTask : activeTask}
              alt={completed ? 'Finished task' : 'Active task'}
            />
          </button>
          <span
            className={`task__description ${
              completed ? 'task__description_completed' : ''
            }`}
          >
            {text}
          </span>
          <button
            type="submit"
            className="task__image-container"
            onClick={() => handleDeleteClick?.(index)}
          >
            <img
              className="task__image task__image_right-side"
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
