import { assert } from 'console'
import {
  render,
  MjmlButton,
  MjmlColumn,
  MjmlSection,
  MjmlText,
} from 'mjml-react'

import { CreateEmailReturn } from '@acter/lib/email'
import { getNotificationUrl } from '@acter/lib/notification/get-notification-url'
import { getArticle } from '@acter/lib/string/get-article'
import { Acter, Notification, Post } from '@acter/schema'

import { EmailLayout } from '../../templates/layout'
import { PostEmailBlock } from './post-email-block'

export type PostWithActerAndAuthor = Omit<Post, 'Acter' | 'Author'> & {
  Acter: ActerNameAndID
  Author: ActerNameAndID
}

type ActerNameAndID = Pick<Acter, 'id' | 'name'>

type CreatePostEmailNotificationParams = {
  notification: Notification
  post: PostWithActerAndAuthor
}

export const createPostEmailNotification = ({
  notification,
  post,
}: CreatePostEmailNotificationParams): CreateEmailReturn => {
  assert(!!post.Acter?.name, 'Post Acter name required')
  assert(!!post.Author?.name, 'Post Author name required')
  assert(!!post.createdAt, 'Post created at required')

  const notificationUrl = getNotificationUrl(notification)
  const postType = post.parentId ? 'comment' : 'post'
  const { html } = render(
    <EmailLayout>
      <MjmlText fontFamily="Montserrat, Arial, non-serif">
        A new {postType} was created on {post.Acter.name}.
      </MjmlText>
      <PostEmailBlock post={post as Post} notificationUrl={notificationUrl} />
      <MjmlSection backgroundColor="#fff">
        <MjmlColumn>
          <MjmlButton
            color="#fff"
            backgroundColor="#1EB001"
            border="1px solid #1EB001"
            borderRadius="5px"
            padding="12px 25px"
            href={notificationUrl}
          >
            Go To Post
          </MjmlButton>
        </MjmlColumn>
      </MjmlSection>
    </EmailLayout>
  )
  const { OnActer } = notification
  const aAn = getArticle(OnActer.name)
  const text = `A new ${postType} was created on ${aAn} ${OnActer.ActerType.name} you follow on Acter, ${OnActer.name}. To see it, visit: ${notificationUrl}`

  return { html, text }
}
