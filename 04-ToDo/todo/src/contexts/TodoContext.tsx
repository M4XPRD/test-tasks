import { createContext } from 'react';

interface TodoContextTypes {
  todos: Array<{ text: string; completed: boolean; id: number }>;
  setTodos: React.Dispatch<
  React.SetStateAction<Array<{ text: string; completed: boolean; id: number }>>
  >;
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  activeFilter: string;
  setActiveFilter: React.Dispatch<React.SetStateAction<string>>;
  dropdownActive: boolean;
  setDropdownActive: React.Dispatch<React.SetStateAction<boolean>>;
  handleTodosFilter: (type: string) => void;
  handleDropdown: () => void;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleFormSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleTodoClick: (index: number) => void;
  handleDeleteClick: (index: number) => void;
  renderTodos: () => number;
}

const TodoContext = createContext<Partial<TodoContextTypes>>({});

export default TodoContext;
