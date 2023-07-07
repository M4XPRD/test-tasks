import { useEffect } from 'react';
import { Container, Grid } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ThunkDispatch, AnyAction } from '@reduxjs/toolkit';
import InputAmount from '../InputAmount';
import SelectCountry from '../SelectCountry';
import SwitchCurrency from '../SwitchCurrency';
import { getCountriesList } from '../../slices/countriesSlice';
import { setExchange } from '../../slices/currenciesSlice';
import { AppDispatch, RootState } from '../../slices';
import AnimationBar from '../AnimationBar';
import ExchangeResult from '../ExchangeResult';
import routes from '../../routes';

const MainPage = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const dispatch = useDispatch<ThunkDispatch<RootState, AppDispatch, AnyAction>>();
  const loadingStatus = useSelector((state: RootState) => state.countries.loadingStatus);
  const exchangeData = useSelector((state: RootState) => state.currencies.exchange);
  const defaultFromCountry = exchangeData.currency.from.full;
  const defaultToCountry = exchangeData.currency.to.full;

  useEffect(() => {
    dispatch(getCountriesList());
  }, []);

  return (
    <div className="main-content">
      <h1 className="converter-label">{t('pages.mainPage.main')}</h1>
      {loadingStatus !== 'finished'
        ? (
          <div className="main-page-circle">
            <AnimationBar />
          </div>
        ) : (
          <Container maxWidth="md" className="currency-container">
            <Grid container spacing={2} className="grid-container">
              <InputAmount />
              <SelectCountry currencyValue={defaultFromCountry} label={t('pages.mainPage.exchangeFromLabel')} exchangeOption="from" setExchange={setExchange} />
              <SwitchCurrency />
              <SelectCountry currencyValue={defaultToCountry} label={t('pages.mainPage.exchangeToLabel')} exchangeOption="to" setExchange={setExchange} />
            </Grid>
            <ExchangeResult />
          </Container>
        )}
      <button className="to-currencies-button" type="button" onClick={() => navigate(routes.currencies())}>{t('pages.mainPage.toCurrenciesPage')}</button>
    </div>
  );
};

export default MainPage;
