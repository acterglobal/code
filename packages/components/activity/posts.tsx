import React, { FC } from 'react'

import { useRouter } from 'next/router'

import slugify from 'slugify'

import { SinglePostSection } from '@acter/components/acter/posts/single-post-section'
import { PostList } from '@acter/components/posts/organisms/post-list'
import { acterAsUrl } from '@acter/lib/acter/acter-as-url'
import { usePost } from '@acter/lib/post/use-post'
import { Acter } from '@acter/schema'

interface PostsSectionProps {
  acter: Acter
}
export const PostsSection: FC<PostsSectionProps> = ({ acter }) => {
  const router = useRouter()
  const postId = router?.query?.post as string
  const { post } = usePost({ postId })

  if (postId && post && acter.Parent) {
    const parentUrl = acterAsUrl({ acter: acter.Parent })
    const url = `${parentUrl}/activities?activity=${slugify(acter.name)}`
    return <SinglePostSection post={post} redirectUrl={url} />
  }

  return <PostList acterId={acter.id} />
}
