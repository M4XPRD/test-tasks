import { createSlice } from '@reduxjs/toolkit';

const APIkey = process.env.API_KEY;
const baseCurrency = 'USD';

const currenciesSlice = createSlice({
  name: 'currencies',
  initialState: {
    baseCurrency: 'USD',
    currenciesForText: ['Рубли', 'Евро', 'Доллары', 'Йены', 'Юани'],
    currenciesURL: `https://api.freecurrencyapi.com/v1/latest?base_currency=${baseCurrency}&apikey=${APIkey}`,
    type: null,
  },
  reducers: {
    onShow: (state) => {
      state.type = null;
    },
    onHide: (state) => {
      state.type = null;
    },
  },
});

export const {
  onShow,
  onHide,
} = currenciesSlice.actions;

export default currenciesSlice.reducer;
