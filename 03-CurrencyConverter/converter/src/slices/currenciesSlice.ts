import { createSlice } from '@reduxjs/toolkit';

interface CurrenciesState {
  baseCurrency: {
    full: string,
    short: string,
  },
  exchange: {
    amount: number,
    rates: {
      URL: string,
      rates: {
        [key: string]: number;
      },
    },
    currency: {
      from: {
        full: string,
        short: string,
      },
      to: {
        full: string,
        short: string,
      },
    },
  },
  currencyAmount: number | string;
  axiosError: boolean;
}

interface ExchangePayload {
  newValue: string;
  exchangeOption?: string;
}

interface SetExchangeAction {
  type: string;
  payload: ExchangePayload;
}

const os = navigator.platform;

const currenciesSlice = createSlice({
  name: 'currencies',
  initialState: {
    baseCurrency: {
      full: os === 'Win32' ? 'USD — United States' : '🇺🇸 USD — United States',
      short: 'USD',
    },
    exchangeRateURL: 'https://api.freecurrencyapi.com/v1/latest',
    exchange: {
      amount: 0,
      rates: {
        URL: 'https://api.freecurrencyapi.com/v1/latest',
        rates: {},
      },
      currency: {
        from: {
          full: os === 'Win32' ? 'USD — United States' : '🇺🇸 USD — United States',
          short: 'USD',
        },
        to: {
          full: os === 'Win32' ? 'RUB — Russia' : '🇷🇺 RUB — Russia',
          short: 'RUB',
        },
      },
    },
    currencyAmount: 0,
    axiosError: false,
  } as CurrenciesState,
  reducers: {
    setExchange: (state, action) => {
      const { newValue, exchangeOption } = action.payload;
      const [firstValue, secondValue] = newValue.split(' ');
      if (exchangeOption === 'from') {
        state.exchange.currency.from.full = newValue;
        state.exchange.currency.from.short = os === 'Win32' ? firstValue : secondValue;
      } else if (exchangeOption === 'to') {
        state.exchange.currency.to.full = newValue;
        state.exchange.currency.to.short = os === 'Win32' ? firstValue : secondValue;
      }
    },
    setCurrencyAmount: (state, action) => {
      state.currencyAmount = action.payload;
    },
    setExchangeCurrency: (state, action) => {
      state.exchange.amount = action.payload;
    },
    setBaseCurrency: (state, action) => {
      const { newValue } = action.payload;
      const [firstValue, secondValue] = newValue.split(' ');
      state.baseCurrency.full = newValue;
      state.baseCurrency.short = os === 'Win32' ? firstValue : secondValue;
    },
    switchCurrencies: (state) => {
      const firstTemp = state.exchange.currency.from.full;
      state.exchange.currency.from.full = state.exchange.currency.to.full;
      state.exchange.currency.to.full = firstTemp;

      const secondTemp = state.exchange.currency.from.short;
      state.exchange.currency.from.short = state.exchange.currency.to.short;
      state.exchange.currency.to.short = secondTemp;
    },
    setRates: (state, action) => {
      const { payload } = action.payload;
      state.exchange.rates.rates = payload;
    },
    setRatesError: (state, action) => {
      state.axiosError = action.payload;
    },
  },
});

export const {
  setExchange,
  setCurrencyAmount,
  setExchangeCurrency,
  setBaseCurrency,
  switchCurrencies,
  setRates,
  setRatesError,
} = currenciesSlice.actions;

export type SetExchangeType = (payload: ExchangePayload) => SetExchangeAction;

export default currenciesSlice.reducer;
