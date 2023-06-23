import { Grid, InputAdornment, TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../slices';
import { setCurrencyAmount } from '../slices/currenciesSlice';

const InputAmount = () => {
  const exchangeFromShort = useSelector((state: RootState) => state.currencies.exchangeFromShort);
  const currencyAmount = useSelector((state: RootState) => state.currencies.currencyAmount);
  const currencySymbols = useSelector((state: RootState) => state.countries.countriesCurSymbols);
  const dispatch = useDispatch();

  return (
    <Grid item xs={12} md={3}>
      <TextField
        value={currencyAmount}
        label="Количество"
        fullWidth
        onChange={(e) => dispatch(setCurrencyAmount(e.target.value))}
        InputProps={{
          type: 'number',
          startAdornment: <InputAdornment position="start">{currencySymbols[exchangeFromShort]}</InputAdornment>,
        }}
      />
    </Grid>
  );
};

export default InputAmount;
