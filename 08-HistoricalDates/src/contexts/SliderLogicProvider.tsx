import { useMemo, useState } from 'react';
import { ProviderProps } from '../types/contextTypes';
import SliderLogicContext from './SliderLogicContext';

const SliderLogicProvider = ({ children }: ProviderProps) => {
  const [currentSlide, setCurrentSlide] = useState<number>(1);
  const [previousSlide, setPreviousSlide] = useState<number>(1);
  const [currentCategoryID, setCurrentCategoryID] = useState<number>(1);

  const handleNextSlide = () => {
    setPreviousSlide(currentSlide);
    setCurrentSlide((current) => current + 1);
  };

  const handlePreviousSlide = () => {
    setPreviousSlide(currentSlide);
    setCurrentSlide((current) => current - 1);
  };

  const handleNewCategoryID = (newCategoryID: number) => {
    setCurrentCategoryID(newCategoryID);
  };

  const providedData = useMemo(
    () => ({
      currentSlide,
      currentCategoryID,
      previousSlide,
      handleNewCategoryID,
      handleNextSlide,
      handlePreviousSlide,
    }),
    [
      currentSlide,
      currentCategoryID,
      previousSlide,
      handleNewCategoryID,
      handleNextSlide,
      handlePreviousSlide,
    ],
  );

  return (
    <SliderLogicContext.Provider value={providedData}>
      {children}
    </SliderLogicContext.Provider>
  );
};

export default SliderLogicProvider;
