import { OperationResult, UseMutationState } from 'urql'

import {
  useNotificationMutation,
  UseMutationOptions,
} from '@acter/lib/urql/use-notification-mutation'
import { Invite } from '@acter/schema'
import UPDATE_INVITE_EXPIRED from '@acter/schema/mutations/invite-update-expired.graphql'

export type UpdateInviteVariables = {
  inviteId: string
  expiredAt: Date
}

type UpdateInviteData = Invite

type UpdateInviteOptions = UseMutationOptions<
  UpdateInviteData,
  UpdateInviteVariables
>

type HandleMethodParams = {
  inviteId: string
  expiredAt?: Date
}

type HandleMethod = (params: HandleMethodParams) => Promise<OperationResult>

type MutationResult = UseMutationState<UpdateInviteData, UpdateInviteVariables>

/**
 * To update invite with expired time
 * @returns updateInvite mutation and its results
 */
export const useUpdateInvite = (
  options?: UpdateInviteOptions
): [MutationResult, HandleMethod] => {
  const [mutationResult, updateInvite] = useNotificationMutation(
    UPDATE_INVITE_EXPIRED,
    {
      ...options,
      getSuccessMessage: (invite) =>
        `Invitation ${invite.expiredAt ? 'cancelled' : 'sent'}`,
    }
  )

  const handleUpdateInvite = ({ inviteId, expiredAt = new Date() }) =>
    updateInvite({ inviteId, expiredAt })

  return [mutationResult, handleUpdateInvite]
}
