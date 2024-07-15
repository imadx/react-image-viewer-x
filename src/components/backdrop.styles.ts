import styled from "styled-components";

export const StyledBackdrop = styled.div`
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: #4B5563;
  filter: blur(1rem) brightness(0.5) grayscale(0.3);
  transform: scale(1.25);
`;
