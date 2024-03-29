import React, { FC } from 'react'

import {
  IconButton,
  Typography,
  createStyles,
  makeStyles,
  Theme,
} from '@material-ui/core'
import { AccountCircle, KeyboardArrowDownOutlined } from '@material-ui/icons'

import { ActerAvatar } from '@acter/components/acter/avatar'
import { User } from '@acter/schema'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      alignItems: 'center',
      borderRadius: theme.spacing(10),
      borderColor: theme.palette.secondary.main,
      borderSize: 1,
      borderStyle: 'solid',
      height: 40,
    },
    text: {
      fontSize: theme.typography.fontSize * 1.1,
      color: theme.colors.grey.dark,
      paddingLeft: theme.spacing(1),
      paddingRight: theme.spacing(1),
    },
    downIcon: {
      color: theme.colors.grey.main,
    },
  })
)

interface ProfileButtonProps {
  user: User
}

export const ProfileButton: FC<ProfileButtonProps> = ({ user }) => {
  const classes = useStyles()

  return (
    <IconButton
      color="inherit"
      aria-label="profile-button"
      className={classes.root}
    >
      {user.Acter?.avatarUrl ? (
        <ActerAvatar acter={user.Acter} size={4} />
      ) : (
        <AccountCircle />
      )}
      <Typography className={classes.text}>
        {user.Acter?.name || user.email}
      </Typography>
      <KeyboardArrowDownOutlined className={classes.downIcon} />
    </IconButton>
  )
}
