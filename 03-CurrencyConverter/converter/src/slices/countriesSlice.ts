import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import {
  currenciesList, euroData, usdData, audData, nzdData, dkkData,
} from './currenciesData';

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
            if (currenciesList.includes(countryCurrency)) {
              return country;
            }
            return null;
          });

        filteredCountries.push(euroData, usdData, audData, nzdData, dkkData);

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
