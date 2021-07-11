import React, { FC } from 'react'
import { ThemeProvider } from '@material-ui/core/styles'
import { green } from '@material-ui/core/colors'
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'
import '@acter/components/themes/fonts'

type Color = React.CSSProperties['color']

type Grey = {
  extraLight: Color
  light: Color
  main: Color
  dark: Color
}

type Colors = {
  black: Color
  grey: Grey
  white: Color
}
declare module '@material-ui/core/styles/createMuiTheme' {
  interface Theme {
    colors: Colors
  }
  interface ThemeOptions {
    colors: Colors
  }
}

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
  colors: {
    black: '#000',
    grey: {
      extraLight: '#F2F2F2',
      light: '#D9D9D9',
      main: '#929292',
      dark: '#5E5E5E',
    },
    white: '#fff',
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
