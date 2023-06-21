import { configureStore } from '@reduxjs/toolkit';
import countriesReducer from './countriesSlice';
import currenciesReducer from './currenciesSlice';

const store = configureStore({
  reducer: {
    countries: countriesReducer,
    currencies: currenciesReducer,
  },
});

export default store;
