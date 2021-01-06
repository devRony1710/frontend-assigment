import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }

  @media screen and (max-width: 700px) {
    body {
      width: 100%;
    }
  }
`;
