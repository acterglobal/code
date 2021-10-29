import { useState, useEffect } from 'react'

import { useLazyQuery, ApolloError, QueryResult } from '@apollo/client'
import { useUser as getUser } from '@auth0/nextjs-auth0'

import { initializeApollo } from '@acter/lib/apollo'
import { User } from '@acter/schema'
import GET_USER from '@acter/schema/queries/user-by-email.graphql'

type UseUserData = { user: User }

type UseUserVariables = { email: string }

type UserQueryResult = Omit<QueryResult<UseUserData, UseUserVariables>, 'error'>

type UseUserError = Error | ApolloError

export type UseUserQueryResult = UseUserData &
  UserQueryResult & { error?: UseUserError[] }

/**
 * Gives the full user info
 * @returns user
 */
export const useUser = (): UseUserQueryResult => {
  const [userData, setUserData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState<UseUserError[]>()

  const {
    user: sessionUser,
    isLoading: userLoading,
    error: userError,
  } = getUser()

  const apollo = initializeApollo()

  const cache = apollo.readQuery({
    query: GET_USER,
    variables: { email: sessionUser?.email },
  })

  useEffect(() => {
    setUserData(cache?.user)
  }, [cache])

  const [
    getUserData,
    { loading: dataLoading, error: dataError, ...restQueryResult },
  ] = useLazyQuery(GET_USER, {
    onCompleted: ({ user }) => {
      setUserData(user)
    },
  })

  useEffect(() => {
    setLoading(userLoading || dataLoading)
  }, [userLoading, dataLoading])

  useEffect(() => {
    const userErrorOrEmpty = userError ? [userError] : []
    const dataErrorOrEmpty = dataError ? [dataError] : []
    const theErrors: UseUserError[] = [...userErrorOrEmpty, ...dataErrorOrEmpty]
    if (theErrors.length > 0) setErrors(theErrors)
  }, [userError, dataError])

  useEffect(() => {
    if (sessionUser?.email) {
      getUserData({ variables: { email: sessionUser.email } })
    }
  }, [sessionUser])

  return {
    user: userData,
    loading,
    error: errors,
    ...(restQueryResult as UserQueryResult),
  }
}
