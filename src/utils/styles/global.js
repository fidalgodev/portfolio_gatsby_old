import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

    html {
      font-size: 62.5%; //1rem = 10px
      overflow-x: hidden;
      box-sizing: border-box;
      overflow-y: scroll;
      line-height: 1.15;

      @media ${props => props.theme.mediaQueries.largest} {
          font-size: 60%;
      }

      @media ${props => props.theme.mediaQueries.large} {
          font-size: 57.5%;
      }

      @media ${props => props.theme.mediaQueries.small} {
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
      --primary: ${props => props.theme.colors.main};
      --primary-light: ${props => props.theme.colors.light};
      --primary-lighter: ${props => props.theme.colors.lighter};
      --navbar: rgba(255, 255, 255, 0.95);
      --text: ${props => props.theme.colors.lightTheme.text};
      --text-highlight: ${props => props.theme.colors.lightTheme.textHighlight};
      --background: ${props => props.theme.colors.lightTheme.background};
      --white: #fff;
      --shadow-btn: rgba(7, 49, 69, .1);
      --shadow-color: rgba(0, 0, 0, 0.1);
      background-color: var(--background);

      &.light-mode {
      --navbar: rgba(255, 255, 255, 0.95);
      --text: ${props => props.theme.colors.lightTheme.text};
      --text-highlight: ${props => props.theme.colors.lightTheme.textHighlight};
      --background: ${props => props.theme.colors.lightTheme.background};
      }

      &.dark-mode {
        --navbar: rgba(33, 33, 33, 0.95);
        --text: ${props => props.theme.colors.darkTheme.text};
        --text-highlight: ${props =>
          props.theme.colors.darkTheme.textHighlight};
        --background: ${props => props.theme.colors.darkTheme.background};
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
