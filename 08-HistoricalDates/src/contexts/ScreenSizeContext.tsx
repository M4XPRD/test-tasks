import { createContext } from 'react';
import { ScreenSizeContextTypes } from '../types/contextTypes';

const defaultValues = {
  screenSize: {
    width: window.innerWidth,
    height: window.innerHeight,
  },
};

const ScreenSizeContext = createContext<ScreenSizeContextTypes>(defaultValues);

export default ScreenSizeContext;
