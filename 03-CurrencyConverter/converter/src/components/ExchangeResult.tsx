import { Box, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import { RootState } from '../slices';
import { setExchangeCurrency } from '../slices/currenciesSlice';

const ExchangeResult = () => {
  const [axiosError, setAxisError] = useState(false);
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const currencyAmount = useSelector((state: RootState) => state.currencies.currencyAmount);
  const exchangeData = useSelector((state: RootState) => state.currencies.exchange);
  const exchangeFromShort = exchangeData.currency.from.short;
  const exchangeToShort = exchangeData.currency.to.short;
  const exchangeAmount = exchangeData.amount;
  const APIkey = process.env.REACT_APP_CURRENCY_KEY;

  useEffect(() => {
    const getExchange = async () => {
      try {
        const countExchange = await axios.get(exchangeData.rates.URL, {
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
    getExchange();
  }, [currencyAmount, exchangeFromShort, exchangeToShort]);

  return (
    <Box className="exchange-result-container">
      {axiosError ? (
        <>
          <Typography>{t('components.exchangeResult.firstErrorMessage')}</Typography>
          <Typography variant="h6">{t('components.exchangeResult.secondErrorMessage')}</Typography>
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
