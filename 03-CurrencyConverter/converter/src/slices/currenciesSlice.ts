import { createSlice } from '@reduxjs/toolkit';

const APIkey = process.env.API_KEY;
const baseCurrency = 'USD';

const currenciesSlice = createSlice({
  name: 'currencies',
  initialState: {
    currenciesURL: `https://api.freecurrencyapi.com/v1/latest?base_currency=${baseCurrency}&apikey=${APIkey}`,
    exchangeFrom: 'USD — United States',
    exchangeTo: 'RUB — Russia',
  },
  reducers: {
    setExchangeFrom: (state, action) => {
      state.exchangeFrom = action.payload;
    },
    setExchangeTo: (state, action) => {
      state.exchangeTo = action.payload;
    },
    switchCurrencies: (state) => {
      const temp = state.exchangeFrom;
      state.exchangeFrom = state.exchangeTo;
      state.exchangeTo = temp;
    },
  },
});

export const {
  setExchangeFrom,
  setExchangeTo,
  switchCurrencies,
} = currenciesSlice.actions;

export default currenciesSlice.reducer;
