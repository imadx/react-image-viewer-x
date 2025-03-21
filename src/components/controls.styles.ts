import styled from "styled-components";

export const StyledControlsContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 0;
  right: 0;
  margin: 1rem;
  padding: 0.5rem;
  border: solid thin rgb(75 85 99 / 0.3);
	background-color: rgb(75 85 99 / 0.3);
  border-radius: 0.5rem;
  backdrop-filter: blur(1rem);
  z-index: 10;
`;
