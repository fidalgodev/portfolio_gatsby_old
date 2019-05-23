const theme = {
  colors: {
    main: '#0E81B7',
    light: '#089ECA',
    lighter: '#36A6BA',
    lightTheme: {
      text: '#7b7b7b',
      textHighlight: '#333',
      background: '#fff',
    },
    darkTheme: {
      textDarkHighlight: '#BCBCBC',
      textHighlight: '#F0F0F0',
      background: '#171717',
    },
  },
  mediaQueries: {
    smallest: `only screen and (max-width: 25em)`,
    smaller: 'only screen and (max-width: 31.25em)',
    small: 'only screen and (max-width: 37.5em)',
    medium: 'only screen and (max-width: 56.25em)',
    large: 'only screen and (max-width: 80em)',
    larger: 'only screen and (max-width: 90em)',
    largest: 'only screen and (max-width: 97em)',
  },
};

export default theme;
