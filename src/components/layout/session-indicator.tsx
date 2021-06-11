import React, { FC } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

import {
  Button,
  Link as MuiLink,
  MenuItem,
  Typography,
} from '@material-ui/core'
import { makeStyles, Theme } from '@material-ui/core/styles'

import { DropdownMenu } from 'src/components/util/dropdown-menu'
import { ProfileButton } from 'src/components/user/profile-button'

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
  const router = useRouter()

  if (!user) {
    return (
      <>
        <Button
          color="inherit"
          onClick={() => router.push('/api/auth/signup')}
          aria-label="signin-button"
        >
          Sign up
        </Button>
        <Button
          color="inherit"
          onClick={() => router.push('/api/auth/login')}
          aria-label="signin-button"
        >
          Log in
        </Button>
      </>
    )
  }

  return (
    <DropdownMenu anchorNode={<ProfileButton user={user} />}>
      <MenuItem className={classes.menuItem}>
        <Link href="/profile">
          <MuiLink className={classes.text}>Edit Profile</MuiLink>
        </Link>
      </MenuItem>
      <MenuItem className={classes.menuItem}>
        <Link href="/api/auth/logout">
          <a>
            <Typography variant="body2" className={classes.text}>
              Sign Out
            </Typography>
          </a>
        </Link>
      </MenuItem>
    </DropdownMenu>
  )
}
