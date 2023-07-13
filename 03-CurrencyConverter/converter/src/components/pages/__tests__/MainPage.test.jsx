import { BrowserRouter } from 'react-router-dom';
import {
  act, render,
} from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../../slices/index';
import MainPage from '../MainPage';

jest.mock('axios', () => ({
  get: jest.fn(() => Promise.resolve({ data: {} })),
}));

jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (key) => key }),
}));

describe('MainPage component', () => {
  it('MainPage snapshot', async () => {
    await act(async () => {
      const page = render(
        <Provider store={store}>
          <BrowserRouter>
            <MainPage />
          </BrowserRouter>
        </Provider>,
      );
      expect(page).toMatchSnapshot();
    });
  });
});
