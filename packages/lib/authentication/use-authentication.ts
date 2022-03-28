import { useEffect, useState } from 'react'

import { useRouter } from 'next/router'

import { getRedirectPathByError } from '@acter/lib/acter/get-redirect-path-by-error'
import { getRedirectPathByPage } from '@acter/lib/acter/get-redirect-path-by-page'
import { useActer } from '@acter/lib/acter/use-acter'
import { useUser } from '@acter/lib/user/use-user'
import { Acter, ActerConnectionRole } from '@acter/schema'

const { ADMIN, MEMBER } = ActerConnectionRole

export type AuthenticationResult = {
  acter: Acter
  fetching: boolean
}

export const useAuthentication = (): AuthenticationResult => {
  const router = useRouter()
  const [fetching, setFetching] = useState<boolean>(true)
  const { acter, fetching: acterLoading, error: acterError } = useActer()
  const { user, fetching: userLoading } = useUser()

  useEffect(() => {
    getRedirectPathByError(acterError)
  }, [acterError])

  useEffect(() => {
    if (router.route === '/[acterType]/[slug]/members') {
      getRedirectPathByPage(acter, user, MEMBER || ADMIN)
    }
  }, [acter, user, router.route])

  useEffect(() => {
    if (router.route === '/[acterType]/[slug]/settings') {
      getRedirectPathByPage(acter, user, ADMIN)
    }
  }, [acter, user, router.route])

  useEffect(() => {
    setFetching(acterLoading || userLoading)
  }, [acterLoading, userLoading])

  return { acter, fetching }
}
