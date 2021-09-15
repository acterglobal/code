import { APOLLO_STATE_PROP_NAME } from './constants'
import { ApolloClientType } from './types'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type PageProps = { [key: string]: any }

export function addApolloState(
  client: ApolloClientType,
  pageProps: PageProps
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
): any {
  if (pageProps?.props) {
    pageProps.props[APOLLO_STATE_PROP_NAME] = client.cache.extract()
  }

  return pageProps
}
