import { useEffect, useState } from 'react'

import { CombinedError, useQuery, UseQueryArgs, UseQueryState } from 'urql'

import { useActer } from '@acter/lib/acter/use-acter'
import GET_POSTS from '@acter/lib/graphql/queries/posts-by-acter.graphql'
import { Post } from '@acter/schema'

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
  extends Omit<UseQueryState<PostsData, PostsVariables>, 'data'> {
  posts: Post[]
}

export const usePosts = (params?: UsePostsParams): UsePostsResult => {
  const { acterId, options } = params
  const [fetching, setFetching] = useState(false)
  const [error, setError] = useState<UsePostError>()
  const [posts, setPosts] = useState<Post[]>([])
  const { acter, fetching: acterFetching, error: acterError } = useActer({
    acterId,
  })

  const [
    { data, fetching: queryFetching, error: queryError, ...restQueryResults },
  ] = useQuery<PostsData, PostsVariables>({
    ...options,
    query: GET_POSTS,
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

  useEffect(() => {
    if (data?.posts) setPosts(data.posts)
  }, [data?.posts])

  return { posts, fetching, error, ...restQueryResults } as UsePostsResult
}
