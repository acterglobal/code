import { FetchResult, MutationResult } from '@apollo/client'

import {
  UseMutationOptions,
  useNotificationMutation,
} from '@acter/lib/apollo/use-notification-mutation'
import { Invite } from '@acter/schema'
import UPDATE_INVITE_EXPIRED from '@acter/schema/mutations/invite-update-expired.graphql'

type InviteVariables = {
  inviteId: string
  expiredAt: Date
}
type HandleMethod = (inviteId: string) => Promise<FetchResult>

type UpdateInviteData = Invite

type UpdateInviteOptions = UseMutationOptions<UpdateInviteData, InviteVariables>
/**
 * To update invite with expired time
 * @returns updateInvite mutation and its results
 */
export const useUpdateInvite = (
  options?: UpdateInviteOptions
): [HandleMethod, MutationResult] => {
  const [
    updateInvite,
    { ...restQueryResult },
  ] = useNotificationMutation(UPDATE_INVITE_EXPIRED, { ...options })

  const handleUpdateInvite = (inviteId) =>
    updateInvite({
      variables: {
        inviteId,
        expiredAt: new Date(),
      },
    })

  return [handleUpdateInvite, { ...restQueryResult }]
}
