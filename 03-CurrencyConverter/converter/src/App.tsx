import { Route, Routes } from 'react-router-dom';
import routes from './routes/index';
import video from './assets/3.mp4';
import MainPage from './components/pages/MainPage';
import CurrenciesPage from './components/pages/CurrenciesPage';
import ErrorPage from './components/pages/ErrorPage';

const App = () => (
  <div className="main">
    <div className="overlay" />
    <div className="container">
      <video autoPlay loop muted controlsList="nodownload" className="background-clip">
        <source src={video} type="video/mp4" />
      </video>
      <Routes>
        <Route path={routes.main()} element={<MainPage />} />
        <Route path={routes.currencies()} element={<CurrenciesPage />} />
        <Route path={routes.error()} element={<ErrorPage />} />
      </Routes>
    </div>
  </div>
);

export default App;
