import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../slices/index';

import CurrenciesTable from '../CurrenciesTable';

describe('CurrenciesTable component', () => {
  it('CurrenciesTable snapshot', () => {
    const element = render(
      <Provider store={store}>
        <CurrenciesTable />
      </Provider>,
    );

    expect(element).toMatchSnapshot();
  });
});
