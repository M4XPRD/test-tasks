import { Box, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { RootState } from '../slices';
import { setExchangeCurrency } from '../slices/currenciesSlice';

const ExchangeResult = () => {
  const [axiosError, setAxisError] = useState(false);
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
        const result = data[exchangeToShort] * Number(currencyAmount);
        dispatch(setExchangeCurrency(result.toFixed(2)));
        setAxisError(false);
      } catch (e) {
        setAxisError(true);
      }
    };
    // getExchange();
  }, [currencyAmount, exchangeFromShort, exchangeToShort]);

  return (
    <Box className="exchange-result-container">
      {axiosError ? (
        <>
          <Typography>Произошла ошибка</Typography>
          <Typography variant="h6">Попробуйте другую валюту</Typography>
        </>
      ) : (
        <>
          <Typography>
            {currencyAmount}
            {' '}
            {exchangeFromShort}
            {' '}
            =
          </Typography>
          <Typography variant="h5">
            {exchangeAmount}
            {' '}
            {exchangeToShort}
          </Typography>
        </>
      )}
    </Box>
  );
};

export default ExchangeResult;
