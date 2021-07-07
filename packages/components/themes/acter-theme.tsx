import React, { FC } from 'react'
import { ThemeProvider } from '@material-ui/core/styles'
import { green } from '@material-ui/core/colors'
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'
import '@acter/components/themes/fonts'

export const theme = createMuiTheme({
  palette: {
    primary: green,
    secondary: {
      main: '#545559',
      dark: '#2A2A2A',
      light: '#D5D5D5',
      contrastText: '#D5D5D5',
    },
    background: {
      default: '#EEEDF0',
    },
  },

  typography: {
    fontFamily: 'Montserrat',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },

  props: {
    /* disable elevation for buttons  */
    MuiButton: {
      disableElevation: true,
    },
  },
})

export const acterTheme = responsiveFontSizes(theme)

export const ActerThemeProvider: FC = ({ children }) => (
  <ThemeProvider theme={acterTheme}>{children}</ThemeProvider>
)
