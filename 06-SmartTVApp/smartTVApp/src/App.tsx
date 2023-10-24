import Main from './components/Main';
import AppProvider from './contexts/AppProvider';

const App = () => (
  <AppProvider>
    <Main />
  </AppProvider>
);

export default App;
