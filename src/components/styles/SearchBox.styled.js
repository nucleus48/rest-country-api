import styled from "styled-components";
import { StyledElement } from "./Global";

export const StyledSearchBox = styled(StyledElement)`
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 1rem 2rem;

  input {
    flex: 1;
    outline: 0;
    border: 0;
    background: transparent;
  }

  input,
  input::placeholder {
    font-size: 1rem;
    font-weight: 300;
    font-family: Nunito Sans, sans-serif;
    color: ${({ theme }) => theme.input};
  }
`;
