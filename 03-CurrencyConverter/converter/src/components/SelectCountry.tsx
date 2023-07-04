/* eslint-disable react/jsx-props-no-spreading */
import '../navigator.d';
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
  exchangeOption?: string;
}

interface SetExchangeAction {
  type: string;
  payload: {
    newValue: string;
    exchangeOption?: string;
  };
}

const SelectCountry = (props: Props) => {
  const {
    currencyValue, label, setExchange, exchangeOption,
  } = props;
  const dispatch = useDispatch();
  const countriesList = useSelector((state: RootState) => state.countries.countriesList);

  const formOptions = countriesList.map((country: object) => {
    const countryTypes = country as Country;
    const os = navigator.userAgentData.platform;
    const [currency] = Object.keys(countryTypes.currencies);
    const countryName = countryTypes.name.common;
    const currencyData = `${os === 'Windows' ? '' : countryTypes.flag} ${currency} — ${countryName}`;
    return currencyData.trim();
  });

  return (
    <Grid item xs={12} md={3.5}>
      <Autocomplete
        value={currencyValue}
        isOptionEqualToValue={(option, value) => option.trim() === value.trim()}
        disableClearable
        onChange={(e, newValue) => {
          const action: SetExchangeAction = setExchange({ newValue, exchangeOption });
          dispatch(action);
        }}
        options={formOptions}
        renderInput={(params) => (
          <TextField
            {...params}
            label={label}
            type="text"
            autoComplete="off"
          />
        )}
      />
    </Grid>
  );
};

SelectCountry.defaultProps = {
  exchangeOption: undefined,
};

export default SelectCountry;
