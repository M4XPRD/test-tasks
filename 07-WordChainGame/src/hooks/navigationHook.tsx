import { useContext } from 'react';
import NavigationContext from '../contexts/NavigationContext';

const useNavigation = () => useContext(NavigationContext);

export default useNavigation;
