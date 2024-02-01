import styled from 'styled-components';

export const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  width: 100%;
`;

export const DesktopWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  gap: 20px;

  padding-left: 80px;

  font-family: var(--font-family);
  color: var(--colour-main);

  z-index: 1;

  @media (max-width: 767px) {
    padding-left: 20px;
    gap: 11px;
  }
`;

export const CurrentSlider = styled.div`
  font-size: var(--fs-xxs);
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;

  @media (max-width: 767px) {
    gap: 8.33px;
  }
`;

export const ButtonArrow = styled.img`
  opacity: 1;
  transition: opacity 0.3s ease;

  @media (max-width: 1100px) and (min-height: 600px) {
    width: 1rem;
    height: 1rem;
  }
  
  @media (max-width: 767px) {
    width: 0.6rem;
    height: 0.8rem;
  }

  @media (max-width: 450px) {
    width: 6px;
    height: 10px;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 50px;
  height: 50px;

  border-radius: 50%;
  border: 1px solid rgba(66, 86, 122, 0.1);
  background-color: transparent;

  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &:disabled ${ButtonArrow} {
    opacity: 0.5;
  }

  &:hover {
    background-color: #ffffff;
  }

  @media (max-width: 1100px) and (min-height: 600px) {
    width: 40px;
    height: 40px;
  }

  @media (max-width: 767px) {
    width: 35px;
    height: 35px;
  }

  @media (max-width: 450px) {
    width: 25px;
    height: 25px;
  }
`;
