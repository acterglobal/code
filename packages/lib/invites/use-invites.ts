import { useEffect, useState } from 'react'

import { CombinedError, useQuery } from 'urql'

import { Invite } from '@acter/schema'
import GET_INVITES from '@acter/schema/queries/get-invites-by-acter-and-created-by-user.graphql'

type UseInvitesQueryResults = {
  invites: Invite[]
  fetching: boolean
  error: CombinedError
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

  const [pause, setPause] = useState(true)
  const [variables, setVariables] = useState<InvitesQueryVariables>()
  const [invites, setInvites] = useState<Invite[]>([])

  const [{ data, fetching, error, ...restQueryResult }] = useQuery<
    InvitesQueryData,
    InvitesQueryVariables
  >({
    query: GET_INVITES,
    variables,
    pause,
  })

  useEffect(() => {
    if (onActerId && createdByUserId) {
      setVariables({ onActerId, createdByUserId })
      setPause(false)
    }
  }, [onActerId, createdByUserId])

  useEffect(() => {
    if (data) {
      setInvites(data.invites)
    }
  }, [data])

  return { invites, fetching, error, ...restQueryResult }
}
