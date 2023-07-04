import '../navigator.d';
import { createSlice } from '@reduxjs/toolkit';

interface CurrenciesState {
  baseCurrency: string;
  baseCurrencyShort: string;
  exchangeRateURL: string;
  exchangeFrom: string;
  exchangeTo: string;
  currencyAmount: number | string;
  exchangeFromShort: string;
  exchangeToShort: string;
  exchangeAmount: number;
  rates: {
    [key: string]: number;
  },
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

const currenciesSlice = createSlice({
  name: 'currencies',
  initialState: {
    baseCurrency: 'USD — United States',
    baseCurrencyShort: 'USD',
    exchangeRateURL: 'https://api.freecurrencyapi.com/v1/latest',
    exchangeFrom: 'USD — United States',
    exchangeFromShort: 'USD',
    exchangeTo: 'RUB — Russia',
    exchangeToShort: 'RUB',
    currencyAmount: '',
    exchangeAmount: 0,
    rates: {},
    axiosError: false,
  } as CurrenciesState,
  reducers: {
    setExchange: (state, action) => {
      const { newValue, exchangeOption } = action.payload;
      const [firstValue, secondValue] = newValue.split(' ');
      const os = navigator.userAgentData.platform;
      if (exchangeOption === 'from') {
        state.exchangeFrom = newValue;
        state.exchangeFromShort = os === 'Windows' ? firstValue : secondValue;
      } else if (exchangeOption === 'to') {
        state.exchangeTo = newValue;
        state.exchangeToShort = os === 'Windows' ? firstValue : secondValue;
      }
    },
    setCurrencyAmount: (state, action) => {
      state.currencyAmount = action.payload;
    },
    setExchangeCurrency: (state, action) => {
      state.exchangeAmount = action.payload;
    },
    setBaseCurrency: (state, action) => {
      const { newValue } = action.payload;
      const [firstValue] = newValue.split(' ');
      state.baseCurrency = newValue;
      state.baseCurrencyShort = firstValue;
    },
    switchCurrencies: (state) => {
      const firstTemp = state.exchangeFrom;
      state.exchangeFrom = state.exchangeTo;
      state.exchangeTo = firstTemp;

      const secondTemp = state.exchangeFromShort;
      state.exchangeFromShort = state.exchangeToShort;
      state.exchangeToShort = secondTemp;
    },
    setRates: (state, action) => {
      const { payload } = action.payload;
      state.rates = payload;
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
