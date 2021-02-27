/* istanbul ignore file */
// Adapted from https://www.apollographql.com/blog/building-a-next-js-app-with-apollo-client-slash-graphql/

import { useMemo } from 'react'
import {
  ApolloClient,
  HttpLink,
  ApolloCache,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client'

let apolloClient: ApolloClient<InMemoryCache | NormalizedCacheObject>

export const createApolloClient = (
  graphqlUri: string
): ApolloClient<InMemoryCache | NormalizedCacheObject> => {
  const ssrMode = typeof window === 'undefined'

  return new ApolloClient({
    cache: new InMemoryCache(),
    ssrMode,
    uri: graphqlUri
  })
}

interface InitializeApolloProps {
  graphqlUri?: string
  initialState?: any
}

export const initializeApollo = ({
  graphqlUri,
  initialState,
}: InitializeApolloProps = {}): ApolloClient<
  InMemoryCache | NormalizedCacheObject
> => {
  graphqlUri ||= process.env.NEXT_PUBLIC_GRAPHQL_URL
  const _apolloClient = apolloClient ?? createApolloClient(graphqlUri)

  // If your page has Next.js data fetching methods that use Apollo Client,
  // the initial state gets hydrated here
  if (initialState) {
    // Get existing cache, loaded during client side data fetching
    const existingCache = _apolloClient.extract()

    // Restore the cache using the data passed from
    // getStaticProps/getServerSideProps combined with the existing cached data
    _apolloClient.cache.restore({ ...existingCache, ...initialState })
  }

  // For SSG and SSR always create a new Apollo Client
  if (typeof window === 'undefined') return _apolloClient

  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient
  return _apolloClient
}

export function useApollo({
  graphqlUri,
  initialState,
}: {
  graphqlUri: string
  initialState?: InMemoryCache | NormalizedCacheObject
}): ApolloClient<InMemoryCache | NormalizedCacheObject> {
  const store = useMemo(() => initializeApollo({ graphqlUri, initialState }), [
    initialState,
  ])
  return store
}
