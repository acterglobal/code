import 'reflect-metadata'

import { FC } from 'react'
import { IntercomProvider } from 'react-use-intercom'

import { AppProps } from 'next/app'

import { ApolloProvider } from '@apollo/client'
import { UserProvider } from '@auth0/nextjs-auth0'
import CssBaseline from '@material-ui/core/CssBaseline'

import { SnackbarProvider } from 'notistack'

import { ActerThemeProvider } from '@acter/components/themes/acter-theme'
import { useApollo } from '@acter/lib/apollo'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ActerAppProps = AppProps & { err: any }

const ActerApp: FC<ActerAppProps> = ({ Component, pageProps, err }) => {
  const apolloClient = useApollo({
    graphqlUri: process.env.NEXT_PUBLIC_GRAPHQL_URL,
    pageProps,
  })
  const INTERCOM_APP_ID = process.env.NEXT_PUBLIC_INTERCOM_APP_ID

  return (
    <IntercomProvider appId={INTERCOM_APP_ID}>
      <ApolloProvider client={apolloClient}>
        <UserProvider>
          <ActerThemeProvider>
            <SnackbarProvider
              anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
            >
              <CssBaseline />
              <Component {...pageProps} err={err} />
            </SnackbarProvider>
          </ActerThemeProvider>
        </UserProvider>
      </ApolloProvider>
    </IntercomProvider>
  )
}

export default ActerApp
