import React, { FC } from 'react'

import { AccountCircle, KeyboardArrowDownOutlined } from '@mui/icons-material'
import { IconButton, Typography, Theme } from '@mui/material'
import createStyles from '@mui/styles/createStyles'
import makeStyles from '@mui/styles/makeStyles'

import { ActerAvatar } from '@acter/components/acter/avatar'
import { blueGrey } from '@acter/components/themes/colors'
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
      color: blueGrey.A700,
      paddingLeft: theme.spacing(1),
      paddingRight: theme.spacing(1),
    },
    downIcon: {
      color: blueGrey.A200,
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
      size="large"
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
