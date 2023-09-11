import React from 'react';
import Page from './components/Page';
import TodoProvider from './contexts/TodoProvider';

const App = () => (
  <TodoProvider>
    <Page />
  </TodoProvider>
);

export default App;
