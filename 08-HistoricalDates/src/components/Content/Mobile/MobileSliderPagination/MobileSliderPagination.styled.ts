import styled from 'styled-components';

export const PaginationWrapper = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);

  display: flex;
  gap: 10px;

  z-index: 100;
`;

export const PaginationDot = styled.button`
  border: none;

  width: 10px;
  height: 10px;

  background-color: var(--colour-main);
  border-radius: 50%;

  opacity: 40%;

  cursor: pointer;

  &.active {
    opacity: 1;
    transition: all 0.3s ease-out;
  }

  @media (max-width: 450px) {
    width: 6px;
    height: 6px;
  }
`;
