import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import FilterBar from './FilterBar';
import TodoProvider from '../contexts/TodoProvider';
import InputForm from './InputForm';

describe('FilterBar basic tests', () => {
  test('FilterBar snapshot test', () => {
    const element = render(<FilterBar />);
    expect(element).toMatchSnapshot();
  });

  test('FilterBar component renders and tasks counter works', () => {
    render(
      <TodoProvider>
        <FilterBar type="main" />
      </TodoProvider>,
    );
    const findElement = screen.getByTestId('filterBar');
    const counterElement = findElement.querySelector('.filter__counter');
    expect(counterElement).toHaveTextContent('0 items left');
    expect(findElement).toBeInTheDocument();
  });
});

describe('FilterBar functionality', () => {
  test('Filter buttons work', () => {
    render(
      <TodoProvider>
        <FilterBar type="main" />
      </TodoProvider>,
    );

    const allButton = screen.getByText('All');
    const activeButton = screen.getByText('Active');
    const completedButton = screen.getByText('Completed');
    const clearButton = screen.getByText('Clear completed');

    act(() => {
      userEvent.click(activeButton);
    });

    expect(activeButton).toHaveClass('filter__button_active');

    act(() => {
      userEvent.click(completedButton);
    });

    expect(completedButton).toHaveClass('filter__button_active');

    act(() => {
      userEvent.click(allButton);
    });

    expect(allButton).toHaveClass('filter__button_active');

    act(() => {
      userEvent.click(clearButton);
    });

    expect(allButton).toHaveClass('filter__button_active');
  });

  test('FilterBar component renders and tasks counter works', () => {
    render(
      <TodoProvider>
        <InputForm />
        <FilterBar type="main" />
      </TodoProvider>,
    );

    const inputElement = screen.getByTestId('rowTextfield');
    const filterBarElement = screen.getByTestId('filterBar');
    const counterElement = filterBarElement.querySelector('.filter__counter');
    expect(filterBarElement).toBeInTheDocument();

    act(() => {
      userEvent.type(inputElement, 'Task 1{enter}');
    });
    expect(counterElement).toHaveTextContent('1 item left');

    act(() => {
      userEvent.type(inputElement, 'Task 2{enter}');
    });
    expect(counterElement).toHaveTextContent('2 items left');
  });
});
