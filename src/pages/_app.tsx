import 'reflect-metadata'

import type { AppProps } from 'next/app'

import { Provider as NextAuthProvider } from 'next-auth/client'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'

import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import { theme } from 'styles/theme'

function ActerApp({ Component, pageProps }: AppProps) {
  const client = new ApolloClient({
    uri: 'http://localhost:3000/api/graphql',
    cache: new InMemoryCache(),
  })

  return (
    <ApolloProvider client={client}>
      <NextAuthProvider session={pageProps.session}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </NextAuthProvider>
    </ApolloProvider>
  )
}

export default ActerApp
