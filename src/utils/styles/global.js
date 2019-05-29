import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

    html {
      font-size: 62.5%; //1rem = 10px
      box-sizing: border-box;
      overflow-y: scroll;
      line-height: 1.15;
      @media ${props => props.theme.mediaQueries.largest} {
          font-size: 57.5%;
      }

      @media ${props => props.theme.mediaQueries.large} {
          font-size: 55%;
      }
    }

    * {
      outline: none;
      box-sizing: inherit;
    }

    *,
    *::before,
    *::after {
      box-sizing: inherit;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    body {
      font-family: 'Montserrat', sans-serif;
      margin: 0;
      background-color: var(--background);
      --primary: ${props => props.theme.colors.main};
      --primary-light: ${props => props.theme.colors.light};
      --primary-lighter: ${props => props.theme.colors.lighter};
      --white: #fff;
      --shadow-btn: rgba(14, 129, 183, .25);
      --shadow-color: rgba(0, 0, 0, 0.05);
      --shadow-color-dark: rgba(0, 0, 0, 0.2);

      &.light-mode {
      --navbar: rgba(255, 255, 255, 0.9);
      --text: ${props => props.theme.colors.lightTheme.text};
      --text-highlight: ${props => props.theme.colors.lightTheme.textHighlight};
      --background: ${props => props.theme.colors.lightTheme.background};
      --footer:  ${props => props.theme.colors.main};
      }

      &.dark-mode {
        --navbar: rgba(23, 23, 23, 0.9);
        --text: ${props => props.theme.colors.darkTheme.text};
        --text-highlight: ${props =>
          props.theme.colors.darkTheme.textHighlight};
        --background: ${props => props.theme.colors.darkTheme.background};
        --footer:  #1F1F1F;
      }
    }

    form,
    input,
    textarea,
    button,
    select,
    a {
      -webkit-tap-highlight-color: rgba(0,0,0,0);
    }
`;
