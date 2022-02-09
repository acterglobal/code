import React, { FC } from 'react'

import {
  createStyles,
  makeStyles,
  MenuItem,
  Theme,
  Link as MuiLink,
  Box,
  PopoverOrigin,
} from '@material-ui/core'

import { ActerAvatar } from '@acter/components/acter/avatar'
import { LoadingSpinner } from '@acter/components/atoms/loading/spinner'
import { LoginIcon } from '@acter/components/icons'
import { commonStyles } from '@acter/components/organisms/side-bar/common'
import { Link } from '@acter/components/util/anchor-link'
import { DropdownMenu as MenuPopUp } from '@acter/components/util/dropdown-menu'
import { useAuthRedirect } from '@acter/lib/url/use-auth-redirect'
import { useUser } from '@acter/lib/user/use-user'

export interface ProfileButtonProps {
  anchorOrigin?: PopoverOrigin
  transformOrigin?: PopoverOrigin
}

export const ProfileButton: FC<ProfileButtonProps> = ({
  anchorOrigin = { vertical: 'bottom', horizontal: 'right' },
  transformOrigin = { vertical: 'top', horizontal: 'left' },
}) => {
  const classes = useStyles()

  const { user, fetching: userLoading } = useUser()
  const { loginUrl } = useAuthRedirect()

  return (
    <>
      {user ? (
        <MenuPopUp
          anchorNode={<ActerAvatar acter={user.Acter} size={4} />}
          anchorOrigin={anchorOrigin}
          transformOrigin={transformOrigin}
        >
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
    </>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    ...commonStyles(theme),
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
