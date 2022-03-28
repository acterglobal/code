import { useEffect, useState } from 'react'

import { useRouter } from 'next/router'

import { getRedirectPathByError } from '@acter/lib/acter/get-redirect-path-by-error'
import { useActer } from '@acter/lib/acter/use-acter'
import { useUser } from '@acter/lib/user/use-user'
import { userHasRoleOnActer } from '@acter/lib/user/user-has-role-on-acter'
import { Acter, ActerConnectionRole } from '@acter/schema'

export type AuthenticationResult = {
  acter: Acter
  fetching: boolean
}

export const useAuthentication = (): AuthenticationResult => {
  const router = useRouter()
  const [fetching, setFetching] = useState<boolean>(true)
  const { acter, fetching: acterLoading, error: acterError } = useActer()
  const { user, fetching: userLoading } = useUser()

  const isAdmin = userHasRoleOnActer(user, ActerConnectionRole.ADMIN, acter)

  useEffect(() => {
    getRedirectPathByError(acterError)
  }, [acterError])

  useEffect(() => {
    if (router.route === '/[acterType]/[slug]/settings') {
      if (acter && user && !isAdmin) {
        router.push({
          pathname: '/403',
          query: router.asPath,
        })
      }
      if (acter && !user) {
        router.push({
          pathname: '/401',
          query: router.asPath,
        })
      }
    }
  }, [acter, user, isAdmin, router.route])

  useEffect(() => {
    setFetching(acterLoading || userLoading)
  }, [acterLoading, userLoading])

  return { acter, fetching }
}
