import { ReactElement } from 'react';
import PromoBanner from './PromoBanner';
import useApp from '../hooks/appHook';
import PhoneNumber from './PhoneNumber';
import Confirm from './Confirm';

interface PagesMapping {
  [key: number]: ReactElement;
}

const Main = () => {
  const stepsMapping: PagesMapping = {
    1: <PromoBanner />,
    2: <PhoneNumber />,
    3: <Confirm />,
  };

  const { page } = useApp();

  return (
    <div className="main">
      {stepsMapping[page]}
    </div>
  );
};

export default Main;
