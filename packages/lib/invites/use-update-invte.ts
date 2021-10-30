import { OperationResult, UseMutationState } from 'urql'

import {
  useNotificationMutation,
  UseMutationOptions,
} from '@acter/lib/urql/use-notification-mutation'
import { Invite } from '@acter/schema'
import UPDATE_INVITE_EXPIRED from '@acter/schema/mutations/invite-update-expired.graphql'

type InviteVariables = {
  inviteId: string
  expiredAt: Date
}

type UpdateInviteData = Invite

type UpdateInviteOptions = UseMutationOptions<UpdateInviteData, InviteVariables>

type HandleMethod = (inviteId: string) => Promise<OperationResult>

type MutationResult = UseMutationState<UpdateInviteData, InviteVariables>

/**
 * To update invite with expired time
 * @returns updateInvite mutation and its results
 */
export const useUpdateInvite = (
  options?: UpdateInviteOptions
): [MutationResult, HandleMethod] => {
  const [
    mutationResult,
    updateInvite,
  ] = useNotificationMutation(UPDATE_INVITE_EXPIRED, { ...options })

  const handleUpdateInvite = (inviteId) =>
    updateInvite({
      inviteId,
      expiredAt: new Date(),
    })

  return [mutationResult, handleUpdateInvite]
}
