import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
        
    margin: 1rem 0;
    background-color: black;
    color: white;
  }

  * {
    box-sizing: border-box;
  }
`;

export { GlobalStyles };
