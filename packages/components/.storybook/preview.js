import { RouterContext } from 'next/dist/shared/lib/router-context'
import * as NextImage from 'next/image'

import { UserContext } from '@auth0/nextjs-auth0'

import { SnackbarProvider } from 'notistack'

import { ActerThemeProvider } from '@acter/components/themes/acter-theme'

const OriginalNextImage = NextImage.default

Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props) => {
    return <OriginalNextImage {...props} unoptimized />
  },
})

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  nextRouter: {
    Provider: RouterContext.Provider,
  },
  options: {
    storySort: {
      order: ['Atoms', 'Molecules', 'Organisms', 'Layouts', 'Pages'],
    },
  },
}

export const decorators = [
  (story) => {
    return (
      <SnackbarProvider>
        <UserContext.Provider
          value={{ user: { name: 'damon' }, isLoading: false }}
        >
          <ActerThemeProvider>{story()}</ActerThemeProvider>
        </UserContext.Provider>
      </SnackbarProvider>
    )
  },
]
