import { MiddlewareFn } from 'type-graphql'

import { sendJobsApiRequest } from '@acter/lib/api/send-jobs-api-request'
import { NotificationQueueType } from '@acter/lib/constants'
import { CreateInvitesVariables } from '@acter/lib/invites/use-create-invites'
import { UpdateInviteVariables } from '@acter/lib/invites/use-update-invite'
import { logger } from '@acter/lib/logger'
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
        sendJobsApiRequest({
          url: `/notify/${NotificationQueueType.NEW_INVITE}`,
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
      logger.error('ERROR: Wrong user')
      throw 'Invitation failed. Please try again later.'
    }

    await next()

    data.map((invitation) => {
      sendJobsApiRequest({
        url: `/notify/${NotificationQueueType.NEW_INVITE}`,
        data: invitation,
      })
    })
  } catch (error) {
    logger.error('Error: ', error)
    throw 'Invitation failed. Please try again later.'
  }
}
