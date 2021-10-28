import 'reflect-metadata'

import React, { FC, ReactElement, ReactNode } from 'react'
import { IntercomProvider } from 'react-use-intercom'

import { NextPage } from 'next'
import { withUrqlClient } from 'next-urql'
import { AppProps } from 'next/app'

import { UserProvider } from '@auth0/nextjs-auth0'
import CssBaseline from '@material-ui/core/CssBaseline'

import { SnackbarProvider } from 'notistack'

import { Layout } from '@acter/components/layout'
import { ActerThemeProvider } from '@acter/components/themes/acter-theme'
import { urqlClientOptions } from '@acter/lib/urql'

export type NextPageWithLayout<P = unknown, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type ActerAppProps = AppProps & {
  Component: NextPageWithLayout
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  err: any
}

const ActerApp: FC<ActerAppProps> = ({ Component, pageProps, err }) => {
  const INTERCOM_APP_ID = process.env.NEXT_PUBLIC_INTERCOM_APP_ID

  const getLayout = Component.getLayout ?? ((page) => <Layout>{page}</Layout>)

  return (
    <IntercomProvider appId={INTERCOM_APP_ID}>
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
    </IntercomProvider>
  )
}

export default withUrqlClient(() => urqlClientOptions)(ActerApp)
