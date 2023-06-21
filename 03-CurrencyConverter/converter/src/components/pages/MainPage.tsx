import { useEffect, useState } from 'react';
import { Container, Grid } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { ThunkDispatch } from '@reduxjs/toolkit';
import InputAmount from '../InputAmount';
import SelectCountry from '../SelectCountry';
import SwitchCurrency from '../SwitchCurrency';
import { getCountriesList } from '../../slices/countriesSlice';

const MainPage = () => {
  const currencies = ['Рубли', 'Евро', 'Доллары', 'Йены', 'Юани'];
  const [currencyIndex, setCurrencyIndex] = useState({ first: 0, second: currencies.length - 1 });
  const [parsingError, setParsingError] = useState(false);
  const [rates, setRates] = useState<string[]>(['USD']);
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const test = useSelector((state: any) => state.countries.loadingStatus);
  console.log(test);

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     setCurrencyIndex((prevIndex) => ({
  //       first: (prevIndex.first + 1) % currencies.length,
  //       second: (prevIndex.second - 1 + currencies.length) % currencies.length,
  //     }));
  //   }, 1000);

  //   return () => clearInterval(intervalId);
  // }, [currencies.length]);

  useEffect(() => {
    dispatch(getCountriesList());
  }, []);

  return (
    <div className="content">
      <h1>Конвертер валют</h1>
      { parsingError ? (
        <h2 className="parsing-error">Ошибка сети</h2>
      ) : (
        <h2>{`${currencies[currencyIndex.first]} в ${currencies[currencyIndex.second]}`}</h2>
      )}
      <Container maxWidth="md" className="currency-container">
        <Grid container spacing={2}>
          <InputAmount />
          <SelectCountry />
          <SwitchCurrency />
          <SelectCountry />
        </Grid>
      </Container>
    </div>
  );
};

export default MainPage;
