import { render, screen } from '@testing-library/react';
import TasksList from './TasksList';

// test('Page components renders', () => {
//   render(<Page />);
//   const findElement = screen.getByText(/todos/i);
//   expect(findElement).toBeInTheDocument();
// });

test('TasksList snapshot test', () => {
  const element = render(<TasksList />);
  expect(element).toMatchSnapshot();
});
