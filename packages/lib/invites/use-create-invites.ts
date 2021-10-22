import { FetchResult, MutationResult } from '@apollo/client'

import {
  UseMutationOptions,
  useNotificationMutation,
} from '@acter/lib/apollo/use-notification-mutation'
import { Invite } from '@acter/schema'
import CREATE_INVITE from '@acter/schema/mutations/invite-create.graphql'

export type InviteVariables = {
  email: string
  message: string
  onActerId: string
}

type CreateInviteData = { createInviteCustom: Invite }

type CreateInviteOptions = UseMutationOptions<CreateInviteData, InviteVariables>

export type HandleMethod = (values: InviteVariables) => Promise<FetchResult>

/**
 * Custom hook that creates a new invite
 * @param options - mutation options e.g. data or variables
 * @returns handleMethod to create invite and the mutation results
 */

export const useCreateInvite = (
  options?: CreateInviteOptions
): [HandleMethod, MutationResult] => {
  const [createInviteCustom, mutationResult] = useNotificationMutation(
    CREATE_INVITE,
    {
      ...options,
      getSuccessMessage: () => 'Invitation sent.',
    }
  )

  const handleCreateInvite = (values: InviteVariables) =>
    createInviteCustom({ variables: values })

  return [handleCreateInvite, mutationResult]
}
