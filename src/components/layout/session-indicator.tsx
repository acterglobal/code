import React, { FC } from 'react'
import Link from 'next/link'
import { signIn, signOut } from 'next-auth/client'

import { Link as MuiLink, MenuItem, Typography } from '@material-ui/core'
import { makeStyles, Theme } from '@material-ui/core/styles'

import { DropdownMenu } from 'src/components/util/dropdown-menu'
import { ProfileButton } from 'src/components/user/profile-button'
import { SignInButton } from 'src/components/layout/sign-in-button'

import { User } from '@schema'

const useStyles = makeStyles((theme: Theme) => ({
  menuItem: {
    height: theme.spacing(4),
    fontSize: theme.spacing(1.7),
    display: 'flex',
    justifyContent: 'center',
  },
  text: {
    fontSize: 14,
    textAlign: 'center',
  },
}))
export interface SessionIndicatorProps {
  user?: User
}

export const SessionIndicator: FC<SessionIndicatorProps> = ({ user }) => {
  const classes = useStyles()

  if (!user) {
    return <SignInButton onClick={() => signIn()} />
  }

  return (
    <DropdownMenu anchorNode={<ProfileButton user={user} />}>
      <MenuItem className={classes.menuItem}>
        <Link href="/profile">
          <MuiLink className={classes.text}>Edit Profile</MuiLink>
        </Link>
      </MenuItem>
      <MenuItem className={classes.menuItem} onClick={() => signOut()}>
        <Typography variant="body2" className={classes.text}>
          Sign Out
        </Typography>
      </MenuItem>
    </DropdownMenu>
  )
}
