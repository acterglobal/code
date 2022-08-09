import 'reflect-metadata'

import React, { FC, ReactElement, ReactNode, useEffect } from 'react'
import { hotjar } from 'react-hotjar'
import { IntercomProvider } from 'react-use-intercom'

import { NextPage } from 'next'
import { appWithTranslation } from 'next-i18next'
import { AppProps } from 'next/app'
import { useRouter } from 'next/router'

import { UserProvider } from '@auth0/nextjs-auth0'
import CssBaseline from '@material-ui/core/CssBaseline'

import { SnackbarProvider } from 'notistack'

import { OverallLayout } from '@acter/components/layout/overall'
import { ActerThemeProvider } from '@acter/components/themes/acter-theme'
import { reportWebVitalsToAxiom } from '@acter/lib/axiom'
import * as gtag from '@acter/lib/gtag'
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
  const HJ_ID = parseInt(process.env.HJ_ID)
  const HJ_SV = parseInt(process.env.HJ_SV)
  hotjar.initialize(HJ_ID, HJ_SV)

  useEffect(() => {
    hotjar.initialize(HJ_ID, HJ_SV)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

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

export const reportWebVitals = reportWebVitalsToAxiom

export default appWithTranslation(ActerApp)
