import { ReactNode } from 'react';

export type ProviderProps = {
  children: ReactNode,
};

export type SliderContextTypes = {
  currentSlide: number,
  previousSlide: number,
  currentCategoryID: number,
  handleNewCategoryID: (newCategoryID: number) => void,
  handleNextSlide: () => void,
  handlePreviousSlide: () => void,
};

export type ScreenSize = {
  width: number;
  height: number;
};

export type ScreenSizeContextTypes = {
  screenSize: ScreenSize;
};
