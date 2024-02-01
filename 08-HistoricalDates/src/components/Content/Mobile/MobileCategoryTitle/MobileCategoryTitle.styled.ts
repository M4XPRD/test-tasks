import styled from 'styled-components';

const Div = styled.div`
font-family: var(--font-family);
  font-size: var(--fs-s);
  font-weight: var(--fw-bold);

  color: var(--colour-main);

  align-self: flex-start;
  padding-left: 20px;
  margin-bottom: 10px;

  @media (max-width: 450px) {
    font-size: var(--fs-xs);
    margin-bottom: 0;
  }
`;

export default Div;
