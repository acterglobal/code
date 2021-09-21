import path from 'path'

import { DATE_FORMAT_LONG } from '@acter/lib/constants'
import { parseAndFormat } from '@acter/lib/datetime/parse-and-format'
import { CreateEmailReturn, createEmailTemplate } from '@acter/lib/email'
import { getArticle } from '@acter/lib/string/get-article'
import {
  Acter,
  ActerType,
  Activity,
  ActivityType,
  Notification,
  User,
} from '@acter/schema/types'

type ActivityEmail = {
  acterName: string
  acterType: string
  activityName: string
  activityType: string
  startAt: string
  endAt: string
  isAllDay: boolean
  notificationUrl: string
}

type ActerPick = Required<
  Pick<Acter, 'id' | 'name' | 'acterNotifyEmailFrequency'> & {
    ActerType: ActerTypePick
    User: UserPick
  }
>
type ActerTypePick = Pick<ActerType, 'id' | 'name'>
type UserPick = Pick<User, 'id' | 'email'>

type ActivityPick = Required<
  Pick<Activity, 'endAt' | 'isAllDay' | 'startAt'> & {
    Acter: Omit<ActerPick, 'User'>
    ActivityType: ActivityType
  }
>

type CreateActivityNotificationEmailParams = {
  acter: ActerPick
  activity: ActivityPick
  notification: Notification
}

export const createActivityNotificationEmail = ({
  acter,
  activity,
  notification,
}: CreateActivityNotificationEmailParams): CreateEmailReturn => {
  const baseUrl = process.env.BASE_URL
  const notificationUrl = [baseUrl, 'notifications', notification.id].join('/')
  const html = createEmailTemplate<ActivityEmail>(
    path.join(__dirname, 'template.hbs')
  )({
    acterName: acter.name,
    acterType: acter.ActerType?.name?.toLocaleLowerCase(),
    activityName: activity.Acter.name,
    activityType: activity.ActivityType?.name?.toLocaleLowerCase(),
    endAt: parseAndFormat(activity.endAt, DATE_FORMAT_LONG),
    isAllDay: activity.isAllDay,
    notificationUrl,
    startAt: parseAndFormat(activity.startAt, DATE_FORMAT_LONG),
  })
  const { OnActer } = notification
  const aAn = getArticle(OnActer.name)
  const text = `A new activity titled "${activity.Acter.name} was added on ${aAn} ${OnActer.ActerType.name} you follow on Acter, ${OnActer.name}. To see it, visit: ${notificationUrl}`

  return { html, text }
}
