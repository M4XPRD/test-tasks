import { Route, Routes } from 'react-router-dom';
import routes from './routes/index';
import video from './assets/3_cut.mp4';
import MainPage from './components/pages/MainPage';
import CurrenciesPage from './components/pages/CurrenciesPage';
import ErrorPage from './components/pages/ErrorPage';
import useLang from './hooks/langHook';

const App = () => {
  const lang = useLang();
  const languageButtonText = lang.activeLanguage === 'ru' ? 'EN' : 'RU';

  const handleChangeLang = () => {
    lang.setNewLanguage();
  };

  return (
    <div className="main-container">
      <video autoPlay loop muted controlsList="nodownload" className="background-clip">
        <source src={video} type="video/mp4" />
      </video>
      <button className="change-language-button" type="button" onClick={handleChangeLang}>{languageButtonText}</button>
      <Routes>
        <Route path={routes.main()} element={<MainPage />} />
        <Route path={routes.currencies()} element={<CurrenciesPage />} />
        <Route path={routes.error()} element={<ErrorPage />} />
      </Routes>
    </div>
  );
};
export default App;
