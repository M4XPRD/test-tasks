import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import SwitchCurrency from '../SwitchCurrency';
import store from '../../slices/index';
import { switchCurrencies } from '../../slices/currenciesSlice';

describe('SwitchCurrency component', () => {
  it('Should call dispatch when button is clicked', () => {
    const mockDispatch = jest.fn();
    jest.spyOn(store, 'dispatch').mockImplementation(mockDispatch);

    render(
      <Provider store={store}>
        <SwitchCurrency />
      </Provider>,
    );

    const switchButton = screen.getByTestId('switch-button');
    fireEvent.click(switchButton);

    expect(mockDispatch).toHaveBeenCalledWith(switchCurrencies());
  });
});
