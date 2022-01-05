import { useState, useEffect } from 'react'

import { useUser as getUser } from '@auth0/nextjs-auth0'

import { CombinedError, useQuery, UseQueryState } from 'urql'

import GET_USER from '@acter/lib/graphql/queries/user-by-email.graphql'
import { User } from '@acter/schema'

type UseUserData = { user: User }

type UseUserVariables = { email: string }

type UserQueryResult = Omit<
  UseQueryState<UseUserData, UseUserVariables>,
  'error'
>

type UseUserError = Error | CombinedError

export type UseUserQueryResult = UseUserData &
  UserQueryResult & { error?: UseUserError[] }

/**
 * Gives the full user info
 * @returns user
 */
export const useUser = (): UseUserQueryResult => {
  const [userData, setUserData] = useState(null)
  const [fetching, setFetching] = useState(false)
  const [errors, setErrors] = useState<UseUserError[]>()

  const {
    user: sessionUser,
    isLoading: userFetching,
    error: userError,
  } = getUser()

  const [
    { data, fetching: dataFetching, error: dataError, ...restQueryResult },
  ] = useQuery({
    query: GET_USER,
    variables: { email: sessionUser?.email },
    pause: !sessionUser?.email,
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
    ...(restQueryResult as UserQueryResult),
  }
}
