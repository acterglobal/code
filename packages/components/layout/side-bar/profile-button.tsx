import React, { FC } from 'react'

import {
  createStyles,
  Divider,
  ListItem,
  makeStyles,
  MenuItem,
  Theme,
  Link as MuiLink,
  Box,
} from '@material-ui/core'

import { ActerAvatar } from '@acter/components/acter/avatar'
import { LoginIcon } from '@acter/components/icons'
import { Link } from '@acter/components/util/anchor-link'
import { DropdownMenu as MenuPopUp } from '@acter/components/util/dropdown-menu'
import { LoadingSpinner } from '@acter/components/util/loading-spinner'
import { useAuthRedirect } from '@acter/lib/url/use-auth-redirect'
import { useUser } from '@acter/lib/user/use-user'

export const ProfileButton: FC = () => {
  const classes = useStyles()

  const { user, fetching: userLoading } = useUser()
  const { loginUrl } = useAuthRedirect()

  return (
    <div className={classes.profileSection}>
      <Divider />

      <ListItem className={classes.profileButton}>
        {user ? (
          <MenuPopUp anchorNode={<ActerAvatar acter={user.Acter} size={4} />}>
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
          </MenuPopUp>
        ) : userLoading ? (
          <LoadingSpinner size={20} thickness={3} />
        ) : (
          <Link href={loginUrl} isExternal={true}>
            <Box className={classes.icon}>
              <LoginIcon />
            </Box>
          </Link>
        )}
      </ListItem>
    </div>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    profileSection: {
      marginBottom: theme.spacing(2),
    },
    profileButton: {
      paddingTop: 0,
      cursor: 'pointer',
      display: 'flex',
      justifyContent: 'center',
    },
    menuItem: {
      height: theme.spacing(4),
      fontSize: theme.spacing(1.7),
      display: 'flex',
      justifyContent: 'center',
    },
    text: {
      fontSize: 14,
      textAlign: 'center',
      color: theme.palette.secondary.main,
    },
    icon: {
      width: '100%',
      margin: 'auto',
    },
  })
)
