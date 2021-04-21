import React, { FC } from 'react'
import { ThemeProvider } from '@material-ui/core/styles'
import { green, grey } from '@material-ui/core/colors'
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'
import 'src/themes/fonts'

export const theme = createMuiTheme({
  palette: {
    primary: green,
    secondary: grey,
    background: {
      default: grey[200],
    },
  },
  typography: {
    fontFamily: 'Montserrat',
  },
})

export const acterTheme = responsiveFontSizes(theme)

export const ActerThemeProvider: FC = ({ children }) => (
  <ThemeProvider theme={acterTheme}>{children}</ThemeProvider>
)
