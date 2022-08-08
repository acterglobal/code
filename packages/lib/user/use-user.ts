import { useState, useEffect } from 'react'

import { useUser as getUser } from '@auth0/nextjs-auth0'

import { CombinedError, useQuery, UseQueryState } from 'urql'

import { User } from '@acter/schema'
import GET_USER_BY_ACTER_ID from '@acter/schema/queries/user-by-acter-id.graphql'
import GET_USER from '@acter/schema/queries/user-by-email.graphql'

type UseUserData = { user: User }

type UserUserVariablesByActerId = { acterId: string }

type UseUserVariablesBySession = { email: string }

type UseUserVariables = UseUserVariablesBySession | UserUserVariablesByActerId

type UserQueryResult = Omit<
  UseQueryState<UseUserData, UseUserVariables>,
  'error'
>

type UseUserError = Error | CombinedError

export type UseUserQueryResult = UseUserData &
  UserQueryResult & { error?: UseUserError[] }

export type UseUserQueryResult3 = Omit<
  UseQueryState<UseUserData, UseUserVariables>,
  'error'
> & {
  user: User
  error: UseUserError
}

type UserProps = {
  acterId?: string
}
/**
 * Gives the full user info
 * @param options for passing acterId which are optional
 * @returns user
 */
export const useUser = (options?: UserProps): UseUserQueryResult3 => {
  const [userData, setUserData] = useState(null)
  const [fetching, setFetching] = useState<boolean>(false)
  const [errors, setErrors] = useState<UseUserError[]>()
  const acterId = options?.acterId

  const {
    user: sessionUser,
    isLoading: userFetching,
    error: userError,
  } = getUser()

  const variables = acterId ? { acterId } : { email: sessionUser?.email }
  const query = acterId ? GET_USER_BY_ACTER_ID : GET_USER
  const pause = !variables || Object.keys(variables).length === 0

  const [
    { data, fetching: dataFetching, error: dataError, ...restQueryResult },
  ] = useQuery<UseUserData>({
    query,
    variables,
    pause,
  })

  useEffect(() => {
    setFetching(userFetching || dataFetching)
  }, [userFetching, dataFetching])

  useEffect(() => {
    if (data?.user) setUserData(data.user)
  }, [data])

  useEffect(() => {
    const userErrorOrEmpty = userError ? [userError] : []
    const dataErrorOrEmpty = dataError ? [dataError] : []
    const theErrors: UseUserError[] = [...userErrorOrEmpty, ...dataErrorOrEmpty]
    if (theErrors.length > 0) setErrors(theErrors)
  }, [userError, dataError])

  return {
    user: userData,
    fetching,
    error: errors,
    ...(restQueryResult as UseUserQueryResult3),
  }
}
