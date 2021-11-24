import { UseQueryArgs, useQuery, UseQueryState } from 'urql'

import { Post } from '@acter/schema'
import GET_POST from '@acter/schema/queries/post-by-id.graphql'

type PostData = {
  post: Post
}

type PostVariables = {
  id: string
}

type UsePostsOptions = UseQueryArgs<PostVariables, PostData>

type UsePostParams = {
  postId: string
  options?: UsePostsOptions
}

type UsePostResult = Omit<UseQueryState<PostData, PostVariables>, 'data'> &
  PostData

/**
 * Gives a single post by its id
 * @param params has required postId and optional options
 * @returns a single post
 */
export const usePost = (params: UsePostParams): UsePostResult => {
  const { postId, options } = params

  const [{ data, fetching, error, ...QueryResult }] = useQuery<
    PostData,
    PostVariables
  >({
    query: GET_POST,
    variables: { id: postId },
    pause: !postId,
    ...options,
  })

  return { post: data?.post, fetching, error, ...QueryResult }
}
