import { useEffect, useState } from 'react'

import { GraphQLError } from 'graphql'

import { useActer } from '@acter/lib/acter/use-acter'
import {
  NotAuthorizedError,
  NotLoggedError,
} from '@acter/lib/errors/graphql-errors'
import { useUser } from '@acter/lib/user/use-user'
import { userHasRoleOnActer } from '@acter/lib/user/user-has-role-on-acter'
import { Acter, ActerConnectionRole } from '@acter/schema'

export type AuthenticationResult = {
  acter: Acter
  fetching: boolean
  redirect: string
}

export const useAuthentication = (
  settingsRoute?: string
): AuthenticationResult => {
  const [fetching, setFetching] = useState<boolean>(true)
  const [redirect, setRedirect] = useState<string>('')
  const [admin, setAdmin] = useState<boolean>(null)
  const { acter, fetching: acterLoading, error: acterError } = useActer()
  const { user, fetching: userLoading } = useUser()

  const isAdmin = userHasRoleOnActer(user, ActerConnectionRole.ADMIN, acter)

  useEffect(() => {
    if (acterError) {
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
    setAdmin(isAdmin)
  }, [isAdmin])

  useEffect(() => {
    if (settingsRoute === '/[acterType]/[slug]/settings') {
      if (acter && user && !admin) {
        setRedirect('/403')
      }
    }
  }, [acter, user, admin, settingsRoute])

  useEffect(() => {
    setFetching(acterLoading || userLoading)
  }, [acterLoading, userLoading])

  return { acter, fetching, redirect }
}
