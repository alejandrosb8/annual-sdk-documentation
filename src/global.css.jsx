import { createGlobalStyle } from 'styled-components';
import { COLORS } from './utils/constants';

export default createGlobalStyle`

  @import url('https://fonts.googleapis.com/css2?family=Oxygen:wght@300;400;700&display=swap');

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
      font-size: 62.5%;
      font-family: 'Oxygen', sans-serif;
      scroll-behavior: smooth;
  }
  body {
    background-color: ${COLORS.primary};
    min-height: 100vh;
  }
`;
