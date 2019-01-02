import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';
import { semiotic } from './semiotic';

export const fontFamilies = `
  @font-face {
    font-family: 'Rubik-Regular';
    src: url('./fonts/rubik/Rubik-Regular.woff2') format('woff2'),
        url('./fonts/rubik/Rubik-Regular.woff') format('woff')
  }
  
  @font-face {
    font-family: 'Rubik-Medium';
    src: url('./fonts/rubik/Rubik-Medium.woff2') format('woff2'),
        url('./fonts/rubik/Rubik-Medium.woff') format('woff')
  }

  @font-face {
    font-family: 'GTCinetype-Light';
    src: url('./fonts/cinetype/gt-cinetype-light.woff2') format('woff2'),
        url('./fonts/cinetype/gt-cinetype-light.woff') format('woff')
  }
  
  @font-face {
    font-family: 'GTCinetype-Italic';
        url('./fonts/cinetype/gt-cinetype-italic.woff') format('woff'),
        src: url('./fonts/cinetype/gt-cinetype-regular-italic.woff2') format('woff2')
  }
 
  @font-face {
    font-family: 'GTCinetype-Light-Italic';
    src: url('./fonts/cinetype/gt-cinetype-light-italic.woff2') format('woff2'),
        url('./fonts/cinetype/gt-cinetype-light-italic.woff') format('woff')
  }

  @font-face {
    font-family: 'GTCinetype-Regular';
    src: url('./fonts/cinetype/gt-cinetype-regular.woff2') format('woff2'),
        url('./fonts/cinetype/gt-cinetype-regular.woff') format('woff')
  }

  @font-face {
    font-family: 'GTCinetype-Bold';
    src: url('./fonts/cinetype/gt-cinetype-bold.woff2') format('woff2'),
        url('./fonts/cinetype/gt-cinetype-bold.woff') format('woff')
  }
 
  @font-face {
    font-family: 'GTCinetype-Bold-Italic';
    src: url('./fonts/cinetype/gt-cinetype-bold-italic.woff2') format('woff2'),
        url('./fonts/cinetype/gt-cinetype-bold-italic.woff') format('woff')
  }
  
  @font-face {
    font-family: 'GTCinetype-Mono';
    src: url('./fonts/cinetype/gt-cinetype-mono.woff2') format('woff2'),
        url('./fonts/cinetype/gt-cinetype-mono.woff') format('woff')
  }
`;

export const GlobalStyle = createGlobalStyle`
  ${fontFamilies}

  body:not(.user-is-tabbing) button:focus,
  body:not(.user-is-tabbing) select:focus{
    outline: none;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
    font-size: inherit;
    font-family: inherit;
    font-weight: inherit;
    line-height: inherit;
    margin: 0;
    padding: 0;
  }

  html,
  body {
    margin: 0;
  }

  html {
    box-sizing: border-box;
    font-size: ${theme.fontSizeDefault[0]}px;
    font-family: ${theme.fonts.gtCinetypeLight};
    letter-spacing: 0.05rem;
    font-weight: 400;
    line-height: 2rem;
  
    @media (max-width: ${theme.media.tablet - 1}px) {
      -webkit-user-select: none;
      -webkit-touch-callout: none;
      -webkit-tap-highlight-color: transparent;
    }

    @media (min-width: ${theme.media.tablet}px) {
      font-size: ${theme.fontSizeDefault[1]}px;
    }
  }

  body {
    background: #fff;
    color: ${theme.colors.secondaryText};
    overflow-x: hidden !important;
    height: 100%;
    width: 100%;
    -webkit-overflow-scrolling: touch;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${theme.fonts.gtCinetypeBold};
    color: ${theme.colors.primaryDarkBlue};
  }

  ${semiotic}
`;
