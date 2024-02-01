import useScreenSize from '../../../hooks/useScreenSize';
import { DatesAndCategoriesProps } from '../../../types/sliderTypes';
import CategorySelection from '../CategorySelection/CategorySelection';
import Years from '../Years/Years';
import Wrapper from './DatesAndCategories.styled';

const DatesAndCategories = ({
  startingYear,
  endingYear,
  currentCategoryID,
  handleNewCategoryID,
}: DatesAndCategoriesProps) => {
  const { screenSize } = useScreenSize();

  return (
    <Wrapper>
      <Years startingYear={startingYear} endingYear={endingYear} />
      {screenSize.width > 767 && (
      <CategorySelection
        currentCategoryID={currentCategoryID}
        handleNewCategoryID={handleNewCategoryID}
      />
      )}
    </Wrapper>
  );
};

export default DatesAndCategories;
