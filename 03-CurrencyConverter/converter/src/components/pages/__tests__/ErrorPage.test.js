import { fireEvent, render, screen } from '@testing-library/react';
import { useTranslation } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import ErrorPage from '../ErrorPage';
import resources from '../../../locales/index';
import routes from '../../../routes';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (key) => key }),
}));

const history = createMemoryHistory();

describe('ErrorPage component', () => {
  history.push('/123');
  it('ErrorPage renders', () => {
    render(
      <MemoryRouter history={history}>
        <ErrorPage />
      </MemoryRouter>,
    );
    expect(history.location.pathname).not.toBe(routes.main());
    expect(history.location.pathname).not.toBe(routes.currencies());
  });

  it('ErrorPage i18next texts', () => {
    render(
      <MemoryRouter>
        <ErrorPage />
      </MemoryRouter>,
      {
        i18n: {
          defaultNS: 'translation',
          resources,
        },
      },
    );
    const { t } = useTranslation();
    const errorText = t('pages.errorPage.main');
    const returnToMainText = t('pages.errorPage.returnButton');
    expect(screen.getByText(errorText)).toBeInTheDocument();
    expect(screen.getByText(returnToMainText)).toBeInTheDocument();
  });

  it('ErrorPage return button works', () => {
    render(
      <MemoryRouter history={history}>
        <ErrorPage />
      </MemoryRouter>,
    );

    const returnButton = screen.getByRole('button');
    fireEvent.click(returnButton);
    expect(window.location.pathname).toBe(routes.main());
  });
});
