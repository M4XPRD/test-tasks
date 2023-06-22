/* eslint-disable react/jsx-props-no-spreading */
import {
  Autocomplete, Grid, TextField,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../slices';
import { SetExchangeType } from '../slices/currenciesSlice';

interface Props {
  currencyValue: string;
  label: string;
  setExchange: SetExchangeType;
}

interface SetExchangeAction {
  type: string;
  payload: {
    newValue: string;
    label: string;
  };
}

interface Country {
  name: {
    common: string;
  }
  flag: string;
  currencies: object;
}

const SelectCountry = (props: Props) => {
  const {
    currencyValue, label, setExchange,
  } = props;
  const dispatch = useDispatch();
  const countriesData = useSelector((state: RootState) => state.countries.countriesData);
  console.log(countriesData);

  const filteredCountries = countriesData.filter((country: object) => Object.prototype.hasOwnProperty.call(country, 'currencies'));

  const sortedCountries = filteredCountries
    .sort((a: object, b: object) => {
      const aCountry = a as Country;
      const bCountry = b as Country;
      return aCountry.name.common.localeCompare(bCountry.name.common);
    });

  const formOptions = sortedCountries.map((country: object) => {
    const countryTypes = country as Country;
    const os = navigator.platform;
    const [currency] = Object.keys(countryTypes.currencies);
    const countryName = countryTypes.name.common;
    const currencyData = `${os === 'Win32' ? '' : countryTypes.flag} ${currency} — ${countryName}`;
    return currencyData.trim();
  });

  return (
    <Grid item xs={12} md={3.5}>
      <Autocomplete
        value={currencyValue}
        isOptionEqualToValue={(option, value) => option.trim() === value.trim()}
        disableClearable
        onChange={(e, newValue) => {
          const action: SetExchangeAction = setExchange({ newValue, label });
          dispatch(action);
        }}
        options={formOptions}
        renderInput={(params) => <TextField {...params} label={label} />}
      />
    </Grid>
  );
};

export default SelectCountry;
