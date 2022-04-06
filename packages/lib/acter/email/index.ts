import path from 'path'

import { CreateEmailReturn, createEmailTemplate } from '@acter/lib/email'
import { getNotificationUrl } from '@acter/lib/notification/get-notification-url'
import { getArticle } from '@acter/lib/string/get-article'
import { Acter, ActerJoinSettings, Notification } from '@acter/schema'

type NewMemberNotificationEmail = {
  text: string
  notificationUrl: string
}

type CreateNewMemberNotificationEmailParams = {
  follower: Acter
  notification: Notification
  languageCode: string
}

export const createNewMemberNotificationEmail = ({
  follower,
  notification,
  languageCode,
}: CreateNewMemberNotificationEmailParams): CreateEmailReturn => {
  const notificationUrl = getNotificationUrl(notification)
  const { OnActer } = notification
  const aAn = getArticle(OnActer.ActerType.name)
  const verb =
    OnActer.acterJoinSetting === ActerJoinSettings.RESTRICTED
      ? 'requested to join'
      : 'joined'
  const text = `${follower.name} just ${verb} ${aAn} ${OnActer.ActerType.name} you follow on Acter, ${OnActer.name}.`
  const html = createEmailTemplate<NewMemberNotificationEmail>(
    path.join(__dirname, 'template.hbs'),
    languageCode
  )({
    text,
    notificationUrl,
  })

  return { html, text: `${text} To see it, visit: ${notificationUrl}` }
}
