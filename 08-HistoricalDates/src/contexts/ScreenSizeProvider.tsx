import { useEffect, useMemo, useState } from 'react';
import { ProviderProps, ScreenSize } from '../types/contextTypes';
import ScreenSizeContext from './ScreenSizeContext';

const ScreenSizeProvider = ({ children }: ProviderProps) => {
  const [screenSize, setScreenSize] = useState<ScreenSize>({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const providedData = useMemo(
    () => ({
      screenSize,
    }),
    [
      screenSize,
    ],
  );

  return (
    <ScreenSizeContext.Provider value={providedData}>
      {children}
    </ScreenSizeContext.Provider>
  );
};

export default ScreenSizeProvider;
