import { useContext } from 'react';
import ScreenSizeContext from '../contexts/ScreenSizeContext';

const useScreenSize = () => useContext(ScreenSizeContext);

export default useScreenSize;
