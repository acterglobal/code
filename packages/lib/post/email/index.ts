import marked from 'marked'
import path from 'path'
import { format } from 'date-fns'
import { DATE_FORMAT_LONG } from '@acter/lib/constants'
import { Notification, Post } from '@acter/schema'
import { CreateEmailReturn, createEmailTemplate } from '@acter/lib/email'

type PostEmail = {
  acterName: string
  sentAt: string
  sentBy: string
  notificationUrl: string
  //eslint-disable-next-line @typescript-eslint/no-explicit-any
  content: any
}

type CreatePostEmailNotificationParams = {
  notification: Notification
  post: Post
}

export const createPostEmailNotification = ({
  notification,
  post,
}: CreatePostEmailNotificationParams): CreateEmailReturn => {
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
