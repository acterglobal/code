import router from 'next/router'

import { userHasRoleOnActer } from '@acter/lib/user/user-has-role-on-acter'
import { Acter, ActerConnectionRole, User } from '@acter/schema'

export const getRedirectPathByPage: (
  acter: Acter,
  user: User,
  userRole: ActerConnectionRole
) => void = (acter: Acter, user: User, userRole: ActerConnectionRole) => {
  const hasRole = userHasRoleOnActer(user, userRole, acter)

  if (acter && user && !hasRole) {
    return router.push({
      pathname: '/403',
      query: router.asPath,
    })
  }
  if (acter && !user) {
    return router.push({
      pathname: '/401',
      query: router.asPath,
    })
  }

  return null
}
