/* eslint-disable react/jsx-props-no-spreading */
import {
  Autocomplete, Grid, TextField,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../slices';
import { SetExchangeType } from '../slices/currenciesSlice';
import { Country } from '../slices/countriesSlice';

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

const SelectCountry = (props: Props) => {
  const {
    currencyValue, label, setExchange,
  } = props;
  const dispatch = useDispatch();
  const countriesList = useSelector((state: RootState) => state.countries.countriesList);

  const formOptions = countriesList.map((country: object) => {
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
