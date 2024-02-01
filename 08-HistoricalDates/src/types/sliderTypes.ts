export type CategoriesMapping = {
  [key: number | string]: string,
};

export type SlidersData = {
  period: { startingYear: number, endingYear: number };
  years: number[];
  categories: {
    movies: string[];
    literature: string[];
    science: string[];
    music: string[];
    sport: string[];
    theater: string[];
  };
};

export type CategoryKeys = 'movies' | 'literature' | 'science' | 'music' | 'sport' | 'theater';

export type TimelineProps = {
  years: number[];
  category: string[];
  categoryKey: string;
};

export type DatesAndCategoriesProps = {
  startingYear: number,
  endingYear: number,
  currentCategoryID: number,
  handleNewCategoryID: (newCategoryID: number) => void,
};

export type MobileCategoryTitleProps = Pick<DatesAndCategoriesProps, 'currentCategoryID'>;

export type YearsProps = Pick<DatesAndCategoriesProps, 'startingYear' | 'endingYear'>;

export type CategorySelectionProps = Omit<DatesAndCategoriesProps, 'startingYear' | 'endingYear'>;

export type SliderButtonsProps = {
  currentSlide: number,
  handleNextSlide: () => void,
  handlePreviousSlide: () => void,
  slidersLength: number,
  formattedCurrentSlide: string,
  totalSliders: string,
};
export type DotProps = {
  $position: {
    top?: string;
    right?: string;
    bottom?: string;
    left?: string;
  };
  transform: {
    hoverTransform: string;
  };
};
