import { createContext } from 'react';
import { NavigatorContext } from '../types/contextTypes';

const defaultValues = {
  page: 1,
  handleNextPage: () => {},
  handleResetApp: () => {},
};

const NavigationContext = createContext<NavigatorContext>(defaultValues);

export default NavigationContext;
