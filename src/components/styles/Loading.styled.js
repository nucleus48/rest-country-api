import styled, { keyframes } from "styled-components";

const animate = keyframes`
  0% { transform: rotateZ(0deg); }
  100% { transform: rotateZ(360deg); }
`;

export const StyledLoading = styled.div`
  height: 100vh;
  display: grid;
  place-items: center;
  font-size: 2rem;

  svg {
    animation: ${animate} 1s linear infinite;
  }
`;
