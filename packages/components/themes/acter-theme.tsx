import React, { FC } from 'react'

import { ThemeProvider } from '@material-ui/core/styles'
import { createTheme, responsiveFontSizes } from '@material-ui/core/styles'

import { colors, Colors, paletteColors } from '@acter/components/themes/colors'
import { typography } from '@acter/components/themes/fonts'

declare module '@material-ui/core/styles/createTheme' {
  interface Theme {
    colors: Colors
  }
  interface ThemeOptions {
    colors: Colors
  }
}

export const theme = createTheme({
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
