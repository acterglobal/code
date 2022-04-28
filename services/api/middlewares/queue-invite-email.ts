import axios from 'axios'
import { MiddlewareFn } from 'type-graphql'

import { NotificationQueueType } from '@acter/lib/constants'
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
        axios({
          method: 'POST',
          url: `${process.env.BASE_URL}/api/jobs/notify/${NotificationQueueType.NEW_INVITE}`,
          data: {
            ...invite,
            senderName: user.Acter.name,
          },
        })
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
      axios({
        method: 'POST',
        url: `${process.env.BASE_URL}/api/jobs/notify/${NotificationQueueType.NEW_INVITE}`,
        data: invitation,
      })
    })
  } catch (error) {
    console.error('Error: ', error)
    throw 'Invitation failed. Please try again later.'
  }
}
