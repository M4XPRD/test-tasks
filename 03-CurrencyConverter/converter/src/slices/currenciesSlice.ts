import { createSlice } from '@reduxjs/toolkit';

const APIkey = process.env.API_KEY;
const baseCurrency = 'USD';

interface CurrenciesState {
  exchangeRateURL: string;
  exchangeFrom: string;
  exchangeTo: string;
  currencyAmount: number;
}

interface ExchangePayload {
  newValue: string;
  label: string;
}

interface SetExchangeAction {
  type: string;
  payload: ExchangePayload;
}

const currenciesSlice = createSlice({
  name: 'currencies',
  initialState: {
    exchangeRateURL: `https://api.freecurrencyapi.com/v1/latest?base_currency=${baseCurrency}&apikey=${APIkey}`,
    exchangeFrom: 'USD — United States',
    exchangeTo: 'RUB — Russia',
    currencyAmount: 0,
  } as CurrenciesState,
  reducers: {
    setExchange: (state, action) => {
      const { newValue, label } = action.payload;
      if (label === 'У меня есть') {
        state.exchangeFrom = newValue;
      } else if (label === 'Меняю на') {
        state.exchangeTo = newValue;
      }
    },
    setCurrencyAmount: (state, action) => {
      state.currencyAmount = action.payload;
    },
    switchCurrencies: (state) => {
      const temp = state.exchangeFrom;
      state.exchangeFrom = state.exchangeTo;
      state.exchangeTo = temp;
    },
  },
});

export const {
  setExchange,
  switchCurrencies,
} = currenciesSlice.actions;

export type SetExchangeType = (payload: ExchangePayload) => SetExchangeAction;

export default currenciesSlice.reducer;
