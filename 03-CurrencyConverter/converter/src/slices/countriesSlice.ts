import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getCountriesList = createAsyncThunk('countries/getCountriesList', async () => {
  const response = await axios.get('https://restcountries.com/v3.1/all');
  const { data } = response;
  return data;
});

interface Countries {
  countriesList: Country[],
  countriesCurSymbols: {
    [key: string]: string;
  },
  loadingStatus: string,
}

export interface Country {
  name: {
    common: string;
  }
  flag: string;
  currencies: {
    [key: string]: {
      symbol: string;
      name: string;
    };
  };
}

// Ограничение API, где не все валюты работают

const currencyList = [
  'EUR', 'USD', 'JPY', 'BGN', 'CZK',
  'DKK', 'GBP', 'HUF', 'PLN', 'RON',
  'SEK', 'CHF', 'ISK', 'NOK', 'HRK',
  'RUB', 'TRY', 'AUD', 'BRL', 'CAD',
  'CNY', 'HKD', 'IDR', 'ILS', 'INR',
  'KRW', 'MXN', 'MYR', 'NZD', 'PHP',
  'SGD', 'THB', 'ZAR',
];

const countriesSlice = createSlice({
  name: 'countries',
  initialState: {
    countriesList: [],
    countriesCurSymbols: {},
    loadingStatus: '',
  } as Countries,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCountriesList.pending, (state) => {
        state.loadingStatus = 'loading';
      })
      .addCase(getCountriesList.fulfilled, (state, action) => {
        state.loadingStatus = 'finished';
        const countries = action.payload;
        const filteredCountries = countries
          .filter((country: object) => Object.prototype.hasOwnProperty.call(country, 'currencies'))
          .filter((country: object) => {
            const countryTypes = country as Country;
            const [countryCurrency] = Object.keys(countryTypes.currencies);
            if (currencyList.includes(countryCurrency)) {
              return country;
            }
            return null;
          });
        const sortedCountries = filteredCountries
          .sort((a: Country, b: Country) => a.name.common.localeCompare(b.name.common));

        state.countriesList = sortedCountries;
        state.countriesCurSymbols = sortedCountries
          .reduce((acc: { [key: string]: string }, country: Country) => {
            const [currencyShort] = Object.keys(country.currencies);
            acc[currencyShort] = country.currencies[currencyShort].symbol;
            return acc;
          }, {});
      })
      .addCase(getCountriesList.rejected, (state) => {
        state.loadingStatus = 'rejected';
      });
  },
});

export default countriesSlice.reducer;
