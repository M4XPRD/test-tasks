import Title from '../Title/Title';
import SliderButtons from '../SliderButtons/SliderButtons';
import Timeline from '../Timeline/Timeline';
import useSliderLogic from '../../../hooks/useSliderLogic';
import DatesAndCategories from '../DatesAndCategories/DatesAndCategories';
import Wrapper from './AppContent.styled';
import useSliderData from '../../../hooks/useSliderData';
import useScreenSize from '../../../hooks/useScreenSize';
import MobileCategoryTitle from '../Mobile/MobileCategoryTitle/MobileCategoryTitle';

const AppContent = () => {
  const {
    currentSlide,
    currentCategoryID,
    handleNextSlide,
    handlePreviousSlide,
    handleNewCategoryID,
  } = useSliderLogic();

  const {
    slidersLength,
    totalSliders,
    formattedCurrentSlide,
    category,
    categoryKey,
    years,
    startingYear,
    endingYear,
  } = useSliderData(currentSlide, currentCategoryID);

  const { screenSize } = useScreenSize();

  return (
    <Wrapper>
      <Title />
      <DatesAndCategories
        startingYear={startingYear}
        endingYear={endingYear}
        currentCategoryID={currentCategoryID}
        handleNewCategoryID={handleNewCategoryID}
      />
      {screenSize.width < 768 && (
        <MobileCategoryTitle currentCategoryID={currentCategoryID} />
      )}
      <SliderButtons
        currentSlide={currentSlide}
        handleNextSlide={handleNextSlide}
        handlePreviousSlide={handlePreviousSlide}
        slidersLength={slidersLength}
        formattedCurrentSlide={formattedCurrentSlide}
        totalSliders={totalSliders}
      />
      <Timeline years={years} category={category} categoryKey={categoryKey} />
    </Wrapper>
  );
};

export default AppContent;
