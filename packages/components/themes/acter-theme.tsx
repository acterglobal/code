import React, { FC } from 'react'

import {
  ThemeProvider,
  Theme,
  StyledEngineProvider,
} from '@mui/material/styles'
import { createTheme, responsiveFontSizes } from '@mui/material/styles'

import { typography } from '@acter/components/themes/fonts'
import { ActivityTypes, InterestTypes } from '@acter/lib/constants'

declare module '@mui/styles/defaultTheme' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends Theme {}
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

declare module '@mui/material/styles' {
  type ActivityTypeColors = {
    [key in ActivityTypes]: Palette['primary']
  }
  type ActivityTypeColorOptions = {
    [key in ActivityTypes]: PaletteOptions['primary']
  }

  type InterestTypeColors = {
    [key in InterestTypes]: Palette['primary']
  }
  type InterestTypeColorOptions = {
    [key in InterestTypes]: PaletteOptions['primary']
  }
  interface Palette {
    blue: Palette['primary']
    activityTypes: ActivityTypeColors
    interestTypes: InterestTypeColors
  }
  interface PaletteOptions {
    blue: PaletteOptions['primary']
    activityTypes: ActivityTypeColorOptions
    interestTypes: InterestTypeColorOptions
  }
}

export const theme = createTheme({
  palette: {
    primary: {
      main: '#1EB001',
    },
    secondary: {
      main: '#1B2941',
      dark: '#071528',
      light: '#3C485D',
      contrastText: '#D5D5D5',
    },
    background: {
      default: '#ECEFF4',
    },
    blue: {
      dark: '#243141',
      main: '#3A527D',
      light: '#3A527D',
    },
    activityTypes: {
      event: { main: '#2A2A2A' },
      project: { main: '#67A24A' },
      idea: { main: '#ECAC3C' },
      meeting: { main: '#5778B2' },
    },
    interestTypes: {
      Economy: { main: '#FFC53B' },
      Environment: { main: '#69B656' },
      Social: { main: '#F29C40' },
      Approach: { main: '#545559' },
      Focus: { main: '#000' },
      Tags: { main: '#000' },
    },
  },

  typography: typography,

  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiButtonGroup: {
      defaultProps: {
        disableElevation: true,
      },
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
  <StyledEngineProvider injectFirst>
    <ThemeProvider theme={acterTheme}>{children}</ThemeProvider>
  </StyledEngineProvider>
)
