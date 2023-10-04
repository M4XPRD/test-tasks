import MainForm from './pages/MainForm';
import FormNavigationProvider from './contexts/FormNavigationProvider';
import ErrorsProvider from './contexts/ErrorsProvider';
import WindowWidthProvider from './contexts/WindowWidthProvider';

const App = () => (
  <FormNavigationProvider>
    <ErrorsProvider>
      <WindowWidthProvider>
        <MainForm />
      </WindowWidthProvider>
    </ErrorsProvider>
  </FormNavigationProvider>
);

export default App;
