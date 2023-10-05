import { render, screen } from '@testing-library/react';
import FilterBar from './FilterBar';

// test('Page components renders', () => {
//   render(<Page />);
//   const findElement = screen.getByText(/todos/i);
//   expect(findElement).toBeInTheDocument();
// });

test('FilterBar snapshot test', () => {
  const element = render(<FilterBar />);
  expect(element).toMatchSnapshot();
});
