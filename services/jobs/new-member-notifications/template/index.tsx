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
import { Acter, ActerJoinSettings, Notification } from '@acter/schema'

import { EmailLayout } from '../../templates/layout'

type CreateNewMemberNotificationEmailParams = {
  follower: Acter
  notification: Notification
}

export const createNewMemberNotificationEmail = ({
  follower,
  notification,
}: CreateNewMemberNotificationEmailParams): CreateEmailReturn => {
  const notificationUrl = getNotificationUrl(notification)
  const { OnActer } = notification
  const aAn = getArticle(OnActer.ActerType.name)
  const verb =
    OnActer.acterJoinSetting === ActerJoinSettings.RESTRICTED
      ? 'requested to join'
      : 'joined'
  const text = `${follower.name} just ${verb} ${aAn} ${OnActer.ActerType.name} you follow on Acter, ${OnActer.name}.`

  const { html } = render(
    <EmailLayout>
      <MjmlSection backgroundColor="#fff">
        <MjmlColumn>
          <MjmlText fontFamily="Montserrat, Arial, non-serif">{text}</MjmlText>
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
            View Members
          </MjmlButton>
        </MjmlColumn>
      </MjmlSection>
    </EmailLayout>
  )

  return { html, text: `${text} To see it, visit: ${notificationUrl}` }
}
