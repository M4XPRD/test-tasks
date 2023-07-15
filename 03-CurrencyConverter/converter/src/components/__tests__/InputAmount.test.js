import {
  fireEvent,
  render, screen, waitFor,
} from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../slices/index';
import InputAmount from '../InputAmount';
import resources from '../../locales/index';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (key) => key }),
}));

const i18nConfig = {
  i18n: {
    defaultNS: 'translation',
    resources,
  },
};

describe('InputAmount component', () => {
  it('InputAmount snapshot', () => {
    const element = render(
      <Provider store={store}>
        <InputAmount />
      </Provider>,
    );

    expect(element).toMatchSnapshot();
  });
  it('Should update the currency amount in Textfield', async () => {
    render(
      <Provider store={store}>
        <InputAmount />
      </Provider>,
      i18nConfig,
    );

    const input = screen.queryByTestId('input-amount').querySelector('input');
    await waitFor(() => {
      expect(input.value).toBe('');
    });
    fireEvent.change(input, { target: { value: '10' } });
    await waitFor(() => {
      expect(input.value).toBe('10');
    });
  });
});
