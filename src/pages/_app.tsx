import 'reflect-metadata'

import type { AppProps } from 'next/app'

import { get } from 'lodash'

import { Provider as NextAuthProvider } from 'next-auth/client'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'

import CssBaseline from '@material-ui/core/CssBaseline'
import { ActerThemeProvider } from 'src/themes/acter-theme'

const ActerApp = ({ Component, pageProps }: AppProps) => {
  const client = new ApolloClient({
    uri: 'http://localhost:3000/api/graphql',
    cache: new InMemoryCache(),
  })

  return (
    <ApolloProvider client={client}>
      <NextAuthProvider session={pageProps.session}>
        <ActerThemeProvider>
          <CssBaseline />
          <Component {...pageProps} />
        </ActerThemeProvider>
      </NextAuthProvider>
    </ApolloProvider>
  )
}

export default ActerApp
