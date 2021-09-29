import { ActerThemeProvider } from '@acter/components/themes/acter-theme'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (story) => <ActerThemeProvider>{story()}</ActerThemeProvider>,
]
