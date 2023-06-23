import { useEffect } from 'react';
import { Container, Grid } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { ThunkDispatch, AnyAction } from '@reduxjs/toolkit';
import InputAmount from '../InputAmount';
import SelectCountry from '../SelectCountry';
import SwitchCurrency from '../SwitchCurrency';
import { getCountriesList } from '../../slices/countriesSlice';
import { AppDispatch, RootState } from '../../slices';
import AnimationBar from '../AnimationBar';
import { setExchange } from '../../slices/currenciesSlice';
import ExchangeResult from '../ExchangeResult';

const MainPage = () => {
  const dispatch = useDispatch<ThunkDispatch<RootState, AppDispatch, AnyAction>>();
  const loadingStatus = useSelector((state: RootState) => state.countries.loadingStatus);
  const exchangeFrom = useSelector((state: RootState) => state.currencies.exchangeFrom);
  const exchangeTo = useSelector((state: RootState) => state.currencies.exchangeTo);

  useEffect(() => {
    dispatch(getCountriesList());
  }, []);

  return (
    <div className="main-content">
      <h1 className="converter-label">Конвертер валют</h1>
      {loadingStatus !== 'finished'
        ? <AnimationBar /> : (
          <Container maxWidth="md" className="currency-container">
            <Grid container spacing={2} className="grid-container">
              <InputAmount />
              <SelectCountry currencyValue={exchangeFrom} label="У меня есть" setExchange={setExchange} />
              <SwitchCurrency />
              <SelectCountry currencyValue={exchangeTo} label="Меняю на" setExchange={setExchange} />
              <ExchangeResult />
            </Grid>
          </Container>
        )}
    </div>
  );
};

export default MainPage;
