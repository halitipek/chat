import React from 'react'
import { connect } from 'react-redux'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import merge from 'lodash/merge'

const themeObj = createMuiTheme({
  typography: {
    useNextVariants: true,
  }
})

const ThemeProvider = ({ children, theme }) => {
  merge(themeObj, theme)

  return (
    <MuiThemeProvider theme={themeObj}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  )
}

export default connect(
  ({ theme }) => ({ theme })
)(ThemeProvider)
