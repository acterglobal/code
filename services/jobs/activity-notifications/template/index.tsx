import {
  render,
  MjmlButton,
  MjmlColumn,
  MjmlSection,
  MjmlText,
} from 'mjml-react'

import { DATE_TIME_FORMAT_LONG } from '@acter/lib/constants'
import { parseAndFormat } from '@acter/lib/datetime/parse-and-format'
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

  const acterName = acter.name
  const acterType = acter.ActerType?.name?.toLocaleLowerCase()
  const activityName = activity.Acter.name
  const activityType = activity.ActivityType?.name?.toLocaleLowerCase()
  const endAt = parseAndFormat({
    dateString: activity.endAt,
    formatString: DATE_TIME_FORMAT_LONG,
  })
  const isAllDay = activity.isAllDay
  const startAt = parseAndFormat({
    dateString: activity.startAt,
    formatString: DATE_TIME_FORMAT_LONG,
  })

  const occurring = isAllDay ? `on ${startAt}` : `from ${startAt} to ${endAt}`

  const { html } = render(
    <EmailLayout>
      <MjmlSection backgroundColor="#fff">
        <MjmlColumn>
          <MjmlText fontFamily="Montserrat, Arial, non-serif">
            <p>
              A new {activityType}, {activityName}, was just added to an{' '}
              {acterType} you follow on Acter, {acterName}.
            </p>

            <p>It will occur {occurring}</p>
          </MjmlText>
        </MjmlColumn>
      </MjmlSection>
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
