import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
      outline: none;
      box-sizing: border-box;
    }

    *,
    *::before,
    *::after {
      box-sizing: inherit;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    html {
      font-size: 62.5%; //1rem = 10px
      box-sizing: border-box;
      line-height: 1.15;
      font-weight: 400;
      @media ${props => props.theme.mediaQueries.largest} {
          font-size: 57.5%;
      }

      @media ${props => props.theme.mediaQueries.large} {
          font-size: 55%;
      }
    }

    body {
      font-family: 'Montserrat', sans-serif;
      margin: 0;
      --primary: ${props => props.theme.colors.main};
      --primary-light: ${props => props.theme.colors.light};
      --primary-lighter: ${props => props.theme.colors.lighter};
      --text: ${props => props.theme.colors.lightTheme.text};
      --text-Hightlight: ${props =>
        props.theme.colors.lightTheme.textHighlight};
      --background: ${props => props.theme.colors.lightTheme.background};
      --navbar: rgba(255, 255, 255, 0.75);
      --footer:  ${props => props.theme.colors.main};
      --shadow-color: rgba(0, 0, 0, 0.05);
      --shadow-color-dark: rgba(0, 0, 0, 0.2);
      color: var(--text);

      & .dark {
        --primary: ${props => props.theme.colors.main};
        --primary-light: ${props => props.theme.colors.light};
        --primary-lighter: ${props => props.theme.colors.lighter};
        --text: ${props => props.theme.colors.darkTheme.text};
        --text-Hightlight: ${props =>
          props.theme.colors.darkTheme.textHighlight};
        --background: ${props => props.theme.colors.darkTheme.background};
        --navbar: rgba(0, 0, 0, 0.75);
        --footer:  ##1F1F1F;
        color: var(--text);
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
