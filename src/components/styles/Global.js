import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html,
  body {
    font-size: 14px;
    font-weight: 600;
    font-family: Nunito Sans, sans-serif;

    ${({ theme }) => `
      background: ${theme.background};
      color: ${theme.text};
    `}
  }
`;

export const StyledElement = styled.div`${({ theme }) => `
  background: ${theme.element};
  border: 5px solid ${theme.shadow};
  border-radius: 7px;
`}`;
