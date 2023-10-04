import { useContext } from 'react';
import WindowWidthContext from '../contexts/WindowWidthContext';

const useWindowWidth = () => useContext(WindowWidthContext);

export default useWindowWidth;
