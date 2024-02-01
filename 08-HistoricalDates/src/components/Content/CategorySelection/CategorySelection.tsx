import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef, useState } from 'react';
import { CategorySelectionProps } from '../../../types/sliderTypes';
import dotsPositionMapping from '../../../utils/dotsPositionsMapping';
import { categoriesNameMapping } from '../../../utils/slidersData';
import {
  EllipseWrapper,
  Ellipse,
  DotsContainer,
  Dot,
  DotText,
  Line,
  DotCircle,
} from './CategorySelection.styled';
import calculateRotation from '../../../utils/calculateRotation';
import updateDotsAngles from '../../../utils/updateDotsAngles';

const CategorySelection = ({
  currentCategoryID,
  handleNewCategoryID,
}: CategorySelectionProps) => {
  const [isAnimating, setIsAnimating] = useState(false);

  const dotsContainerRef = useRef(null);
  const { contextSafe } = useGSAP({ scope: dotsContainerRef });

  const handleDotClick = contextSafe((id: number) => {
    if (id === currentCategoryID || isAnimating) {
      return;
    }

    setIsAnimating(true);

    const angleToRotate = calculateRotation(id);

    gsap.to(dotsContainerRef.current, {
      rotation: `+=${angleToRotate}`,
      duration: 0.5,
      ease: 'power2.inOut',
      onStart: () => {
        handleNewCategoryID(id);
        updateDotsAngles(angleToRotate);
      },
      onComplete: () => {
        setIsAnimating(false);
      },
    });
  });

  return (
    <EllipseWrapper>
      <Ellipse>
        <DotsContainer ref={dotsContainerRef}>
          {dotsPositionMapping.map(
            ({
              id, position, angle, currentRotation,
            }) => (
              <Dot
                key={id}
                transform={{ hoverTransform: `rotate(${currentRotation}deg)` }}
                $position={position}
                data-angle={angle}
                className={id === currentCategoryID ? 'active' : ''}
                onClick={() => handleDotClick(id)}
              >
                <DotCircle>{id}</DotCircle>
                <DotText>{categoriesNameMapping[currentCategoryID]}</DotText>
              </Dot>
            ),
          )}
        </DotsContainer>
        <Line />
      </Ellipse>
    </EllipseWrapper>
  );
};
export default CategorySelection;
