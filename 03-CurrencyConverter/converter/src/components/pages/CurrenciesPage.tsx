import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import { AppDispatch, RootState } from '../../slices';
import { getCountriesList } from '../../slices/countriesSlice';
import routes from '../../routes';
import AnimationBar from '../AnimationBar';
import SelectCountry from '../SelectCountry';
import { setRatesError, setBaseCurrency, setRates } from '../../slices/currenciesSlice';
import CurrenciesTable from '../CurrenciesTable';

interface SetRateAction {
  type: string;
  payload: {
    [key: string]: number;
  } | undefined;
}
const CurrenciesPage = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const rates = useSelector((state: RootState) => state.currencies.rates);
  const dispatch = useDispatch<ThunkDispatch<RootState, AppDispatch, AnyAction>>();
  const axiosError = useSelector((state: RootState) => state.currencies.axiosError);
  const loadingStatus = useSelector((state: RootState) => state.countries.loadingStatus);
  const baseCurrency = useSelector((state: RootState) => state.currencies.baseCurrency);
  const baseCurrencyShort = useSelector((state: RootState) => state.currencies.baseCurrencyShort);
  const exchangeAPI = useSelector((state: RootState) => state.currencies.exchangeRateURL);
  const APIkey = process.env.REACT_APP_CURRENCY_KEY;

  useEffect(() => {
    dispatch(getCountriesList());
  }, []);

  useEffect(() => {
    const getRates = async (): Promise<void> => {
      try {
        const countExchange = await axios.get(exchangeAPI, {
          params: {
            apikey: APIkey,
            base_currency: baseCurrencyShort,
          },
        });
        const { data } = countExchange.data;
        const action: SetRateAction = {
          type: 'SET_RATES',
          payload: data,
        };
        dispatch(setRates(action));
        dispatch(setRatesError(false));
      } catch (e) {
        dispatch(setRatesError(true));
      }
    };
    getRates();
  }, [baseCurrency]);

  return (
    <div className="currencies-container">
      <h1 className="currencies-h1">
        {t('pages.currenciesPage.main')}
      </h1>
      <div className="currencies-choose-currency">
        <SelectCountry currencyValue={baseCurrency} label={t('pages.currenciesPage.selectCurrencyLabel')} setExchange={setBaseCurrency} />
      </div>
      {loadingStatus === 'finished' && rates && !axiosError ? (
        <CurrenciesTable />
      ) : (
        <div className="currencies-cirle">
          <AnimationBar />
        </div>
      )}
      <button className="to-currencies-button currencies-circle" type="button" onClick={() => navigate(routes.main())}>{t('pages.currenciesPage.toMainPage')}</button>
    </div>
  );
};

export default CurrenciesPage;
