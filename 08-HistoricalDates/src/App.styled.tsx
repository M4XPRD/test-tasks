import styled from 'styled-components';

const Wrapper = styled.div`
    position: relative;

    display: flex;
    align-items: baseline;
    justify-content: center;

    background-color: var(--colour-background);
    height: 100svh;

    user-select: none;

    @media (max-width: 767px) {
      width: 100%
    }
  `;

export default Wrapper;
