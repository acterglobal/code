import { useEffect, useState } from 'react'

import { CombinedError, UseQueryArgs } from 'urql'

import { useActer } from '@acter/lib/acter/use-acter'
import { getObjectArrayMemoString } from '@acter/lib/get-object-array-memo-string'
import {
  usePaginatedQuery,
  UsePaginatedState,
} from '@acter/lib/urql/use-paginated-query'
import { Post } from '@acter/schema'
import GET_POSTS from '@acter/schema/queries/posts-by-acter.graphql'

type PostsData = {
  posts: Post[]
}

type PostsVariables = {
  acterId: string
}

type UsePostsOptions = UseQueryArgs<PostsVariables, PostsData> & {
  acterId?: string
}

type UsePostsParams = {
  acterId?: string
  options?: UsePostsOptions
}

type UsePostError = CombinedError | Error

export interface UsePostsResult
  extends Omit<UsePaginatedState<Post, PostsData>, 'data'> {
  posts: Post[]
}

export const usePosts = (params?: UsePostsParams): UsePostsResult => {
  const { acterId, options } = params
  const [fetching, setFetching] = useState(false)
  const [error, setError] = useState<UsePostError>()
  const [posts, setPosts] = useState<Post[]>([])
  const {
    acter,
    fetching: acterFetching,
    error: acterError,
  } = useActer({
    acterId,
  })

  const [
    {
      results,
      fetching: queryFetching,
      error: queryError,
      ...restQueryResults
    },
  ] = usePaginatedQuery<Post, PostsData, PostsVariables>({
    ...options,
    query: GET_POSTS,
    dataKey: 'posts',
    pause: !acter?.id,
    variables: {
      acterId: acter?.id,
    },
  })

  useEffect(() => {
    setFetching(acterFetching || queryFetching)
  }, [acterFetching, queryFetching])

  useEffect(() => {
    if (acterError) return setError(acterError)
    if (queryError) return setError(queryError)
  }, [acterError, queryError])

  useEffect(() => setPosts(results), [getObjectArrayMemoString(results)])

  return { posts, fetching, error, ...restQueryResults } as UsePostsResult
}
