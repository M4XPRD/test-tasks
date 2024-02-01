import { useMemo } from 'react';
import slidersData, { categoriesMapping } from '../utils/slidersData';
import formatSlidersCount from '../utils/formatSlidersCount';
import { CategoryKeys } from '../types/sliderTypes';

const useSliderData = (currentSlide: number, currentCategoryID: number) => {
  const currentSlideData = useMemo(
    () => slidersData[currentSlide - 1],
    [currentSlide],
  );

  const slidersLength = slidersData.length;

  const totalSliders = formatSlidersCount(slidersLength);
  const formattedCurrentSlide = formatSlidersCount(currentSlide);

  const categoryKey = categoriesMapping[currentCategoryID] as CategoryKeys;
  const category = useMemo(
    () => currentSlideData.categories[categoryKey],
    [currentSlideData, categoryKey],
  );

  const { years } = currentSlideData;
  const { startingYear, endingYear } = currentSlideData.period;

  return {
    slidersLength,
    totalSliders,
    formattedCurrentSlide,
    categoryKey,
    category,
    years,
    startingYear,
    endingYear,
  };
};

export default useSliderData;
