import styled from 'styled-components';

const Wrapper = styled.main`
  position: absolute;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 76%;
  height: 100%;

  @media (max-width: 767px) {
    width: 100%;

    & > :nth-child(4) {
      order: 2;
    }
    & > :nth-child(5) {
      order: 1;
    }
  }
`;

export default Wrapper;
