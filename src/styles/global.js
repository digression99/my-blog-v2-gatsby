import { createGlobalStyle } from 'styled-components';
import OpenSans from '../fonts/OpenSans-Regular.ttf'

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family : Open Sans;
    src : url(${OpenSans});
  }
  
  * {
    font-family: Open Sans, serif;
  }
`
