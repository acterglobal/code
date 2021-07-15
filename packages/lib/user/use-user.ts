import { useState, useEffect } from 'react'
import { useUser as getUser } from '@auth0/nextjs-auth0'
import { useLazyQuery, ApolloError } from '@apollo/client'
import GET_USER from '@acter/schema/queries/user-by-email.graphql'
import { User } from '@acter/schema/types'

/**
 * Gives the full user info
 * @returns user
 */
export const useUser = (): [User, boolean, Error | ApolloError] => {
  const [email, setEmail] = useState(null)
  const [userData, setUserData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const { user, isLoading: userLoading, error: userError } = getUser()

  const [
    getUserData,
    { loading: dataLoading, error: dataError },
  ] = useLazyQuery(GET_USER, {
    variables: { email },
    onCompleted: (data) => setUserData(data),
  })

  useEffect(() => {
    if (user) {
      setEmail(user.email)
    }
  }, [user])

  useEffect(() => {
    if (email) {
      getUserData()
    }
  }, [email])

  useEffect(() => {
    if (userLoading || dataLoading) {
      setLoading(true)
    }
  }, [userLoading, dataLoading])

  useEffect(() => {
    setError(userError || dataError)
  }, [userError, dataError])

  return [userData, loading, error]
}
