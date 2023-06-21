import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getCountriesList = createAsyncThunk('countries/getCountriesList', async () => {
  const response = await axios.get('https://restcountries.com/v3.1/all');
  const { data } = response;
  return data;
});

const countriesSlice = createSlice({
  name: 'countries',
  initialState: {
    countriesData: [],
    loadingStatus: '',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCountriesList.pending, (state) => {
        state.loadingStatus = 'loading';
      })
      .addCase(getCountriesList.fulfilled, (state, action) => {
        state.loadingStatus = 'finished';
        state.countriesData = action.payload;
      })
      .addCase(getCountriesList.rejected, (state) => {
        state.loadingStatus = 'rejected';
      });
  },
});

// export const {
//   onShow,
//   onHide,
// } = countriesSlice.actions;

export default countriesSlice.reducer;
