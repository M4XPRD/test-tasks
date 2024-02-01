import styled from 'styled-components';

export const YearsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 6rem;

  padding-right: 5px;
  padding-bottom: 15px;

  font-size: var(--fs-xxl);
  color: var(--colour-date-from);
  letter-spacing: -0.02em;
  max-height: 160px;

  z-index: 0;

  @media (max-width: 1700px) {
    font-size: calc(var(--fs-xxl) - 2rem);
    gap: 5rem;
  }

  @media (max-width: 1400px) {
    font-size: calc(var(--fs-xxl) - 3rem);
    gap: 2rem;
  }

  @media (max-width: 1500px) and (min-height: 650px) {
    font-size: calc(var(--fs-xxl) - 3rem);
    gap: 4rem;
  }

  @media (max-width: 1200px) {
    font-size: calc(var(--fs-xxl) - 4rem);
    gap: 3rem;
  }

  @media (max-width: 1100px) and (min-height: 600px) {
    font-size: calc(var(--fs-xxl) - 5rem);
    gap: 2rem;
  }

  @media (max-width: 1000px) {
    font-size: calc(var(--fs-xxl) - 5rem);
  }

  @media (max-width: 768px) {
    font-size: var(--fs-xl);
    gap: 4.8rem;
  }

  @media (max-width: 600px) {
    font-size: calc(var(--fs-xl) - 1rem);
    gap: 2rem;
  }

  @media (max-width: 450px) {
    font-size: var(--fs-l);
  }

  @media (max-width: 310px) {
    font-size: calc(var(--fs-l) - 0.5rem);
  }
`;

export const YearFrom = styled.div`
  display: flex;
  align-items: center;
  max-height: 160px;

  color: var(--colour-date-from);
`;

export const YearTo = styled.div`
  display: flex;
  align-items: center;
  max-height: 160px;

  color: var(--colour-date-to);
`;
