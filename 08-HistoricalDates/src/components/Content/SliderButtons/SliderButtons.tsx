import { SliderButtonsProps } from '../../../types/sliderTypes';
import arrow from '../../../assets/button-arrow.svg';
import mobileArrow from '../../../assets/button-arrow-mobile.svg';
import {
  CurrentSlider,
  ButtonsWrapper,
  Button,
  ButtonArrow,
  DesktopWrapper,
  Wrapper,
} from './SliderButtons.styled';
import useScreenSize from '../../../hooks/useScreenSize';
import MobileSliderPagination from '../Mobile/MobileSliderPagination/MobileSliderPagination';

const SliderButtons = ({
  currentSlide,
  handleNextSlide,
  handlePreviousSlide,
  slidersLength,
  formattedCurrentSlide,
  totalSliders,
}: SliderButtonsProps) => {
  const { screenSize } = useScreenSize();

  const arrows = (
    <>
      <Button
        type="button"
        onClick={handlePreviousSlide}
        disabled={currentSlide === 1}
      >
        <ButtonArrow src={screenSize.width < 768 ? mobileArrow : arrow} />
      </Button>
      <Button
        type="button"
        onClick={handleNextSlide}
        disabled={currentSlide >= slidersLength}
      >
        <ButtonArrow src={screenSize.width < 768 ? mobileArrow : arrow} style={{ transform: 'rotate(180deg)' }} />
      </Button>
    </>
  );

  return (
    <Wrapper>
      <DesktopWrapper>
        <CurrentSlider>{`${formattedCurrentSlide}/${totalSliders}`}</CurrentSlider>
        <ButtonsWrapper>{arrows}</ButtonsWrapper>
      </DesktopWrapper>
      {screenSize.width < 768 && <MobileSliderPagination />}
    </Wrapper>
  );
};

export default SliderButtons;
