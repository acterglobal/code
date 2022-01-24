import { useEffect, useState } from 'react'

import { GraphQLError } from 'graphql'

import { getPrivacySettings } from '@acter/lib/acter/get-privacy-settings'
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

export const useAuthentication = (route?: string): AuthenticationResult => {
  const [fetching, setFetching] = useState<boolean>(true)
  const [redirect, setRedirect] = useState<string>('')
  const { acter, fetching: acterLoading, error: acterError } = useActer()
  const { user, fetching: userLoading } = useUser()

  const isPrivate = getPrivacySettings(acter)
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
    if (route === '/[acterType]/[slug]/settings') {
      if (user && isPrivate && !isAdmin) {
        setRedirect('/403')
      }
    }
  }, [route, isAdmin, user, isPrivate])

  useEffect(() => {
    setFetching(acterLoading || userLoading)
  }, [acterLoading, userLoading])

  return { acter, fetching, redirect }
}
