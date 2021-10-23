import { MiddlewareFn } from 'type-graphql'

import { inviteEmailCreateQueue } from '@acter/jobs'

export const QueueInviteEmail: MiddlewareFn = async (_, next) => {
  const invite = await next()

  if (!invite) {
    console.error('No data to send invitation')
  }

  console.log('Adding to invite email queue 🍄🍄🍄', invite)

  inviteEmailCreateQueue.add(
    `create-invite-email-${invite.id}`,
    { ...invite },
    {
      removeOnComplete: true,
    }
  )
}
