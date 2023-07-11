import { MemoryRouter } from 'react-router-dom';
import {
  act, render, screen, fireEvent,
} from '@testing-library/react';
import { Provider } from 'react-redux';
import { createMemoryHistory } from 'history';
import { useTranslation } from 'react-i18next';
import CurrenciesPage from '../CurrenciesPage';
import store from '../../../slices/index';
import resources from '../../../locales/index';
import { setRatesError } from '../../../slices/currenciesSlice';
import routes from '../../../routes';

jest.mock('axios', () => ({
  get: jest.fn(() => Promise.resolve({ data: {} })),
}));

jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (key) => key }),
}));

const history = createMemoryHistory();

describe('CurrenciesPage component', () => {
  it('CurrenciesPage renders', () => {
    history.push(routes.currencies());
    act(() => {
      render(
        <Provider store={store}>
          <MemoryRouter>
            <CurrenciesPage />
          </MemoryRouter>
        </Provider>,
        {
          i18n: {
            defaultNS: 'translation',
            resources,
          },
        },
      );
    });
    store.dispatch(setRatesError(true));
    const currencyTable = document.querySelector('.currencies-choose-currency');
    expect(currencyTable).toBeInTheDocument();
    expect(history.location.pathname).toBe(routes.currencies());
  });
  act(() => {
    store.dispatch(setRatesError(true));
  });

  it('CurrenciesPage i18next texts', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <CurrenciesPage />
        </MemoryRouter>
      </Provider>,
      {
        i18n: {
          defaultNS: 'translation',
          resources,
        },
      },
    );
    const { t } = useTranslation();
    const h1Text = t('pages.currenciesPage.main');
    const returnToMainText = t('pages.currenciesPage.toMainPage');
    expect(screen.getByText(h1Text)).toBeInTheDocument();
    expect(screen.getByText(returnToMainText)).toBeInTheDocument();
  });

  it('CurrenciesPage return button works', () => {
    render(
      <Provider store={store}>
        <MemoryRouter history={history}>
          <CurrenciesPage />
        </MemoryRouter>
      </Provider>,
      {
        i18n: {
          defaultNS: 'translation',
          resources,
        },
      },
    );
    const { t } = useTranslation();
    const returnButton = screen.getByText(t('pages.currenciesPage.toMainPage'));
    fireEvent.click(returnButton);
    expect(window.location.pathname).toBe(routes.main());
  });
});
