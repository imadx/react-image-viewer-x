import styled from "styled-components";

export const StyledButton = styled.button`
  background: none;
  border: none;
  color: white;
  padding: 0.5rem;
  opacity: 0.7;
  cursor: pointer;
  transition: opacity .15s;

  &:hover {
    opacity: 1;
  }
`;
