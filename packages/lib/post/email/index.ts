import { assert } from 'console'
import { format } from 'date-fns'
import marked from 'marked'
import path from 'path'

import { DATE_FORMAT_LONG } from '@acter/lib/constants'
import { CreateEmailReturn, createEmailTemplate } from '@acter/lib/email'
import { Acter, Notification, Post } from '@acter/schema'

type PostEmail = {
  acterName: string
  sentAt: string
  sentBy: string
  notificationUrl: string
  //eslint-disable-next-line @typescript-eslint/no-explicit-any
  content: any
}

export type PostWithActerAndAuthor = Omit<Post, 'Acter' | 'Author'> & {
  Acter: ActerName
  Author: ActerName
}

type ActerName = Pick<Acter, 'name'>

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

  const notificationUrl = [
    process.env.BASE_URL,
    'notifications',
    notification.id,
  ].join('/')
  const content = marked(post.content)
  const html = createEmailTemplate<PostEmail>(
    path.join(__dirname, 'template.hbs')
  )({
    acterName: post.Acter.name,
    content,
    notificationUrl,
    sentAt: format(post.createdAt, DATE_FORMAT_LONG),
    sentBy: post.Author.name,
  })
  const { OnActer } = notification
  const text = `A new post was created on an ${OnActer.ActerType.name} you follow on Acter, ${OnActer.name}. To see it, visit: ${notificationUrl}`

  return { html, text }
}
