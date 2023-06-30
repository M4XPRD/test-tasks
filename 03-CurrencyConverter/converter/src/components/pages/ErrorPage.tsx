import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import routes from '../../routes';

const ErrorPage = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  return (
    <div className="main-content">
      <h1 className="converter-label">{t('pages.errorPage.main')}</h1>
      <button className="to-main-button" type="button" onClick={() => navigate(routes.main())}>{t('pages.errorPage.returnButton')}</button>
    </div>
  );
};

export default ErrorPage;
