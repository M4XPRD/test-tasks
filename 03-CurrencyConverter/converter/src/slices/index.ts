import { configureStore } from '@reduxjs/toolkit';
import countriesReducer from './countriesSlice';
import currenciesReducer from './currenciesSlice';

const store = configureStore({
  reducer: {
    countries: countriesReducer,
    currencies: currenciesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
