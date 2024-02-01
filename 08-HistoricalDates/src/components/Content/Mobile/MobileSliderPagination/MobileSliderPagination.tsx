import useSliderLogic from '../../../../hooks/useSliderLogic';
import { categoriesMapping } from '../../../../utils/slidersData';
import {
  PaginationDot,
  PaginationWrapper,
} from './MobileSliderPagination.styled';

const MobileSliderPagination = () => {
  const { currentCategoryID, handleNewCategoryID } = useSliderLogic();

  const categoriesEntries = Object.keys(categoriesMapping).map((key) => Number(key));

  return (
    <PaginationWrapper>
      {categoriesEntries.map((categoryID) => (
        <PaginationDot
          key={categoryID}
          onClick={() => handleNewCategoryID(categoryID)}
          className={categoryID === currentCategoryID ? 'active' : ''}
        />
      ))}
    </PaginationWrapper>
  );
};

export default MobileSliderPagination;
