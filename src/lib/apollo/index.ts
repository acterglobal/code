/* istanbul ignore file */
// Adapted from https://www.apollographql.com/blog/building-a-next-js-app-with-apollo-client-slash-api/

import { useMemo } from 'react'
import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client'
import merge from 'deepmerge'
import { isEqual } from 'lodash'

export const APOLLO_STATE_PROP_NAME = '__APOLLO_STATE__'

type ApolloClientType = ApolloClient<InMemoryCache | NormalizedCacheObject>
let apolloClient: ApolloClientType

export const createApolloClient = (
  uri: string
): ApolloClient<InMemoryCache | NormalizedCacheObject> => {
  const ssrMode = typeof window === 'undefined'
  const link = new HttpLink({
    uri,
  })

  return new ApolloClient({
    cache: new InMemoryCache(),
    ssrMode,
    link,
  })
}

interface InitializeApolloProps {
  graphqlUri?: string
  initialState?: InMemoryCache | NormalizedCacheObject
}

export const initializeApollo = ({
  graphqlUri,
  initialState,
}: InitializeApolloProps = {}): ApolloClient<
  InMemoryCache | NormalizedCacheObject
> => {
  graphqlUri = graphqlUri || process.env.NEXT_PUBLIC_GRAPHQL_URL
  const _apolloClient = apolloClient ?? createApolloClient(graphqlUri)

  // If your page has Next.js data fetching methods that use Apollo Client,
  // the initial state gets hydrated here
  if (initialState) {
    // Get existing cache, loaded during client side data fetching
    const existingCache = _apolloClient.extract()

    // Merge the existing cache into data passed from getStaticProps/getServerSideProps
    //@ts-ignore
    const data = merge(initialState, existingCache, {
      // combine arrays using object equality (like in sets)
      arrayMerge: (destinationArray, sourceArray) => [
        ...sourceArray,
        ...destinationArray.filter((d) =>
          sourceArray.every((s) => !isEqual(d, s))
        ),
      ],
    })

    // Restore the cache with the merged data
    //@ts-ignore
    _apolloClient.cache.restore(data)
  }

  // For SSG and SSR always create a new Apollo Client
  if (typeof window === 'undefined') return _apolloClient

  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient
  return _apolloClient
}

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
