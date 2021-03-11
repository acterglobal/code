import 'reflect-metadata'

import App, { AppProps, AppContext } from 'next/app'

import { Provider as NextAuthProvider } from 'next-auth/client'
import { ApolloProvider } from '@apollo/client'

import { useApollo } from 'lib/apollo'

import CssBaseline from '@material-ui/core/CssBaseline'
import { ActerThemeProvider } from 'src/themes/acter-theme'

import { SnackbarProvider } from 'notistack'

const ActerApp = ({ Component, pageProps }: AppProps) => {
  const apolloClient = useApollo({
    graphqlUri: pageProps.graphqlUri,
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
            <Component {...pageProps} />
          </SnackbarProvider>
        </ActerThemeProvider>
      </NextAuthProvider>
    </ApolloProvider>
  )
}

export interface AppPageProps {
  graphqlUri: string
}

ActerApp.getInitialProps = async (appContext: AppContext) => {
  const appProps = await App.getInitialProps(appContext)

  return {
    ...appProps,
    pageProps: {
      ...appProps.pageProps,
      graphqlUri: process.env.NEXT_PUBLIC_GRAPHQL_URL,
    } as AppPageProps,
  }
}

export default ActerApp
