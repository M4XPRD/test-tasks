import {
  fireEvent,
  render,
  screen,
  waitFor,
} from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../../slices/index';
import ExchangeResult from '../ExchangeResult';
import MainPage from '../pages/MainPage';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (key) => key }),
}));

describe('ExchangeResult component', () => {
  it('ExchangeResult snapshot', () => {
    const element = render(
      <Provider store={store}>
        <ExchangeResult />
      </Provider>,
    );

    expect(element).toMatchSnapshot();
  });

  it('Should show the currency exchange results', async () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <MainPage />
        </BrowserRouter>
      </Provider>,
    );
    await waitFor(() => {
      const input = screen.queryByTestId('input-amount').querySelector('input');
      fireEvent.change(input, { target: { value: '1' } });
    });
    await waitFor(() => {
      const dispatchSpy = jest.spyOn(store, 'dispatch');
      const exchangeResult = screen.queryByTestId('exchange-result');
      if (exchangeResult) {
        expect(dispatchSpy).toHaveBeenCalledWith(setExchangeCurrency(expect.any(String)));
        const result = parseFloat(exchangeResult.textContent);
        expect(result).not.toBe(0);
      }
    });
  });
});
