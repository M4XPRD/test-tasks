import { MemoryRouter } from 'react-router-dom';
import MainPage from '../MainPage';

describe('MainPage component', () => {
  it('MainPage renders', () => {
    render(
      <MemoryRouter>
        <MainPage />
      </MemoryRouter>,
    );
  });
});
