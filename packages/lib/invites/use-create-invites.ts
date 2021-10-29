import { FetchResult, MutationResult } from '@apollo/client'

import {
  UseMutationOptions,
  useNotificationMutation,
} from '@acter/lib/apollo/use-notification-mutation'
import { InviteCreateManyInput } from '@acter/schema/generated/resolvers/inputs/InviteCreateManyInput'
import CREATE_INVITES from '@acter/schema/mutations/invites-create.graphql'

export type CreateInvitesVariables = { data: InviteCreateManyInput[] }

type CreateInvitesData = { count: number }

type CreateInviteOptions = UseMutationOptions<
  CreateInvitesData,
  CreateInvitesVariables
>

export type HandleMethod = (
  values: InviteCreateManyInput[]
) => Promise<FetchResult>

/**
 * Custom hook that create invites
 * @param options - mutation options e.g. data or variables
 * @returns handleMethod to create invite and the mutation results
 */

export const useCreateInvites = (
  options?: CreateInviteOptions
): [HandleMethod, MutationResult] => {
  const [createManyInvite, mutationResult] = useNotificationMutation(
    CREATE_INVITES,
    {
      ...options,
      getSuccessMessage: () => 'Invitations sent.',
    }
  )

  const handleCreateInvite = (values) =>
    createManyInvite({ variables: { data: values } })

  return [handleCreateInvite, mutationResult]
}
