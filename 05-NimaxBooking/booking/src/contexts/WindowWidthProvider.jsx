import React, {
  useEffect,
  useMemo, useState,
} from 'react';
import WindowWidthContext from './WindowWidthContext';

const WindowWidthProvider = ({ children }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const providedData = useMemo(() => ({
    windowWidth,
  }), [windowWidth]);

  return (
    <WindowWidthContext.Provider value={providedData}>
      {children}
    </WindowWidthContext.Provider>
  );
};

export default WindowWidthProvider;
