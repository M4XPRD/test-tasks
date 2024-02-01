import styled from 'styled-components';

export const Wrapper = styled.section`
  box-sizing: border-box;

  display: flex;
  align-self: flex-start;
  flex-direction: row;

  width: 100%;

  padding-left: 80px;
  padding-right: 80px;

  @media (max-width: 767px) {
    padding-left: 20px;
    padding-right: 0;
  }
`;

export const EventWrapper = styled.article`
  display: flex;
  flex-direction: column;
  gap: 15px;

  max-width: 400px;

  cursor: pointer;
`;

export const CurrentYear = styled.div`
  font-family: var(--font-family-secondary);
  font-size: var(--fs-m);
  font-weight: var(--fw-standart);
  color: var(--colour-small-date);

  @media (max-width: 1100px) and (min-height: 600px) {
    font-size: var(--fs-s);
  }

  @media (max-width: 767px) {
    font-size: var(--fs-s);
  }

  @media (max-width: 450px) {
    font-size: var(--fs-xs);
  }
`;

export const Paragraph = styled.p`
  font-family: var(--font-family);
  font-size: var(--fs-s);
  font-weight: var(--fw-standart);
  color: var(--colour-main);
  hyphens: auto;

  @media (max-width: 1100px) and (min-height: 600px) {
    font-size: var(--fs-xs);
  }

  @media (max-width: 767px) {
    font-size: var(--fs-xs);
  }

  @media (max-width: 450px) {
    font-size: var(--fs-xxs);
  }
`;
