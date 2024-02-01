import AppContent from './components/Content/AppContent/AppContent';
import Wrapper from './App.styled';
import useScreenSize from './hooks/useScreenSize';
import DesktopFrame from './components/Frames/DesktopFrame';
import MobileFrame from './components/Frames/Mobile/MobileFrame';

const App = () => {
  const { screenSize } = useScreenSize();

  return (
    <Wrapper>
      {screenSize.width > 767
        ? (<DesktopFrame />)
        : (<MobileFrame />)}
      <AppContent />
    </Wrapper>
  );
};

export default App;
