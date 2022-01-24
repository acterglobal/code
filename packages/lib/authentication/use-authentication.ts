import { useEffect, useState } from 'react'

import { GraphQLError } from 'graphql'

import { useActer } from '@acter/lib/acter/use-acter'
import {
  NotAuthorizedError,
  NotLoggedError,
} from '@acter/lib/errors/graphql-errors'

export type AuthenticationResult = {
  isAuthenticated: boolean
  loading: boolean
  redirect: string
}

export const useAuthentication = (): AuthenticationResult => {
  const [loading, setLoading] = useState<boolean>(true)
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)
  const [redirect, setRedirect] = useState<string>('')
  const { fetching: acterLoading, error: acterError } = useActer()

  useEffect(() => {
    if (acterError) {
      setIsAuthenticated(false)
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const { graphQLErrors }: GraphQLError[] | any = acterError
      graphQLErrors.forEach((err) => {
        if (err.message === NotAuthorizedError.message) {
          setRedirect('/403')
        }
        if (err.message === NotLoggedError.message) {
          setRedirect('/401')
        }
      })
    }
  }, [acterError])

  useEffect(() => {
    if (!acterLoading && !acterError) setIsAuthenticated(true)
  }, [acterLoading, acterError])

  useEffect(() => {
    setLoading(acterLoading)
  }, [acterLoading])

  return { isAuthenticated, loading, redirect }
}
