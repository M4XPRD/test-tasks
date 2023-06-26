import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <div className="main-content">
      <h1 className="converter-label">404: Страница не найдена</h1>
      <button className="to-main-button" type="button" onClick={() => navigate('/')}>Вернуться на главную</button>
    </div>
  );
};

export default ErrorPage;
