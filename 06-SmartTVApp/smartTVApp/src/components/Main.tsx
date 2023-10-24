import { ReactElement } from 'react';
import PromoBanner from './PromoBanner';
import useApp from '../hooks/appHook';
import PhoneNumber from './PhoneNumber';
import Confirm from './Confirm';

interface StepsMapping {
  [key: number]: ReactElement;
}

const Main = () => {
  const stepsMapping: StepsMapping = {
    1: <PromoBanner />,
    2: <PhoneNumber />,
    3: <Confirm />,
  };

  const { step } = useApp();

  return (
    <main className="main">
      {stepsMapping[step]}
    </main>
  );
};

export default Main;
