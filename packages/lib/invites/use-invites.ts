import { CombinedError, OperationContext, useQuery } from 'urql'

import { Invite } from '@acter/schema'
import GET_INVITES from '@acter/schema/queries/get-invites-by-acter-and-created-by-user.graphql'

type UseInvitesQueryResults = {
  invites: Invite[]
  fetching: boolean
  error: CombinedError
  reexecuteQuery: (opts?: Partial<OperationContext>) => void
}
type InvitesQueryData = { invites: Invite[] }
type InvitesQueryVariables = {
  onActerId: string
  createdByUserId: string
}

type UseInvitesParams = InvitesQueryVariables
/**
 * Gives invites
 * @arg params, object contains mandatory keys(onActerId, createdByUserId)
 * @returns invites by desc of sentAt
 */
export const useInvites = (
  params: UseInvitesParams
): UseInvitesQueryResults => {
  const { onActerId, createdByUserId } = params

  const [
    { data, fetching, error, ...restQueryResult },
    reexecuteQuery,
  ] = useQuery<InvitesQueryData, InvitesQueryVariables>({
    query: GET_INVITES,
    variables: { onActerId, createdByUserId },
    pause: !onActerId || !createdByUserId,
  })

  return {
    invites: data?.invites || [],
    fetching,
    error,
    reexecuteQuery,
    ...restQueryResult,
  }
}
