import {
  render, screen, waitFor,
} from '@testing-library/react';
import { Provider } from 'react-redux';
import userEvent from '@testing-library/user-event';
import SelectCountry from '../SelectCountry';
import store from '../../slices/index';

describe('SelectCountry component', () => {
  it('Should update the selected country in Autocomplete', async () => {
    const setExchangeMock = jest.fn();
    const label = 'Select a country';
    const currencyValue = 'USD';
    const exchangeOption = 'from';

    render(
      <Provider store={store}>
        <SelectCountry
          label={label}
          currencyValue={currencyValue}
          exchangeOption={exchangeOption}
          setExchange={setExchangeMock}
        />
      </Provider>,
    );

    const input = screen.getByRole('combobox');
    userEvent.clear(input);
    userEvent.type(input, 'AUD');
    userEvent.keyboard('[ArrowDown]');
    userEvent.keyboard('[Enter]');
    await waitFor(() => expect(input).toHaveValue('AUD'));
  });
});
