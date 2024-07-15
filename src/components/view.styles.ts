import styled from "styled-components";

export const StyledDivContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 5;
  overflow: auto;

  &::-webkit-scrollbar {
    display: none;
  }

  & {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`;

export const StyledCanvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  object-fit: contain;
  cursor: move;
`;
