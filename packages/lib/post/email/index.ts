import fs from 'fs'
import Handlebars from 'handlebars'
import marked from 'marked'
import path from 'path'
import { format } from 'date-fns'
import { DATE_FORMAT_LONG } from '@acter/lib/constants'
import { Notification, Post } from '@acter/schema/types'

type PostEmail = {
  acterName: string
  sentAt: string
  sentBy: string
  baseUrl: string
  notificationUrl: string
  //eslint-disable-next-line @typescript-eslint/no-explicit-any
  content: any
}

const source = fs.readFileSync(path.join(__dirname, 'template.hbs'), 'utf8')
const template = Handlebars.compile<PostEmail>(source)

type CreatePostEmailNotificationParams = {
  notification: Notification
  post: Post
}

type CreatePostEmailNotificationReturn = {
  html: string
  text: string
}

export const createPostEmailNotification = ({
  notification,
  post,
}: CreatePostEmailNotificationParams): CreatePostEmailNotificationReturn => {
  const baseUrl = process.env.BASE_URL
  const notificationUrl = [baseUrl, 'notifications', notification.id].join('/')
  const content = marked(post.content)
  const html = template({
    acterName: post.Acter.name,
    content,
    baseUrl,
    notificationUrl,
    sentAt: format(post.createdAt, DATE_FORMAT_LONG),
    sentBy: post.Author.name,
  })
  const { OnActer } = notification
  const text = `A new post was created on an ${OnActer.ActerType.name} you follow on Acter, ${OnActer.name}. To see it, visit: ${notificationUrl}`

  return { html, text }
}
