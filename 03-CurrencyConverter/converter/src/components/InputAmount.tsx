import { Grid, InputAdornment, TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { RootState } from '../slices';
import { setCurrencyAmount } from '../slices/currenciesSlice';

const InputAmount = () => {
  const currencySymbols = useSelector((state: RootState) => state.countries.countriesCurSymbols);
  const currencyAmount = useSelector((state: RootState) => state.currencies.currencyAmount);
  const exchangeData = useSelector((state: RootState) => state.currencies.exchange);
  const exchangeFromShort = exchangeData.currency.from.short;
  const dispatch = useDispatch();
  const { t } = useTranslation();

  return (
    <Grid item xs={12} md={3}>
      <TextField
        value={currencyAmount}
        label={t('components.inputAmount.amount')}
        fullWidth
        onBlur={() => (currencyAmount === '' ? dispatch(setCurrencyAmount(0)) : currencyAmount)}
        onFocus={() => dispatch(setCurrencyAmount(''))}
        onChange={(e) => dispatch(setCurrencyAmount(e.target.value))}
        InputProps={{
          type: 'number',
          startAdornment: <InputAdornment position="start">{currencySymbols[exchangeFromShort]}</InputAdornment>,
          inputProps: { min: 0 },
        }}
      />
    </Grid>
  );
};

export default InputAmount;
