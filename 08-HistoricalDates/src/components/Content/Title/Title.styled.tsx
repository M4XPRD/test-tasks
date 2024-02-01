import styled from 'styled-components';

export const Wrapper = styled.section`
  display: flex;
  align-self: flex-start;
  flex-direction: row;
  align-items: center;
  gap: 78px;

  margin-top: 61px;

  @media (max-width: 767px) {
    margin-top: 0;
  }
`;

export const VerticalColouredBar = styled.img`
  height: 120px;
`;

export const TitleText = styled.div`
  max-width: 353px;
  max-height: 134px;

  line-height: 67px;
  font-family: var(--font-family);
  font-size: var(--fs-l);
  font-weight: var(--fw-bold);
  color: var(--colour-main);

  @media (max-width: 1500px) {
    font-size: calc(var(--fs-l) - 0.5rem);
    max-width: 300px;
  }

  @media (max-width: 1300px) {
    font-size: calc(var(--fs-l) - 1rem);
    max-width: 300px;
  }

  @media (max-width: 1100px) and (min-height: 600px) {
    font-size: calc(var(--fs-l) - 1.2rem);
  }

  @media (max-width: 768px) {
    margin-left: 20px;

    font-size: var(--fs-m);
  }

  @media (max-width: 450px) {
    font-size: var(--fs-s);
  }
`;
