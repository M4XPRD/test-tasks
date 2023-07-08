import { MemoryRouter } from 'react-router-dom';
import CurrenciesPage from '../CurrenciesPage';

describe('CurrenciesPage component', () => {
  it('CurrenciesPage renders', () => {
    render(
      <MemoryRouter>
        <CurrenciesPage />
      </MemoryRouter>,
    );
  });
});
