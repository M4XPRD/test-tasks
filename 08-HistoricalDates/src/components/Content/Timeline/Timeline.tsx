import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { TimelineProps } from '../../../types/sliderTypes';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import {
  Wrapper,
  EventWrapper,
  CurrentYear,
  Paragraph,
} from './Timeline.styled';
import useScreenSize from '../../../hooks/useScreenSize';
import getSlidesPerView from '../../../utils/getSlidesPerView';

const Timeline = ({ years, category, categoryKey }: TimelineProps) => {
  const { screenSize } = useScreenSize();

  return (
    <Wrapper>
      <Swiper
        key={categoryKey}
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={getSlidesPerView(screenSize.width)}
        navigation={screenSize.width > 767}
      >
        {years.map((year: number, index: number) => (
          <SwiperSlide key={`${years}_${years.indexOf(year)}`}>
            <EventWrapper key={years.indexOf(year)}>
              <CurrentYear key={year}>{year}</CurrentYear>
              <Paragraph key={category[index]}>{category[index]}</Paragraph>
            </EventWrapper>
          </SwiperSlide>
        ))}
      </Swiper>
    </Wrapper>
  );
};

export default Timeline;
