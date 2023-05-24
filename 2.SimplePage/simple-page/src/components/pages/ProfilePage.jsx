import { useNavigate } from 'react-router-dom';
import routes from '../../routes/routes';

const ProfilePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1 className="big-h1">developer21</h1>
      <button type="button" className="support-button" onClick={() => navigate(routes.welcome())}>Click on me to start again</button>
    </>
  );
};

export default ProfilePage;
