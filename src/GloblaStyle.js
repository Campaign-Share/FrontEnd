import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@import url(//fonts.googleapis.com/earlyaccess/notosanskr.css);
  body, html, #root {
    margin: 0;
    padding: 0;
    height: 100vh;
    font-family: "Noto Sans KR", sans-serif
  }
`;

export default GlobalStyle;
