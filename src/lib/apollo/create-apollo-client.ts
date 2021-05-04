import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client'

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
