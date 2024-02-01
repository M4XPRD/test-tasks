import { createContext } from 'react';
import { SliderContextTypes } from '../types/contextTypes';

const defaultValues = {
  currentSlide: 1,
  previousSlide: 0,
  currentCategoryID: 1,
  handleNewCategoryID: () => {},
  handleNextSlide: () => {},
  handlePreviousSlide: () => {},
};

const SliderLogicContext = createContext<SliderContextTypes>(defaultValues);

export default SliderLogicContext;
