import { useNavigate } from 'react-router-dom';
import routes from '../../routes/routes';

const WelcomePage = () => {
  const navigate = useNavigate();

  return (
    <button
      type="button"
      className="welcome"
      onClick={() => navigate(routes.login())}
    >
      <h1>Welcome!</h1>
      <h3>Click on me 🌎</h3>
    </button>
  );
};

export default WelcomePage;
