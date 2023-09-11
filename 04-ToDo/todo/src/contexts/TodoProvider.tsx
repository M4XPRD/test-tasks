import {
  useState, useMemo, ReactNode, ChangeEvent, FormEvent,
} from 'react';
import _ from 'lodash';
import TodoContext from './TodoContext';

interface TodoProviderProps {
  children: ReactNode;
}

const TodoProvider = ({ children }: TodoProviderProps) => {
  const [todos, setTodos] = useState<Array<{ text: string; completed: boolean; id: number }>>([]);
  const [inputValue, setInputValue] = useState<string>('');
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [dropdownActive, setDropdownActive] = useState<boolean>(false);

  const handleDropdown = () => {
    setDropdownActive(!dropdownActive);
  };

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

  const providedData = useMemo(() => ({
    todos,
    setTodos,
    inputValue,
    setInputValue,
    activeFilter,
    setActiveFilter,
    dropdownActive,
    setDropdownActive,
    handleTodosFilter,
    handleDropdown,
    handleInputChange,
    handleFormSubmit,
    handleTodoClick,
    handleDeleteClick,
    renderTodos,
  }), [
    todos,
    setTodos,
    inputValue,
    setInputValue,
    activeFilter,
    setActiveFilter,
    dropdownActive,
    setDropdownActive,
    handleTodosFilter,
    handleDropdown,
    handleInputChange,
    handleFormSubmit,
    handleTodoClick,
    handleDeleteClick,
    renderTodos,
  ]);

  return (
    <TodoContext.Provider value={providedData}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
