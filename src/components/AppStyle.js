import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html, body {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    background-color: #000;
    color: #fff;
  }
`;

export default GlobalStyle;
