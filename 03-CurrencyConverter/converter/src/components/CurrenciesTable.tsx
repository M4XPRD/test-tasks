import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Country } from '../slices/countriesSlice';
import { RootState } from '../slices';

const formRow = (country: object, curRates?: Record<string, number> | undefined, type?: string) => {
  const countryType = country as Country;
  const [currency] = Object.keys(countryType.currencies);
  const currencyName = countryType.currencies[currency].name;
  switch (type) {
    case 'currency':
      return `${currency} — ${currencyName}`;
    case 'rates':
      return curRates && curRates[currency] ? curRates[currency].toFixed(2) : '—';
    default:
      return countryType.name.common;
  }
};

const CurrenciesTable = () => {
  const countriesList = useSelector((state: RootState) => state.countries.countriesList);
  const rates = useSelector((state: RootState) => state.currencies.rates);
  const { t } = useTranslation();

  return (
    <TableContainer className="currencies-table-container">
      <Table className="currencies-table">
        <TableHead>
          <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
            <TableCell align="center" width="33%">{t('components.currenciesTable.country')}</TableCell>
            <TableCell align="center" width="33%">{t('components.currenciesTable.currency')}</TableCell>
            <TableCell align="center" width="33%">{t('components.currenciesTable.rate')}</TableCell>
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
  );
};

export default CurrenciesTable;
