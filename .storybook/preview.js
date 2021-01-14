import React from 'react'
import { ActerThemeProvider } from '../src/themes/acter-theme'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
}

export const decorators = [
  (story) => <ActerThemeProvider>{story()}</ActerThemeProvider>,
]
