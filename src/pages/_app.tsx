import 'reflect-metadata'
import { FC } from 'react'
import { AppProps } from 'next/app'

import { UserProvider } from '@auth0/nextjs-auth0'
import { ApolloProvider } from '@apollo/client'

import { useApollo } from 'lib/apollo'
import { initSentry } from 'lib/sentry'

import CssBaseline from '@material-ui/core/CssBaseline'
import { ActerThemeProvider } from 'src/themes/acter-theme'

import { SnackbarProvider } from 'notistack'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ActerAppProps = AppProps & { err: any }

initSentry()

const ActerApp: FC<ActerAppProps> = ({ Component, pageProps, err }) => {
  const apolloClient = useApollo({
    graphqlUri: process.env.NEXT_PUBLIC_GRAPHQL_URL,
    pageProps,
  })

  return (
    <ApolloProvider client={apolloClient}>
      <UserProvider>
        <ActerThemeProvider>
          <SnackbarProvider
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          >
            <CssBaseline />
            <Component {...pageProps} err={err} />
          </SnackbarProvider>
        </ActerThemeProvider>
      </UserProvider>
    </ApolloProvider>
  )
}

export default ActerApp
