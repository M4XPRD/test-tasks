import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../slices/index';
import AnimationBar from '../AnimationBar';

describe('AnimationBar component', () => {
  it('AnimationBar snapshot', () => {
    const element = render(
      <Provider store={store}>
        <AnimationBar />
      </Provider>,
    );

    expect(element).toMatchSnapshot();
  });
});
