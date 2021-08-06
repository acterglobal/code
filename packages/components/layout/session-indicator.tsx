import React, { FC } from 'react'
import { Link } from '@acter/components/util/anchor-link'
import { Button, Link as MuiLink, MenuItem } from '@material-ui/core'
import { makeStyles, Theme } from '@material-ui/core/styles'
import { DropdownMenu } from '@acter/components/util/dropdown-menu'
import { ProfileButton } from '@acter/components/user/profile-button'
import { User } from '@acter/schema'
import { useAuthRedirect } from '@acter/lib/url/use-auth-redirect'

export interface SessionIndicatorProps {
  user?: User
}

export const SessionIndicator: FC<SessionIndicatorProps> = ({ user }) => {
  const classes = useStyles()
  const [redirectToLogin, redirectToSignup] = useAuthRedirect()

  if (!user) {
    return (
      <>
        <Button
          color="inherit"
          onClick={redirectToSignup}
          aria-label="signin-button"
        >
          Sign up
        </Button>
        <Button
          color="inherit"
          onClick={redirectToLogin}
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
          <MuiLink className={classes.text}>Sign Out</MuiLink>
        </Link>
      </MenuItem>
    </DropdownMenu>
  )
}

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
