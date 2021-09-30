import { injectable } from 'react-magnetic-di'

import { usePosts, UsePostsResult } from '../post/use-posts'

import { ExamplePost, ExampleSubPost } from '@acter/schema/fixtures'

const postsDefault = [
  {
    ...ExamplePost,
    Comments: [ExampleSubPost, ExampleSubPost],
  },
]

export const usePostsDi = (posts = postsDefault): typeof usePosts =>
  injectable(
    usePosts,
    () =>
      (({
        posts,
        loading: false,
      } as unknown) as UsePostsResult)
  )
