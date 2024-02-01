import { MobileCategoryTitleProps } from '../../../../types/sliderTypes';
import { categoriesNameMapping } from '../../../../utils/slidersData';
import Div from './MobileCategoryTitle.styled';

const MobileCategoryTitle = ({ currentCategoryID }: MobileCategoryTitleProps) => (
  <Div>{categoriesNameMapping[currentCategoryID]}</Div>
);

export default MobileCategoryTitle;
