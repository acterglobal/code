import { useEffect, useState } from 'react'

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

type PostsVarialbles = {
  acterId: string
}

type UsePostsOptions = MutationOptions<PostsData, PostsVarialbles>

interface UsePostsResult
  extends Omit<QueryResult<PostsData, PostsVarialbles>, 'data'> {
  posts: Post[]
}

export const usePosts = (options?: UsePostsOptions): UsePostsResult => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<ApolloError>()
  const [posts, setPosts] = useState<Post[]>([])
  const { acter, loading: acterLoading, error: acterError } = useActer()

  const [
    fetchPosts,
    { data, loading: queryLoading, error: queryError, ...restQueryResults },
  ] = useLazyQuery<PostsData, PostsVarialbles>(GET_POSTS, {
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
