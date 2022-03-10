import React, { FC } from 'react'

import { ThemeProvider, Theme, StyledEngineProvider, adaptV4Theme } from '@mui/material/styles';
import { createTheme, responsiveFontSizes } from '@mui/material/styles'

import { colors, Colors, paletteColors } from '@acter/components/themes/colors'
import { typography } from '@acter/components/themes/fonts'


declare module '@mui/styles/defaultTheme' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends Theme {}
}


declare module '@mui/material/styles/createTheme' {
  interface Theme {
    colors: Colors
  }
  interface DeprecatedThemeOptions {
    colors: Colors
  }
}

declare module '@mui/material/styles/createMixins' {
  interface SidebarMixin {
    primaryWidth: number
    secondaryWidth: number
  }
  interface Mixins {
    sidebar: SidebarMixin
  }
}

export const theme = createTheme(adaptV4Theme({
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
}))

export const acterTheme = responsiveFontSizes(theme)

export const ActerThemeProvider: FC = ({ children }) => (
  <StyledEngineProvider injectFirst>
    <ThemeProvider theme={acterTheme}>{children}</ThemeProvider>
  </StyledEngineProvider>
)
