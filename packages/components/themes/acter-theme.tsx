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

declare module '@material-ui/core/styles/createMixins' {
  interface SidebarMixin {
    primaryWidth: number
    secondaryWidth: number
  }
  interface Mixins {
    sidebar: SidebarMixin
  }
}

export const theme = createTheme({
  palette: paletteColors,

  colors: colors,

  typography: typography,

  props: {
    MuiButton: {
      disableElevation: true,
      disableRipple: true,
    },
  },

  mixins: {
    sidebar: {
      primaryWidth: 8,
      secondaryWidth: 22,
    },
  },
})

export const acterTheme = responsiveFontSizes(theme)

export const ActerThemeProvider: FC = ({ children }) => (
  <ThemeProvider theme={acterTheme}>{children}</ThemeProvider>
)
