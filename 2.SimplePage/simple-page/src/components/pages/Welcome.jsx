import { Link } from 'react-router-dom';
import routes from '../routes/routes';

const Welcome = () => (
  <button
    type="button"
    className="welcome"
    onClick={() => (<Link to={routes.main()} />)}
  >
    <h1>Welcome!</h1>
    <h3>Click on me 🌎</h3>
  </button>
);

export default Welcome;
