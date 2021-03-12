import 'reflect-metadata'

import App, { AppProps, AppContext } from 'next/app'

import { Provider as NextAuthProvider } from 'next-auth/client'
import { ApolloProvider } from '@apollo/client'

import { useApollo } from 'lib/apollo'
import { initSentry } from 'lib/sentry'

import CssBaseline from '@material-ui/core/CssBaseline'
import { ActerThemeProvider } from 'src/themes/acter-theme'

import { SnackbarProvider } from 'notistack'

type ActerAppProps = AppProps & { err: any }

initSentry()

const ActerApp = ({ Component, pageProps, err }: ActerAppProps) => {
  const apolloClient = useApollo({
    graphqlUri: process.env.NEXT_PUBLIC_GRAPHQL_URL,
    pageProps,
  })

  return (
    <ApolloProvider client={apolloClient}>
      <NextAuthProvider session={pageProps.session}>
        <ActerThemeProvider>
          <SnackbarProvider
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          >
            <CssBaseline />
            <Component {...pageProps} err={err} />
          </SnackbarProvider>
        </ActerThemeProvider>
      </NextAuthProvider>
    </ApolloProvider>
  )
}

export default ActerApp
