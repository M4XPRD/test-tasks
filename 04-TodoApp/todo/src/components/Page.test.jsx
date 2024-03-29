import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import Page from './Page';
import TodoProvider from '../contexts/TodoProvider';

describe('Page basic tests', () => {
  test('Page components renders', () => {
    render(<Page />);
    const findElement = screen.getByText(/todos/i);
    expect(findElement).toBeInTheDocument();
  });

  test('Page snapshot test', () => {
    const element = render(<Page />);
    expect(element).toMatchSnapshot();
  });
});

describe('Page functionality', () => {
  test('Tasks are shown by default on Page', () => {
    render(<Page />);
    const tasks = screen.getByTestId('tasksList');
    expect(tasks).not.toHaveClass('page__form-ul_hide');
  });

  test('Tasks are hidden on Page when dropdown button is clicked', () => {
    render(
      <TodoProvider>
        <Page />
      </TodoProvider>,
    );
    const dropdownButton = screen.getByTestId('dropdownButton');
    act(() => {
      userEvent.click(dropdownButton);
    });
    const tasks = screen.getByTestId('tasksList');
    expect(tasks).toHaveClass('page__form-ul_hide');
  });
});
