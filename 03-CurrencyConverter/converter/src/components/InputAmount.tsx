import { Grid, InputAdornment, TextField } from '@mui/material';
import getSymbolFromCurrency from 'currency-symbol-map';
import { useSelector } from 'react-redux';
import { RootState } from '../slices';

const InputAmount = () => {
  const exchangeFromCurrency = useSelector((state: RootState) => state.currencies.exchangeFrom);
  const [currency] = exchangeFromCurrency.split(' ');

  return (
    <Grid item xs={12} md={3}>
      <TextField
        label="Количество"
        fullWidth
        InputProps={{
          type: 'number',
          startAdornment: <InputAdornment position="start">{getSymbolFromCurrency(currency)}</InputAdornment>,
        }}
      />
    </Grid>
  );
};

export default InputAmount;
