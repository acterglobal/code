import React, { FC, useMemo } from 'react'

import { Avatar as MuiAvatar, Theme } from '@mui/material'
import createStyles from '@mui/styles/createStyles'
import makeStyles from '@mui/styles/makeStyles'
import withStyles from '@mui/styles/withStyles'

import { getInitials } from '@acter/lib/get-initials'
import { Acter } from '@acter/schema'

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    root: {
      width: ({ size }: { size: number }) => theme.spacing(size),
      height: ({ size }: { size: number }) => theme.spacing(size),
      fontSize: '100%',
    },
    acterAvatar: {
      color: theme.palette.secondary.dark,
      backgroundColor: theme.palette.background.paper,
    },
  })
})

export interface ActerAvatarProps {
  acter: Acter
  size?: number
}

export const ActerAvatar: FC<ActerAvatarProps> = ({ acter, size = 6 }) => {
  const classes = useStyles({ size })

  if (!acter) return null

  const avatarUrl = useMemo(
    () =>
      acter.avatarUrl
        ? `${process.env.NEXT_PUBLIC_IMAGE_LOADER_URL}/${acter.avatarUrl}?w=64&h=64&crop=entropy`
        : '',
    [acter.avatarUrl]
  )

  return (
    <Avatar
      size={size}
      className={acter.avatarUrl ? null : classes.acterAvatar}
      alt={`${acter.ActerType.name} ${acter.name}`}
      src={avatarUrl}
    >
      {!acter.avatarUrl && getInitials(acter.name || '')}
    </Avatar>
  )
}

export const Avatar = withStyles((theme: Theme) =>
  createStyles({
    root: {
      width: ({ size }: { size: number }) => theme.spacing(size),
      height: ({ size }: { size: number }) => theme.spacing(size),
      fontSize: ({ size }: { size: number }) => `${size * 0.2}rem`,
      border: `1px solid ${theme.palette.secondary.dark}`,
    },
  })
)(MuiAvatar)
