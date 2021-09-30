import { RouterContext } from 'next/dist/shared/lib/router-context'
import * as NextImage from 'next/image'

import { MockedProvider } from '@apollo/client/testing'
import { UserContext } from '@auth0/nextjs-auth0'

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
  apolloapolloClient: {
    MockedProvider,
  },
}

export const decorators = [
  (story) => (
    <MockedProvider>
      <UserContext.Provider
        value={{ user: { name: 'damon' }, isLoading: false }}
      >
        <ActerThemeProvider>{story()}</ActerThemeProvider>
      </UserContext.Provider>
    </MockedProvider>
  ),
]
