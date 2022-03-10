import 'reflect-metadata'

import React, { FC, ReactElement, ReactNode } from 'react'
import { IntercomProvider } from 'react-use-intercom'

import { NextPage } from 'next'
import { appWithTranslation } from 'next-i18next'
import { AppProps } from 'next/app'

import { UserProvider } from '@auth0/nextjs-auth0'
import CssBaseline from '@mui/material/CssBaseline'

import { SnackbarProvider } from 'notistack'

import { OverallLayout } from '@acter/components/layout/overall'
import { ActerThemeProvider } from '@acter/components/themes/acter-theme'
import { UrqlProvider } from '@acter/lib/urql'

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

  const getLayout =
    Component.getLayout ?? ((page) => <OverallLayout>{page}</OverallLayout>)

  return (
    <IntercomProvider appId={INTERCOM_APP_ID}>
      <UrqlProvider>
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
      </UrqlProvider>
    </IntercomProvider>
  )
}

export default appWithTranslation(ActerApp)
