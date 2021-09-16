import { CreateEmailReturn, createEmailTemplate } from '@acter/lib/email'
import { Acter, Notification } from '@acter/schema'
import path from 'path'

type NewMemberNotificationEmail = {
  aAn: string
  followerName: string
  onActerName: string
  onActerType: string
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
  const aAn = OnActer.ActerType.name.substr(0, 1).match(/[aeiou]/) ? 'an' : 'a'
  const html = createEmailTemplate<NewMemberNotificationEmail>(
    path.join(__dirname, 'template.hbs')
  )({
    aAn,
    followerName: follower.name,
    onActerName: OnActer.name,
    onActerType: OnActer.ActerType.name,
    notificationUrl,
  })
  const text = `"${follower.name} just joined ${aAn} ${OnActer.ActerType.name} you follow on Acter, ${OnActer.name}. To see it, visit: ${notificationUrl}`

  return { html, text }
}
