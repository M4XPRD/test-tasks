import React, {
  useEffect,
  useState,
  ChangeEvent,
  FormEvent,
  useRef,
} from 'react';
import _ from 'lodash';
import arrow from './assets/down-arrow.png';
import addTask from './assets/add-task.svg';
import activeTask from './assets/active-task.png';
import finishedTask from './assets/finished-task.png';
import removeTask from './assets/remove-task.png';

const App = () => {
  const [todos, setTodos] = useState<
  Array<{ text: string; completed: boolean; id: number }>
  >([]);
  const [inputValue, setInputValue] = useState<string>('');
  const inputFocus = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputFocus.current) {
      inputFocus.current.focus();
    }
  }, [inputFocus]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputValue.trim() !== '') {
      const newTodo = {
        text: inputValue.trim(),
        completed: false,
        id: Number(_.uniqueId()),
      };
      setTodos([...todos, newTodo]);
      setInputValue('');
    }
  };

  const handleTodoClick = (index: number) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  const handleDeleteClick = (id: number) => {};

  const handleClearCompleted = () => {
    const unfinishedTodos = todos.filter(
      ({ completed }) => completed === false,
    );
    setTodos(unfinishedTodos);
  };

  return (
    <div className="page">
      <h1 className="page__h1">todos</h1>
      <div className="page__form">
        <form onSubmit={handleFormSubmit} className="page__form__container">
          <div className="flex">
            <button type="button" className="page__form__img__container">
              <img
                className="page__form__image page__form__arrow"
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
        <ul className="page__form__ul">
          {todos.map(({ text, completed, id }, index) => (
            <li className="page__form__task" key={id}>
              <button
                type="submit"
                className="page__form__img__container"
                onClick={() => handleTodoClick(index)}
              >
                <img
                  className="page__form__image page__form__image__left"
                  src={completed ? finishedTask : activeTask}
                  alt={completed ? 'Finished task' : 'Active task'}
                />
              </button>
              <button
                type="button"
                className={`page__form__ul__li ${
                  completed ? 'page__form__task__completed' : ''
                }`}
              >
                {text}
              </button>
              <button
                type="submit"
                className="page__form__img__container"
                onClick={() => handleDeleteClick(index)}
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
        <div className="page__footer">
          <span className="page__form__footer">
            {todos.length || 0}
            {' '}
            items left
          </span>
          <button
            className="page__form__button page__form__footer"
            type="button"
          >
            All
          </button>
          <button
            className="page__form__button page__form__footer"
            type="button"
          >
            Active
          </button>
          <button
            className="page__form__button page__form__footer"
            type="button"
          >
            Completed
          </button>
          <button
            className="page__form__button page__form__footer"
            type="button"
            onClick={handleClearCompleted}
          >
            Clear completed
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
