import { Box, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import axios from 'axios';
import { RootState } from '../slices';
import { setExchangeCurrency } from '../slices/currenciesSlice';

const ExchangeResult = () => {
  const dispatch = useDispatch();
  const currencyAmount = useSelector((state: RootState) => state.currencies.currencyAmount);
  const exchangeAmount = useSelector((state: RootState) => state.currencies.exchangeAmount);
  const exchangeFromShort = useSelector((state: RootState) => state.currencies.exchangeFromShort);
  const exchangeToShort = useSelector((state: RootState) => state.currencies.exchangeToShort);
  const exchangeAPI = useSelector((state: RootState) => state.currencies.exchangeRateURL);
  const APIkey = process.env.REACT_APP_CURRENCY_KEY;

  useEffect(() => {
    const getExchange = async () => {
      try {
        const countExchange = await axios.get(exchangeAPI, {
          params: {
            apikey: APIkey,
            base_currency: exchangeFromShort,
            currencies: exchangeToShort,
          },
        });
        const { data } = countExchange.data;
        const result = data[exchangeToShort];
        dispatch(setExchangeCurrency(result.toFixed(2)));
      } catch (e) {
        console.log(e);
      }
    };
    getExchange();
    console.log(exchangeAmount);
  }, [currencyAmount]);

  return (
    <Box>
      <Typography>{exchangeAmount}</Typography>
      <Typography>r</Typography>
    </Box>
  );
};

export default ExchangeResult;
