import { DiProvider } from 'react-magnetic-di/macro'

import { RouterContext } from 'next/dist/shared/lib/router-context'
import * as NextImage from 'next/image'

import { MockedProvider } from '@apollo/client/testing'
import { UserContext } from '@auth0/nextjs-auth0'

import { ActerThemeProvider } from '@acter/components/themes/acter-theme'
import {
  useActerDi,
  useActerSearchDi,
  usePostsDi,
  useSearchTypeDi,
  useSnackbarDi,
  useUserDi,
} from '@acter/lib/di'

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
  apolloClient: {
    MockedProvider,
  },
  options: {
    storySort: {
      order: ['Atoms', 'Molecules', 'Organisms', 'Layouts', 'Pages'],
    },
  },
}

export const decorators = [
  (story, props) => {
    const {
      parameters: {
        di: {
          useActer = useActerDi(),
          useActerSearch = useActerSearchDi(),
          usePosts = usePostsDi(),
          useSearchType = useSearchTypeDi(),
          useSnackbar = useSnackbarDi(),
          useUser = useUserDi(),
        } = {},
      },
    } = props
    return (
      <DiProvider
        use={[
          useActer,
          useActerSearch,
          usePosts,
          useSearchType,
          useSnackbar,
          useUser,
        ]}
      >
        <MockedProvider>
          <UserContext.Provider
            value={{ user: { name: 'damon' }, isLoading: false }}
          >
            <ActerThemeProvider>{story()}</ActerThemeProvider>
          </UserContext.Provider>
        </MockedProvider>
      </DiProvider>
    )
  },
]
