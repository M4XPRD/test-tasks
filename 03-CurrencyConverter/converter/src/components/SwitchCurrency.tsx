import { Button, Grid } from '@mui/material';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import { useDispatch } from 'react-redux';
import { switchCurrencies } from '../slices/currenciesSlice';

const SwitchCurrency = () => {
  const dispatch = useDispatch();
  return (
    <Grid item xs={12} md="auto">
      <Button
        sx={{
          borderRadius: 1,
          height: '100%',
        }}
        onClick={() => dispatch(switchCurrencies())}
      >
        <CompareArrowsIcon sx={{ fontSize: 30 }} />
      </Button>
    </Grid>
  );
};

export default SwitchCurrency;
