import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import routes from '../../routes/routes';

const ProfilePage = () => {
  const { login } = useSelector((state) => state.login);
  const navigate = useNavigate();

  return (
    <>
      <h1 className="big-h1">{login}</h1>
      <button type="button" className="support-button" onClick={() => navigate(routes.welcome())}>Click on me to start again</button>
    </>
  );
};

export default ProfilePage;
