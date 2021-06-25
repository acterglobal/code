import { useMemo } from 'react'
import { initializeApollo } from './initialize-apollo'
import { ApolloClientType } from './types'
import { APOLLO_STATE_PROP_NAME } from './constants'

// eslint-disable-next-line @acter/schema/typescript-eslint/no-explicit-any
type PageProps = { [key: string]: any }

export function useApollo({
  graphqlUri,
  pageProps,
}: {
  graphqlUri: string
  pageProps: PageProps
}): ApolloClientType {
  const initialState = pageProps ? pageProps[APOLLO_STATE_PROP_NAME] : {}
  const store = useMemo(() => initializeApollo({ graphqlUri, initialState }), [
    initialState,
  ])
  return store
}
