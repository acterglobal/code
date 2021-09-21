import path from 'path'

import { CreateEmailReturn, createEmailTemplate } from '@acter/lib/email'
import { getArticle } from '@acter/lib/string/get-article'
import { Acter, Notification } from '@acter/schema'

type NewMemberNotificationEmail = {
  text: string
  notificationUrl: string
}

type CreateNewMemberNotificationEmailParams = {
  follower: Acter
  notification: Notification
}

export const createNewMemberNotificationEmail = ({
  follower,
  notification,
}: CreateNewMemberNotificationEmailParams): CreateEmailReturn => {
  const baseUrl = process.env.BASE_URL
  const notificationUrl = [baseUrl, 'notifications', notification.id].join('/')
  const { OnActer } = notification
  const aAn = getArticle(OnActer.ActerType.name)
  const text = `${follower.name} just joined ${aAn} ${OnActer.ActerType.name} you follow on Acter, ${OnActer.name}.`
  const html = createEmailTemplate<NewMemberNotificationEmail>(
    path.join(__dirname, 'template.hbs')
  )({
    text,
    notificationUrl,
  })

  return { html, text: `${text} To see it, visit: ${notificationUrl}` }
}
