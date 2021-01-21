import 'reflect-metadata'

import { AppProps } from 'next/app'

import { Provider as NextAuthProvider } from 'next-auth/client'
import { ApolloProvider } from '@apollo/client'

import { useApollo } from 'lib/apollo'

import CssBaseline from '@material-ui/core/CssBaseline'
import { ActerThemeProvider } from 'src/themes/acter-theme'

const ActerApp = ({ Component, pageProps }: AppProps) => {
  const apolloClient = useApollo(pageProps.initialApolloState)

  return (
    <ApolloProvider client={apolloClient}>
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
