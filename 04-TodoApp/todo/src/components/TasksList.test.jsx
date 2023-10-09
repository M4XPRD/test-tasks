import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TasksList from './TasksList';
import InputForm from './InputForm';
import TodoProvider from '../contexts/TodoProvider';

describe('TasksList basic tests', () => {
  test('TasksList component renders', () => {
    render(<TasksList />);
    const findElement = screen.getByTestId('tasksList');
    expect(findElement).toBeInTheDocument();
  });

  test('TasksList snapshot test', () => {
    const element = render(<TasksList />);
    expect(element).toMatchSnapshot();
  });
});

describe('TasksList functionality', () => {
  test('Check if task can be marked as completed', () => {
    render(
      <TodoProvider>
        <InputForm />
        <TasksList />
      </TodoProvider>,
    );

    const inputField = screen.getByTestId('rowTextfield');
    act(() => {
      userEvent.type(inputField, 'A new task{enter}');
    });
    const getNewTask = screen.getByRole('list');
    const getChangeTaskStatusIcon = getNewTask.querySelector('.task__image_left-side');
    expect(getChangeTaskStatusIcon).toBeInTheDocument();

    act(() => {
      userEvent.click(getChangeTaskStatusIcon);
    });

    const getTaskStatus = getNewTask.querySelector('.task__description');
    expect(getTaskStatus).toHaveClass('task__description_completed');

    act(() => {
      userEvent.click(getChangeTaskStatusIcon);
    });

    expect(getTaskStatus).not.toHaveClass('task__description_completed');
  });

  test('Check if task can be removed', () => {
    render(
      <TodoProvider>
        <InputForm />
        <TasksList />
      </TodoProvider>,
    );

    const inputField = screen.getByTestId('rowTextfield');
    act(() => {
      userEvent.type(inputField, 'A new task{enter}');
    });
    const getNewTask = screen.getByRole('list').querySelector('.task');
    const getRemoveTaskIcon = getNewTask
      .querySelector('.task__image_right-side');
    expect(getRemoveTaskIcon).toBeInTheDocument();

    act(() => {
      userEvent.click(getRemoveTaskIcon);
    });

    expect(getNewTask).not.toBeInTheDocument();
  });
});
