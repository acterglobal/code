import { useState } from 'react'

import { OperationResult, UseMutationState } from 'urql'

import {
  useNotificationMutation,
  UseMutationOptions,
} from '@acter/lib/urql/use-notification-mutation'
import { Invite } from '@acter/schema'
import UPDATE_INVITE from '@acter/schema/mutations/invite-update.graphql'

export type UpdateInviteVariables = {
  inviteId: string
  expiredAt: Date
  acceptedAt: Date
}

type UpdateInviteData = Invite

type UpdateInviteOptions = UseMutationOptions<
  UpdateInviteData,
  UpdateInviteVariables
>

type HandleMethodParams = {
  inviteId: string
  expiredAt?: Date
  acceptedAt?: Date
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
  const [message, setMessage] = useState(null)
  const [mutationResult, updateInvite] = useNotificationMutation(
    UPDATE_INVITE,
    {
      ...options,
      getSuccessMessage: () => message,
    }
  )

  const handleUpdateInvite = ({ inviteId, expiredAt, acceptedAt }) => {
    const status = acceptedAt ? 'accepted' : expiredAt ? 'cancelled' : 'sent'
    setMessage(`Invitation ${status}`)

    return updateInvite({ inviteId, expiredAt, acceptedAt })
  }

  return [mutationResult, handleUpdateInvite]
}
