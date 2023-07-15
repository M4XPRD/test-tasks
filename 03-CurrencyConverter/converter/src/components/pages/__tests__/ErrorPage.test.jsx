import * as router from 'react-router';
import { render, screen } from '@testing-library/react';
import { useTranslation } from 'react-i18next';
import { MemoryRouter, BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import ErrorPage from '../ErrorPage';
import resources from '../../../locales/index';
import routes from '../../../routes';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (key) => key }),
}));

describe('ErrorPage component', () => {
  const ui = userEvent.setup();
  const navigate = jest.fn();

  beforeEach(() => {
    jest.spyOn(router, 'useNavigate').mockImplementation(() => navigate);
  });

  const i18nConfig = {
    i18n: {
      defaultNS: 'translation',
      resources,
    },
  };

  const errorPageMainText = 'pages.errorPage.main';
  const returnToMainText = 'pages.errorPage.returnButton';

  it('ErrorPage snapshot', () => {
    const page = render(
      <ErrorPage />,
    );
    expect(page).toMatchSnapshot();
  });

  it('ErrorPage renders', () => {
    render(
      <ErrorPage />,
      { wrapper: BrowserRouter },
      i18nConfig,
    );
    const { t } = useTranslation();
    expect(screen.getByText(t(errorPageMainText))).toBeInTheDocument();
    expect(screen.getByText(t(returnToMainText))).toBeInTheDocument();
  });

  it('ErrorPage correct navigation', () => {
    const badRoute = '/123';
    render(
      <MemoryRouter initialEntries={[badRoute]}>
        <ErrorPage />
      </MemoryRouter>,
      i18nConfig,
    );
    const { t } = useTranslation();
    expect(screen.getByText(t(errorPageMainText))).toBeInTheDocument();
  });

  it('ErrorPage return button works', async () => {
    render(
      <MemoryRouter>
        <ErrorPage />
      </MemoryRouter>,
      i18nConfig,
    );
    const { t } = useTranslation();
    expect(screen.getByText(t(errorPageMainText))).toBeInTheDocument();

    await ui.click(screen.queryByText(t(returnToMainText)));

    expect(navigate).toHaveBeenCalledWith(routes.main());
  });
});
