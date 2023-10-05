import { render, screen } from '@testing-library/react';
import InputForm from './InputForm';

// test('Page components renders', () => {
//   render(<Page />);
//   const findElement = screen.getByText(/todos/i);
//   expect(findElement).toBeInTheDocument();
// });

test('InputForm snapshot test', () => {
  const element = render(<InputForm />);
  expect(element).toMatchSnapshot();
});
