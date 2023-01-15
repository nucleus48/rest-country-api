import styled from "styled-components";
import { StyledElement } from "./Global";

export const StyledCountry = styled(StyledElement)`
  width: 70%;
  margin: 0 auto;
  overflow: hidden;
  
  img {
    width: 100%;
    height: clamp(150px, .1rem, 200px);
    border-bottom: 5px solid ${({ theme }) => theme.shadow};
  }

  & > div {
    padding: 1.5rem 1.5rem 2.5rem 1.5rem;
  }

  & > div > div:first-of-type {
    font-size: 1.4rem;
    margin-bottom: 1.2rem;
  }

  & > div > div > div {
    margin-bottom: .5em;
  }

  & > div > div > div > span {
    font-weight: 300;
  }
`;
