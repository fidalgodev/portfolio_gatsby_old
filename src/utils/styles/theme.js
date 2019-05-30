const theme = {
  colors: {
    main: '#127EB1',
    light: '#089ECA',
    lighter: '#36A6BA',
    lightTheme: {
      text: '#575757',
      textHighlight: '#333',
      background: '#fff',
    },
    darkTheme: {
      text: '#dadada',
      textHighlight: '#F0F0F0',
      background: '#212121',
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
