/* eslint-disable import/no-extraneous-dependencies */
import { render, screen } from '@testing-library/react';
import { useTranslation } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import ErrorPage from '../ErrorPage';
import resources from '../../../locales/index';
import routes from '../../../routes';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (key) => key }),
}));

describe('ErrorPage component', () => {
  it('ErrorPage renders', () => {
    render(
      <MemoryRouter>
        <ErrorPage />
      </MemoryRouter>,
    );
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
    const history = createMemoryHistory();
    render(
      <MemoryRouter history={history}>
        <ErrorPage />
      </MemoryRouter>,
    );

    expect(history.location.pathname).toBe(routes.main());
  });
});
