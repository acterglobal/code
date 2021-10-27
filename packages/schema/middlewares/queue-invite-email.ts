import { MiddlewareFn } from 'type-graphql'

import { inviteEmailCreateQueue } from '@acter/jobs'
import { ActerGraphQLContext } from '@acter/lib/contexts/graphql-api'

export const QueueInviteEmail: MiddlewareFn<ActerGraphQLContext> = async (
  { context, args },
  next
) => {
  try {
    const user = context.session.user
    const isSessionUser = args.data.every(
      (invitation) => invitation.createdByUserId === user.id
    )
    if (!isSessionUser) {
      console.error('ERROR: Wrong user')
      throw 'Invitation failed. Please try again later.'
    }

    await next()

    args.data.map((invitation) => {
      console.log('Adding to invite email queue 🍄🍄🍄', invitation)

      inviteEmailCreateQueue.add(
        `create-invite-email-${invitation.email}`,
        { ...invitation, senderName: user.Acter.name },
        { removeOnComplete: true }
      )
    })
  } catch (error) {
    console.error('Error: ', error)
    throw 'Invitation failed. Please try again later.'
  }
}
