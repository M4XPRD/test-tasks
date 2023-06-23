import { Grid, InputAdornment, TextField } from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState } from '../slices';

const InputAmount = () => {
  const exchangeFromCurrency = useSelector((state: RootState) => state.currencies.exchangeFrom);
  const currencySymbols = useSelector((state: RootState) => state.countries.countriesCurSymbols);
  const [currency] = exchangeFromCurrency.split(' ');

  return (
    <Grid item xs={12} md={3}>
      <TextField
        label="Количество"
        fullWidth
        InputProps={{
          type: 'number',
          startAdornment: <InputAdornment position="start">{currencySymbols[currency]}</InputAdornment>,
        }}
      />
    </Grid>
  );
};

export default InputAmount;
