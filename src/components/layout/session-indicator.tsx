import React, { MouseEvent, useState } from 'react'
import { useSession, signIn, signOut } from 'next-auth/client'
import { get } from 'lodash'

import { SessionMenu } from 'src/components/layout/session-menu'
import { ProfileButton } from 'src/components/profile/profile-button'
import { SignInButton } from 'src/components/layout/sign-in-button'
import { CircularProgress } from '@material-ui/core'

export const SessionIndicator = () => {
  const [session, sessionLoading] = useSession()
  const [userMenuAnchorEl, setUserMenuAnchorEl] = useState(null)
  const openUserMenu = (evt: MouseEvent) =>
    setUserMenuAnchorEl(evt.currentTarget)
  const closeUserMenu = () => {
    setUserMenuAnchorEl(null)
  }

  if (sessionLoading) {
    return <CircularProgress aria-label="session-loading-indicator" />
  }

  const user = get(session, 'user')

  if (!user) {
    return <SignInButton onClick={() => signIn()} />
  }

  return (
    <>
      <ProfileButton onClick={openUserMenu} />
      <SessionMenu
        menuAnchorEl={userMenuAnchorEl}
        signedInAs={user.email}
        isMenuOpen={Boolean(userMenuAnchorEl)}
        onCloseMenu={closeUserMenu}
        onSignOut={() => signOut()}
      />
    </>
  )
}
