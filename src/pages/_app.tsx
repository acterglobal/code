import type { AppProps } from 'next/app'

import { Provider as NextAuthProvider } from 'next-auth/client'

import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import { theme } from 'styles/theme'

function ActerApp({ Component, pageProps }: AppProps) {
  return (
    <NextAuthProvider session={pageProps.session}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </NextAuthProvider>
  )
}

export default ActerApp
