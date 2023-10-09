import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import InputForm from './InputForm';
import TasksList from './TasksList';
import TodoProvider from '../contexts/TodoProvider';

describe('InputForm basic tests', () => {
  test('InputForm component renders', () => {
    render(<InputForm />);
    const findElement = screen.getByTestId('rowTextfield');
    expect(findElement).toBeInTheDocument();
  });

  test('InputForm snapshot test', () => {
    const element = render(<InputForm />);
    expect(element).toMatchSnapshot();
  });
});

describe('InputForm functionality', () => {
  test('Check if input works and new todos appear in tasks list', () => {
    render(
      <TodoProvider>
        <InputForm />
        <TasksList />
      </TodoProvider>,
    );

    const inputField = screen.getByTestId('rowTextfield');
    act(() => {
      userEvent.type(inputField, 'Test Task 1{enter}');
    });
    const findNewTask = screen.getByText('Test Task 1');
    expect(findNewTask).toBeInTheDocument();
  });
});
