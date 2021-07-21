import React, { FC } from 'react'
import { ThemeProvider } from '@material-ui/core/styles'
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'
import { typography } from '@acter/components/themes/fonts'
import { colors, Colors, paletteColors } from '@acter/components/themes/colors'
declare module '@material-ui/core/styles/createMuiTheme' {
  interface Theme {
    colors: Colors
  }
  interface ThemeOptions {
    colors: Colors
  }
}

export const theme = createMuiTheme({
  palette: paletteColors,

  colors: colors,

  typography: typography,

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
