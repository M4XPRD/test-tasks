import React from 'react';
import useTodo from '../hooks/todoHook';
import InputForm from './InputForm';
import TasksList from './TasksList';
import FilterBar from './FilterBar';

const Page = () => {
  const todo = useTodo();
  const { dropdownActive } = todo;

  return (
    <div className="page">
      <h1 className="page__h1">todos</h1>
      <main className="page__form">
        <InputForm />
        {dropdownActive && (<FilterBar type="main" />)}
        <TasksList />
      </main>
      <FilterBar type="footer" />
    </div>
  );
};

export default Page;
