import React from 'react'
import { useSession, signIn, signOut } from 'next-auth/client'

import { Link, ListItemText, MenuItem } from '@material-ui/core'

import { DropdownMenu } from 'src/components/util/dropdown-menu'
import { ProfileButton } from 'src/components/profile/profile-button'
import { SignInButton } from 'src/components/layout/sign-in-button'
import { CircularProgress } from '@material-ui/core'

export const SessionIndicator = () => {
  const [session, sessionLoading] = useSession()

  if (sessionLoading) {
    return <CircularProgress aria-label="session-loading-indicator" />
  }

  const user = session?.user

  if (!user) {
    return <SignInButton onClick={() => signIn()} />
  }

  return (
    <DropdownMenu anchorNode={<ProfileButton />}>
      <ListItemText>Signed in as {user.email}</ListItemText>
      <MenuItem>
        <Link href="/profile">Edit Profile</Link>
      </MenuItem>
      <MenuItem
        onClick={() => {
          signOut()
        }}
      >
        Sign Out
      </MenuItem>
    </DropdownMenu>
  )
}
