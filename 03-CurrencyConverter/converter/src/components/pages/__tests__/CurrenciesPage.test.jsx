import * as router from 'react-router';
import * as reduxHooks from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import {
  act, render, screen,
} from '@testing-library/react';
import { useTranslation } from 'react-i18next';
import CurrenciesPage from '../CurrenciesPage';
import store from '../../../slices/index';
import resources from '../../../locales/index';

jest.mock('axios', () => ({
  get: jest.fn(() => Promise.resolve({ data: {} })),
}));

jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (key) => key }),
}));

// jest.mock('react-redux');

jest.spyOn(router, 'useNavigate').mockImplementation(() => () => {});

const i18nConfig = {
  i18n: {
    defaultNS: 'translation',
    resources,
  },
};

// const mockedSelector = jest.spyOn(reduxHooks, 'useSelector');
// const mockedDispatch = jest.spyOn(reduxHooks, 'useDispatch');

describe('CurrenciesPage component', () => {
  it('CurrenciesPage snapshot', async () => {
    await act(async () => {
      const page = render(
        <Provider store={store}>
          <BrowserRouter>
            <CurrenciesPage />
          </BrowserRouter>
        </Provider>,
      );

      expect(page).toMatchSnapshot();
    });
  });
  it('CurrenciesPage renders', () => {
    // const dispatch = jest.fn();
    // mockedDispatch.mockResolvedValue(dispatch);
    // mockedSelector.mockReturnValue();
    const currenciesPageH1 = 'pages.currenciesPage.main';
    render(
      <Provider store={store}>
        <BrowserRouter>
          <CurrenciesPage />
        </BrowserRouter>
      </Provider>,
      i18nConfig,
    );
    const { t } = useTranslation();
    const header = screen.getByText(t(currenciesPageH1));
    expect(header).toBeInTheDocument();
  });
});
