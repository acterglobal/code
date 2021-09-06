import React, { FC } from 'react'
import { Link } from '@acter/components/util/anchor-link'
import { Button, Link as MuiLink, MenuItem } from '@material-ui/core'
import { makeStyles, Theme } from '@material-ui/core/styles'
import { DropdownMenu } from '@acter/components/util/dropdown-menu'
import { ProfileButton } from '@acter/components/user/profile-button'
import { useAuthRedirect } from '@acter/lib/url/use-auth-redirect'
import { useUser } from '@acter/lib/user/use-user'

export const SessionIndicator: FC = () => {
  const classes = useStyles()
  const { loginUrl, signupUrl } = useAuthRedirect()
  const { user, loading } = useUser()

  if (loading) {
    return <>Loading...</>
  }

  if (!user) {
    return (
      <>
        <Button color="inherit" href={signupUrl} aria-label="signin-button">
          Sign up
        </Button>
        <Button color="inherit" href={loginUrl} aria-label="signin-button">
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
        <Link href="/api/auth/logout" isExternal={true}>
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
