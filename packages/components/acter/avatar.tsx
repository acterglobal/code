import React, { FC } from 'react'

import {
  Avatar as MuiAvatar,
  createStyles,
  makeStyles,
  withStyles,
  Theme,
} from '@material-ui/core'

import clsx from 'clsx'

import { getInitials } from '@acter/lib/get-initials'
import { Acter } from '@acter/schema'

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    root: {
      width: ({ size }: { size: number }) => theme.spacing(size),
      height: ({ size }: { size: number }) => theme.spacing(size),
      fontSize: '100%',
      backgroundColor: theme.colors.white,
      color: '#2A2A2A',
    },
    user: {
      color: '#2A2A2A',
      backgroundColor: theme.colors.white,
    },
    group: {
      color: '#2A2A2A',
      backgroundColor: theme.colors.white,
    },
    organisation: {
      color: '#2A2A2A',
      backgroundColor: theme.colors.white,
    },
    network: {
      color: '#2A2A2A',
      backgroundColor: theme.colors.white,
    },
  })
})

export interface ActerAvatarProps {
  acter: Acter
  size?: number
}

export const ActerAvatar: FC<ActerAvatarProps> = ({ acter, size = 6 }) => {
  const classes = useStyles({ size })

  const avatarUrl = `${process.env.NEXT_PUBLIC_IMAGE_LOADER_URL}/${acter.avatarUrl}?w=64&h=64&crop=entropy`

  return (
    <Avatar
      size={size}
      className={clsx(
        acter.avatarUrl
          ? null
          : classes[acter.ActerType.name.toLocaleLowerCase()]
      )}
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
      fontSize: '100%',
      border: '1px solid white',
    },
  })
)(MuiAvatar)
