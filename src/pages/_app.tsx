import 'reflect-metadata'

import { GetServerSideProps } from 'next'
import type { AppProps } from 'next/app'

import { Provider as NextAuthProvider, getSession } from 'next-auth/client'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'

import CssBaseline from '@material-ui/core/CssBaseline'
import { ActerThemeProvider } from 'src/themes/acter-theme'

import { SessionContext } from 'src/contexts/session'

const ActerApp = ({ Component, pageProps }: AppProps) => {
  const client = new ApolloClient({
    uri: 'http://localhost:3000/api/graphql',
    cache: new InMemoryCache(),
  })

  return (
    <ApolloProvider client={client}>
      <NextAuthProvider session={pageProps.session}>
        <SessionContext.Provider value={pageProps.session}>
          <ActerThemeProvider>
            <CssBaseline />
            <Component {...pageProps} />
          </ActerThemeProvider>
        </SessionContext.Provider>
      </NextAuthProvider>
    </ApolloProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession()
  return {
    props: {
      session,
    },
  }
}

export default ActerApp
