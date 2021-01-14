import React, { MouseEvent, useContext, useState } from 'react'

import { SessionContext } from 'src/contexts/session'

import { ProfileMenu } from 'src/components/layout/profile-menu'
import { ProfileButton } from 'src/components/profile/profile-button'
import { SignInButton } from 'src/components/layout/sign-in-button'

export const SessionIndicator = () => {
  const { session, signInAction, signOutAction } = useContext(SessionContext)
  const [userMenuAnchorEl, setUserMenuAnchorEl] = useState(null)
  const openUserMenu = (evt: MouseEvent) =>
    setUserMenuAnchorEl(evt.currentTarget)
  const closeUserMenu = () => {
    setUserMenuAnchorEl(null)
  }

  if (!session) {
    return <SignInButton onClick={signInAction} />
  }

  return (
    <>
      <ProfileButton onClick={openUserMenu} />
      <ProfileMenu
        menuAnchorEl={userMenuAnchorEl}
        signedInAs={session.user.email}
        isMenuOpen={Boolean(userMenuAnchorEl)}
        onCloseMenu={closeUserMenu}
        onSignOut={() => signOutAction()}
      />
    </>
  )
}
