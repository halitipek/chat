const INITIAL_STATE = {
  palette: {
    primary: {
      light: '#72f0e4',
      main: '#35bdb2',
      dark: '#008c83',
      contrastText: '#000000',
    },
    secondary: {
      light: '#8fef7a',
      main: '#5cbc4b',
      dark: '#238b1b',
      contrastText: '#000000',
    },
  },
}

export default (state = INITIAL_STATE, { type, payload }) => {
  return state
}
