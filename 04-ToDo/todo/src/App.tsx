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
  const [todos, setTodos] = useState<Array<{ text: string; completed: boolean; id: number }>>([]);
  const [inputValue, setInputValue] = useState<string>('');
  const [activeFilter, setActiveFilter] = useState<string>('all');

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

  const handleDeleteClick = (index: number) => {
    const updatedTodos = todos.filter((todo, todoIndex) => todoIndex !== index);
    setTodos(updatedTodos);
  };

  const handleTodosFilter = (type: string) => {
    switch (type) {
      case 'all':
        setActiveFilter('all');
        break;
      case 'active':
        setActiveFilter('active');
        break;
      case 'completed':
        setActiveFilter('completed');
        break;
      case 'clear': {
        setActiveFilter('clear');
        const unfinishedTodos = todos.filter(
          ({ completed }) => completed === false,
        );
        setTodos(unfinishedTodos);
      }
        setActiveFilter('all');
        break;
      default:
        break;
    }
  };

  const renderTodos = () => {
    switch (activeFilter) {
      case 'all':
        return todos.length;
      case 'active': {
        const activeTodos = todos.filter((todo) => !todo.completed);
        return activeTodos.length;
      }
      case 'completed': {
        const completedTodos = todos.filter((todo) => todo.completed);
        return completedTodos.length;
      }
      default:
        return 0;
    }
  };

  return (
    <div className="page">
      <h1 className="page__h1">todos</h1>
      <div className="page__form">
        <form onSubmit={handleFormSubmit} className="page__form__container">
          <div className="page__form__input__container">
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
            {renderTodos()}
            {' '}
            items left
          </span>
          <button
            onClick={() => handleTodosFilter('all')}
            className={`page__form__button page__form__footer ${activeFilter === 'all' ? 'page__form__footer__active' : ''}`}
            type="button"
          >
            All
          </button>
          <button
            onClick={() => handleTodosFilter('active')}
            className={`page__form__button page__form__footer ${activeFilter === 'active' ? 'page__form__footer__active' : ''}`}
            type="button"
          >
            Active
          </button>
          <button
            onClick={() => handleTodosFilter('completed')}
            className={`page__form__button page__form__footer ${activeFilter === 'completed' ? 'page__form__footer__active' : ''}`}
            type="button"
          >
            Completed
          </button>
          <button
            onClick={() => handleTodosFilter('clear')}
            className={`page__form__button page__form__footer ${activeFilter === 'clear' ? 'page__form__footer__active' : ''}`}
            type="button"
          >
            Clear completed
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
