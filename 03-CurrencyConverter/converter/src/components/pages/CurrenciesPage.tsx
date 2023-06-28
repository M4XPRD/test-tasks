import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AppDispatch, RootState } from '../../slices';
import { Country, getCountriesList } from '../../slices/countriesSlice';
import routes from '../../routes';
import AnimationBar from '../AnimationBar';

const CurrenciesPage = () => {
  const navigate = useNavigate();
  const [rates, setRates] = useState();
  const [axiosError, setAxiosError] = useState(false);
  const dispatch = useDispatch<ThunkDispatch<RootState, AppDispatch, AnyAction>>();
  const loadingStatus = useSelector((state: RootState) => state.countries.loadingStatus);
  const baseCurrency = useSelector((state: RootState) => state.currencies.baseCurrency);
  const countriesList = useSelector((state: RootState) => state.countries.countriesList);
  const exchangeAPI = useSelector((state: RootState) => state.currencies.exchangeRateURL);
  const APIkey = process.env.REACT_APP_CURRENCY_KEY;

  useEffect(() => {
    dispatch(getCountriesList());
  }, []);

  useEffect(() => {
    const getRates = async () => {
      try {
        const countExchange = await axios.get(exchangeAPI, {
          params: {
            apikey: APIkey,
            base_currency: baseCurrency,
          },
        });
        const { data } = countExchange.data;
        setRates(data);
        setAxiosError(false);
      } catch (e) {
        setAxiosError(true);
      }
    };
    getRates();
  }, [baseCurrency]);

  // eslint-disable-next-line max-len
  const formRow = (country: object, curRates?: Record<string, number> | undefined, type?: string) => {
    const countryType = country as Country;
    const [currency] = Object.keys(countryType.currencies);
    const currencyName = countryType.currencies[currency].name;
    switch (type) {
      case 'currency':
        return `${currency} — ${currencyName}`;
      case 'rates':
        return curRates && curRates[currency] ? curRates[currency] : '-';
      default:
        return countryType.name.common;
    }
  };

  return (
    <div className="currencies-container">
      <h1 className="currencies-h1">
        Базовая валюта:
        {' '}
        {baseCurrency}
      </h1>
      {loadingStatus === 'finished' && rates ? (
        <TableContainer className="currencies-table-container">
          <Table className="currencies-table">
            <TableHead>
              <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                <TableCell align="center" width="33%">Страна</TableCell>
                <TableCell align="center" width="33%">Валюта</TableCell>
                <TableCell align="center" width="33%">Курс</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {countriesList.map((country) => (
                <TableRow
                  key={country.name.common}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell align="left" component="th" scope="row">
                    {formRow(country)}
                  </TableCell>
                  <TableCell align="left" component="th" scope="row">{formRow(country, rates, 'currency')}</TableCell>
                  <TableCell align="center" component="th" scope="row">{formRow(country, rates, 'rates')}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <div className="currencies-cirle">
          <AnimationBar />
        </div>
      )}
      <button className="to-currencies-button currencies-circle" type="button" onClick={() => navigate(routes.main())}>Вернуться к конвертеру</button>
    </div>
  );
};

export default CurrenciesPage;
