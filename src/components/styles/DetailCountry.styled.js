import styled from "styled-components";
import { StyledElement } from "./Global";

export const StyledDetail = styled.div`
  padding: 2rem 1rem;

  img {
    width: 100%;
    height: 250px;
    border: 5px solid ${({ theme }) => theme.shadow};
    border-radius: 5px;
    margin: 2rem 0 3rem 0;
  }

  & > div:nth-child(2) {
    font-size: 1.5rem;
    font-weight: 800;
    margin-bottom: 2em;
  }

  & > div:nth-child(3),
  & > div:nth-child(4) {
    margin-bottom: 3rem;
  }

  & > div > div > span {
    font-weight: 300;
  }

  & > div > div {
    margin-bottom: .5rem;
  }
  & > div:last-of-type {
    font-size: 1.3rem;
  } 
`;

export const StyledButton = styled(StyledElement)`
	  width: 10rem;
    margin: 2rem 0 0 1rem;
    padding: .5rem 2rem;
		display: flex;
		align-items: center;
		gap: 2rem;
    text-decoration: none;
    color: ${({ theme }) => theme.text};
`;

export const StyledBorders = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 1rem;
  row-gap: .5rem;
  font-size: 1rem;

  a {
    text-decoration: none;
    border-radius: 3px;
    padding: .5rem 1.2rem;
    font-weight: 300;
    font-size: .9rem;

    ${({ theme }) => `
      color: ${theme.text};
      border: 3px solid ${theme.shadow};
      background: ${theme.element};
    `}
  }
`;
