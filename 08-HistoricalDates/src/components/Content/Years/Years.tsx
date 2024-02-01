import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import { TextPlugin } from 'gsap/all';
import useSliderLogic from '../../../hooks/useSliderLogic';
import useSliderData from '../../../hooks/useSliderData';
import { YearsProps } from '../../../types/sliderTypes';
import { YearsWrapper, YearFrom, YearTo } from './Years.styled';

const Years = ({ startingYear, endingYear }: YearsProps) => {
  gsap.registerPlugin(TextPlugin);
  const { currentSlide, previousSlide, currentCategoryID } = useSliderLogic();
  const previousSlideData = useSliderData(previousSlide, currentCategoryID);

  const previousStartingYear = previousSlideData.startingYear;
  const previousEndingYear = previousSlideData.endingYear;

  const startingYearRef = useRef(null);
  const endingYearRef = useRef(null);

  useEffect(() => {
    const animateYears = (
      ref: React.RefObject<HTMLElement>,
      fromYear: number,
      toYear: number,
    ) => {
      const timeline = gsap.timeline({ defaults: { ease: 'none' } });
      const step = fromYear < toYear ? 1 : -1;

      for (
        let year = fromYear;
        step > 0 ? year <= toYear : year >= toYear;
        year += step
      ) {
        timeline.to(ref.current, {
          duration: 0.05,
          text: String(year),
        });
      }
      return timeline;
    };

    const startTimeline = animateYears(
      startingYearRef,
      previousStartingYear,
      startingYear,
    );
    const endTimeline = animateYears(
      endingYearRef,
      previousEndingYear,
      endingYear,
    );

    gsap.timeline().add(startTimeline, 0).add(endTimeline, 0);
  }, [
    currentSlide,
    startingYear,
    endingYear,
    previousStartingYear,
    previousEndingYear,
  ]);

  return (
    <YearsWrapper>
      <YearFrom ref={startingYearRef}>{previousStartingYear}</YearFrom>
      <YearTo ref={endingYearRef}>{previousEndingYear}</YearTo>
    </YearsWrapper>
  );
};

export default Years;
