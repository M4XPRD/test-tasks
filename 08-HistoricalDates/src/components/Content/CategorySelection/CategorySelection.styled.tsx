import styled from 'styled-components';
import { DotProps } from '../../../types/sliderTypes';

export const EllipseWrapper = styled.div`
  position: fixed;

  display: flex;
  justify-content: center;
  width: 76%;
`;

export const Ellipse = styled.div`
  box-sizing: border-box;

  width: 530px;
  height: 530px;

  border: 1px solid rgba(66, 86, 122, 0.2);
  border-radius: 50%;

  @media (max-width: 1700px) {
    width: 450px;
    height: 450px;
  }

  @media (max-width: 1500px) and (min-height: 650px) {
    width: 400px;
    height: 400px;
  }

  @media (max-width: 1400px) {
    width: 400px;
    height: 400px;
  }

  @media (max-width: 1200px) {
    width: 350px;
    height: 350px;
  }

  @media (max-width: 1100px) and (min-height: 600px) {
    width: 300px;
    height: 300px;
  }

  @media (max-width: 1000px) {
    width: 300px;
    height: 300px;
  }
`;

export const Line = styled.div`
  position: absolute;
  width: 100%;
  border-bottom: 1px solid rgba(66, 86, 122, 0.1);
  top: 50%;
  right: 0;

  z-index: -1;
`;

export const DotsContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const DotText = styled.span`
  position: absolute;
  width: 100px;
  padding-left: 194px;

  color: var(--colour-main);
  font-size: var(--fs-s);

  pointer-events: none;
`;

export const DotCircle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  box-sizing: border-box;
  position: absolute;
  top: 50%;
  left: 50%;

  width: 6px;
  height: 6px;

  background-color: var(--colour-main);
  border: 1px solid var(--colour-dot);
  border-radius: 50%;

  font-size: var(--fs-s);
  color: var(--colour-main);

  opacity: 0;
  transform: translate(-50%, -50%);
  transition: all 0.3s ease-in;

  z-index: 100;
`;

export const Dot = styled.div<DotProps>`
  position: absolute;

  display: flex;
  align-items: center;
  justify-content: center;

  ${({ $position }) => $position};
  ${({ transform }) => `transform: ${transform.hoverTransform};`}
  width: 6px;
  height: 6px;
  background-color: var(--colour-main);
  border-radius: 50%;

  cursor: pointer;
  transition: all 0.3s ease-in;
  z-index: 100;

  &::before {
    content: '';
    position: absolute;
    top: -20px;
    left: -20px;
    right: -20px;
    bottom: -20px;
  }

  &:hover ${DotCircle}, &.active ${DotCircle} {
    width: 56px;
    height: 56px;

    background-color: var(--colour-background);
    border: 1px solid var(--colour-dot);

    opacity: 1;
    transform: translate(-50%, -50%);
    transition: all 0.3s ease-in;
  }

  &:hover,
  &.active {
    background-color: var(--colour-background);
  }

  ${DotText} {
    opacity: 0;
  }

  &.active {
    ${DotText} {
      opacity: 1;
      transition: opacity 0.3s ease-in;
      transition-delay: 0.4s;
    }
  }
`;
