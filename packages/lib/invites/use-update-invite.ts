import { useState } from 'react'

import { OperationResult, UseMutationState } from 'urql'

import { useTranslation } from '@acter/lib/i18n/use-translation'
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
 * @returns updateOneInvite mutation and its results
 */
export const useUpdateInvite = (
  options?: UpdateInviteOptions
): [MutationResult, HandleMethod] => {
  const { t } = useTranslation('success-messages')
  const [message, setMessage] = useState(null)
  const [mutationResult, updateOneInvite] = useNotificationMutation(
    UPDATE_INVITE,
    {
      ...options,
      getSuccessMessage: () => message,
    }
  )

  const handleUpdateInvite = ({ inviteId, expiredAt, acceptedAt }) => {
    const status = acceptedAt ? 'accepted' : expiredAt ? 'cancelled' : 'sent'
    setMessage(t(`invitationStatus.${status}`))

    return updateOneInvite({ inviteId, expiredAt, acceptedAt })
  }

  return [mutationResult, handleUpdateInvite]
}
