import React, { FC } from 'react'
import Link from 'next/link'
import { signIn, signOut } from 'next-auth/client'

import { Link as MuiLink, MenuItem } from '@material-ui/core'

import { DropdownMenu } from 'src/components/util/dropdown-menu'
import { ProfileButton } from 'src/components/user/profile-button'
import { SignInButton } from 'src/components/layout/sign-in-button'

import { User } from '@schema'
export interface SessionIndicatorProps {
  user?: User
}

export const SessionIndicator: FC<SessionIndicatorProps> = ({ user }) => {
  if (!user) {
    return <SignInButton onClick={() => signIn()} />
  }

  return (
    <DropdownMenu anchorNode={<ProfileButton user={user} />}>
      <MenuItem>
        <Link href="/profile">
          <MuiLink>Edit Profile</MuiLink>
        </Link>
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
