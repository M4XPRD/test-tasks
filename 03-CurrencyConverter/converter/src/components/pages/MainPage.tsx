import { useEffect } from 'react';
import { Container, Grid } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { ThunkDispatch } from '@reduxjs/toolkit';
import InputAmount from '../InputAmount';
import SelectCountry from '../SelectCountry';
import SwitchCurrency from '../SwitchCurrency';
import { getCountriesList } from '../../slices/countriesSlice';
import { RootState } from '../../slices';
import AnimationBar from '../AnimationBar';
import { setExchangeFrom, setExchangeTo } from '../../slices/currenciesSlice';

const MainPage = () => {
  const dispatch = useDispatch<ThunkDispatch<RootState, any, any>>();
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
            <Grid container spacing={2}>
              <InputAmount />
              <SelectCountry currencyValue={exchangeFrom} label="У меня есть" setCurrency={setExchangeFrom} />
              <SwitchCurrency />
              <SelectCountry currencyValue={exchangeTo} label="Меняю на" setCurrency={setExchangeTo} />
            </Grid>
          </Container>
        )}
    </div>
  );
};

export default MainPage;
