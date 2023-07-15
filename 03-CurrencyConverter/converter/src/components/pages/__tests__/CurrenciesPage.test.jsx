import * as router from 'react-router';
import * as reduxHooks from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import {
  act, render, screen, waitFor,
} from '@testing-library/react';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import CurrenciesPage from '../CurrenciesPage';
import store from '../../../slices/index';
import resources from '../../../locales/index';
import { getCountriesList } from '../../../slices/countriesSlice';

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
  // let response;
  // beforeEach(() => {
  //   response = [
  //     {
  //       name: {
  //         common: 'European Union',
  //       },
  //       flag: '🇪🇺',
  //       currencies: {
  //         EUR: {
  //           name: 'Euro', symbol: '€',
  //         },
  //       },
  //     },
  //     {
  //       name: {
  //         common: 'United States',
  //       },
  //       flag: '🇺🇸',
  //       currencies: {
  //         USD: {
  //           name: 'United States dollar', symbol: '$',
  //         },
  //       },
  //     },
  //   ];
  // });

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

  // it("Countries list fills when CurrenciesPage's rendered", async () => {
  //   axios.get.mockReturnValue(response);

  //   render(
  //     <Provider store={store}>
  //       <BrowserRouter>
  //         <CurrenciesPage />
  //       </BrowserRouter>
  //     </Provider>,
  //   );
  //   const { countriesList } = store.getState().countries;
  //   expect(countriesList.length).toBeGreaterThan(0);
  // });

  // it("Countries list fills when CurrenciesPage's rendered", async () => {
  //   render(
  //     <Provider store={store}>
  //       <BrowserRouter>
  //         <CurrenciesPage />
  //       </BrowserRouter>
  //     </Provider>,
  //   );

  //   await act(async () => {
  //     store.dispatch(getCountriesList());
  //   });

  //   const { countriesList } = store.getState().countries;

  //   await waitFor(() => {
  //     expect(countriesList.length).toBeGreaterThan(0);
  //   });
  // });
});
