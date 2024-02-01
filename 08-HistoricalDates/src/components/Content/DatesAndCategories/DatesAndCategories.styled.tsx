import styled from 'styled-components';

const Wrapper = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  font-family: var(--font-family);
  font-size: var(--fs-xl);
  font-weight: var(--fw-bold);

  max-height: 160px;

  @media (max-width: 1700px) {
    font-size: calc(var(--fs-xl) - 1rem);
  }

  @media (max-width: 1400px) {
    font-size: calc(var(--fs-xl) - 2rem);
  }

  @media (max-width: 1200px) {
    font-size: calc(var(--fs-xl) - 3.5rem);
  }

  @media (max-width: 1000px) {
    font-size: calc(var(--fs-xl) - 5rem);
  }
`;

export default Wrapper;
