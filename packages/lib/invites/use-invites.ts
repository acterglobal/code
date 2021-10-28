import { useEffect, useState } from 'react'

import { ApolloError, useLazyQuery } from '@apollo/client'

import { Invite } from '@acter/schema'
import GET_INVITES from '@acter/schema/queries/get-invites-by-acter-and-created-by-user.graphql'

type UseInvitesQueryResults = {
  invites: Invite[]
  loading: boolean
  error: ApolloError
}
type InvitesQueryData = { invites: Invite[] }
type InvitesQueryVariables = {
  onActerId: string
  createdByUserId: string
}

type UseInvitesParams = InvitesQueryVariables
/**
 * Gives invites
 * @returns invites by desc of sentAt
 */
export const useInvites = (
  params: UseInvitesParams
): UseInvitesQueryResults => {
  const { onActerId, createdByUserId } = params

  const [invites, setInvites] = useState<Invite[]>([])

  const [
    fetchInvites,
    { data, loading, error, ...restQueryResult },
  ] = useLazyQuery<InvitesQueryData, InvitesQueryVariables>(GET_INVITES)

  useEffect(() => {
    if (onActerId && createdByUserId) {
      fetchInvites({
        variables: { onActerId, createdByUserId },
      })
    }
  }, [onActerId, createdByUserId])

  useEffect(() => {
    if (data) {
      setInvites(data.invites)
    }
  }, [data])

  return { invites, loading, error, ...restQueryResult }
}
