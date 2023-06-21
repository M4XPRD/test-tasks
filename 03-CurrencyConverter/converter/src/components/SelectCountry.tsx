/* eslint-disable react/jsx-props-no-spreading */
import {
  Autocomplete, Box, Grid, TextField,
} from '@mui/material';
import { useSelector } from 'react-redux';

const SelectCountry = () => {
  const countriesData = useSelector((state: any) => state.countries.countriesData);
  const filteredCountries = countriesData.filter((country: any) => Object.prototype.hasOwnProperty.call(country, 'currencies'));
  const sortedCountries = filteredCountries
    .sort((a: any, b: any) => a.name.common.localeCompare(b.name.common));
  // const formOptions = sortedCountries.map((country: any) => {
  //   // const os = navigator.platform;
  //   // console.log(os);
  //   const [currency] = Object.keys(country.currencies);
  //   const countryName = country.name.common;
  //   // const currencyData = `${os === 'Win32' ? '' : country.flag} ${currency} - ${countryName}`;
  //   const currencyData = `${country.flag} ${currency} - ${countryName}`;
  //   return currencyData.trim();
  // });

  // console.log(sortedCountries);

  return (
    <Grid item xs={12} md={3}>
      <Autocomplete
        options={sortedCountries}
        autoHighlight
        getOptionLabel={(option: any) => Object.keys(option.currencies)[0]}
        renderOption={(props, option) => (
          <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
            <img
              loading="lazy"
              width="20"
              src={option.flags.png}
              alt=""
            />
            {Object.keys(option.currencies)[0]}
            &nbsp;—
            {option.name.common}
          </Box>
        )}
        renderInput={(params) => (
          <TextField
            {...params}
            label="У меня есть"
            inputProps={{
              ...params.inputProps,
              autoComplete: 'new-password',
            }}
          />
        )}
      />
    </Grid>
  );
};

export default SelectCountry;
