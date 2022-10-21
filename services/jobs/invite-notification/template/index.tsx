import {
  render,
  MjmlButton,
  MjmlColumn,
  MjmlSection,
  MjmlText,
} from 'mjml-react'

import { CreateEmailReturn } from '@acter/lib/email'

import { EmailLayout } from '../../templates/layout'

type InviteEmail = {
  acterName: string
  inviteUrl: string
  senderName?: string
  message?: string
}

type CreateInviteEmailParams = InviteEmail

export const createOneInviteEmail = ({
  acterName,
  inviteUrl,
  senderName,
  message = null,
}: CreateInviteEmailParams): CreateEmailReturn => {
  const displayMessage = message ? (
    message
  ) : (
    <>
      <p>Hi!</p>

      <p>I'm inviting you to join {acterName} on Acter.</p>

      <p>
        {acterName} is using Acter as our dedicated space for communication &
        collaboration.
      </p>

      <p>
        Kind Regards <br />
        {senderName}
      </p>
    </>
  )
  const { html } = render(
    <EmailLayout>
      <MjmlSection backgroundColor="#fff">
        <MjmlColumn>
          <MjmlText fontFamily="Montserrat, Arial, non-serif">
            {displayMessage}
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
            href={inviteUrl}
          >
            Join
          </MjmlButton>
        </MjmlColumn>
      </MjmlSection>
    </EmailLayout>
  )

  return { html, text: message }
}
