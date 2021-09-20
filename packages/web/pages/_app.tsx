import 'reflect-metadata'

import React, { FC, ReactElement, ReactNode } from 'react'
import { IntercomProvider } from 'react-use-intercom'

import { NextPage } from 'next'
import { AppProps } from 'next/app'

import { ApolloProvider } from '@apollo/client'
import { UserProvider } from '@auth0/nextjs-auth0'
import CssBaseline from '@material-ui/core/CssBaseline'

import { SnackbarProvider } from 'notistack'

import { Layout } from '@acter/components/layout'
import { ActerThemeProvider } from '@acter/components/themes/acter-theme'
import { useApollo } from '@acter/lib/apollo'

export type NextPageWithLayout<P = unknown, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type ActerAppProps = AppProps & {
  Component: NextPageWithLayout
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  err: any
}

const ActerApp: FC<ActerAppProps> = ({ Component, pageProps, err }) => {
  const apolloClient = useApollo({
    graphqlUri: process.env.NEXT_PUBLIC_GRAPHQL_URL,
    pageProps,
  })
  const INTERCOM_APP_ID = process.env.NEXT_PUBLIC_INTERCOM_APP_ID

  const getLayout = Component.getLayout ?? ((page) => <Layout>{page}</Layout>)

  return (
    <IntercomProvider appId={INTERCOM_APP_ID}>
      <ApolloProvider client={apolloClient}>
        <UserProvider>
          <ActerThemeProvider>
            <SnackbarProvider
              anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
            >
              <CssBaseline />
              {getLayout(<Component {...pageProps} err={err} />)}
            </SnackbarProvider>
          </ActerThemeProvider>
        </UserProvider>
      </ApolloProvider>
    </IntercomProvider>
  )
}

export default ActerApp
