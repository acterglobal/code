import { MiddlewareFn } from 'type-graphql'

import { inviteEmailCreateQueue } from '@acter/jobs'
import { CreateInvitesVariables } from '@acter/lib/invites/use-create-invites'
import { UpdateInviteVariables } from '@acter/lib/invites/use-update-invite'
import { ActerGraphQLContext } from '@acter/lib/types/graphql-api'

export const QueueInviteEmail: MiddlewareFn<ActerGraphQLContext> = async (
  { context, args, info },
  next
) => {
  try {
    const { data } = args as CreateInvitesVariables

    const { inviteId } = info.variableValues as UpdateInviteVariables

    const user = context.session.user

    if (inviteId) {
      const invite = await next()

      if (!invite.expiredAt) {
        inviteEmailCreateQueue.add(
          `create-invite-email-${invite.email}`,
          { ...invite, senderName: user.Acter.name },
          { removeOnComplete: true }
        )
      }
      return invite
    }

    const isSessionUser = data.every(
      (invitation) => invitation.createdByUserId === user.id
    )
    if (!isSessionUser) {
      console.error('ERROR: Wrong user')
      throw 'Invitation failed. Please try again later.'
    }

    await next()

    data.map((invitation) => {
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
