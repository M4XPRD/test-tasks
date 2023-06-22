/* eslint-disable react/jsx-props-no-spreading */
import {
  Autocomplete, Box, Grid, TextField,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../slices';

const SelectCountry = (props: { currencyValue: string; label: string; setCurrency: any }) => {
  const { currencyValue, label, setCurrency } = props;
  const dispatch = useDispatch();
  const countriesData = useSelector((state: RootState) => state.countries.countriesData);

  const filteredCountries = countriesData.filter((country: object) => Object.prototype.hasOwnProperty.call(country, 'currencies'));
  const sortedCountries = filteredCountries
    .sort((a: any, b: any) => a.name.common.localeCompare(b.name.common));
  const formOptions = sortedCountries.map((country: any) => {
    const os = navigator.platform;
    const [currency] = Object.keys(country.currencies);
    const countryName = country.name.common;
    const currencyData = `${os === 'Win32' ? '' : country.flag} ${currency} — ${countryName}`;
    return currencyData.trim();
  });

  return (
    <Grid item xs={12} md={3}>
      <Autocomplete
        value={currencyValue}
        isOptionEqualToValue={(option, value) => option.trim() === value.trim()}
        disableClearable
        onChange={(e, newValue) => dispatch(setCurrency(newValue))}
        options={formOptions}
        renderInput={(params) => <TextField {...params} label={label} />}
      />
    </Grid>
  );
};

export default SelectCountry;
