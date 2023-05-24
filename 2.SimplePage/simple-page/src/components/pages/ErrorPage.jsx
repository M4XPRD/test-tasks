import { useNavigate } from 'react-router-dom';
import routes from '../../routes/routes';

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1 className="big-h1">404: There&apos;s no such page 💀</h1>
      <button type="button" className="support-button" onClick={() => navigate(routes.welcome())}>Click on me to fix this right up!</button>
    </>
  );
};

export default ErrorPage;
