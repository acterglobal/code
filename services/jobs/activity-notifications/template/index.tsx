import { render, MjmlButton, MjmlColumn, MjmlSection } from 'mjml-react'

import { CreateEmailReturn } from '@acter/lib/email'
import { getNotificationUrl } from '@acter/lib/notification/get-notification-url'
import { getArticle } from '@acter/lib/string/get-article'
import {
  Acter,
  ActerType,
  Activity,
  ActivityType,
  Notification,
  User,
} from '@acter/schema'

import { EmailLayout } from '../../templates/layout'
import { ActivityEmailBlock } from './activity-email-block'

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
  const notificationUrl = getNotificationUrl(notification)

  const activityName = activity.Acter.name

  const { html } = render(
    <EmailLayout>
      <ActivityEmailBlock
        acter={acter as Acter}
        activity={activity as Activity}
      />
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
            View {activityName}
          </MjmlButton>
        </MjmlColumn>
      </MjmlSection>
    </EmailLayout>
  )
  const { OnActer } = notification
  const aAn = getArticle(OnActer.name)
  const text = `A new activity titled "${activity.Acter.name} was added on ${aAn} ${OnActer.ActerType.name} you follow on Acter, ${OnActer.name}. To see it, visit: ${notificationUrl}`

  return { html, text }
}
