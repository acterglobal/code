import { useEffect, useState } from 'react'
import { di } from 'react-magnetic-di/macro'

import {
  useLazyQuery,
  MutationOptions,
  QueryResult,
  ApolloError,
} from '@apollo/client'

import { useActer } from '@acter/lib/acter/use-acter'
import { Post } from '@acter/schema'
import GET_POSTS from '@acter/schema/queries/posts-by-acter.graphql'

type PostsData = {
  posts: Post[]
}

type PostsVariables = {
  acterId: string
}

type UsePostsOptions = MutationOptions<PostsData, PostsVariables>

type UsePostError = ApolloError | Error

export interface UsePostsResult
  extends Omit<QueryResult<PostsData, PostsVariables>, 'data'> {
  posts: Post[]
}

export const usePosts = (options?: UsePostsOptions): UsePostsResult => {
  di(useActer)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<UsePostError>()
  const [posts, setPosts] = useState<Post[]>([])
  const { acter, loading: acterLoading, error: acterError } = useActer()

  const [
    fetchPosts,
    { data, loading: queryLoading, error: queryError, ...restQueryResults },
  ] = useLazyQuery<PostsData, PostsVariables>(GET_POSTS, {
    ...options,
  })

  useEffect(() => {
    setLoading(acterLoading || queryLoading)
  }, [acterLoading, queryLoading])

  useEffect(() => {
    if (acterError) return setError(acterError)
    if (queryError) return setError(queryError)
  }, [acterError, queryError])

  useEffect(() => {
    if (acter?.id)
      fetchPosts({
        variables: {
          acterId: acter.id,
        },
      })
  }, [acter?.id])

  useEffect(() => {
    if (data?.posts) setPosts(data.posts)
  }, [data?.posts])

  return { posts, loading, error, ...restQueryResults } as UsePostsResult
}
