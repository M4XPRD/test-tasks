import { useContext } from 'react';
import formNavigationContext from '../contexts/FormNavigationContext';

const useFormNavigation = () => useContext(formNavigationContext);

export default useFormNavigation;
