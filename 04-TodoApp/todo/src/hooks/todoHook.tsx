import { useContext } from 'react';

import TodoContext from '../contexts/TodoContext';

const useTodo = () => useContext(TodoContext);

export default useTodo;
