import React, { FC } from 'react'
import {
  Avatar as MuiAvatar,
  createStyles,
  makeStyles,
  withStyles,
  Theme,
} from '@material-ui/core'
import { green } from '@material-ui/core/colors'
import clsx from 'clsx'
import { getInitials } from '@acter/lib/get-initials'
import { Acter } from '@acter/schema/types'

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    root: {
      width: ({ size }: { size: number }) => theme.spacing(size),
      height: ({ size }: { size: number }) => theme.spacing(size),
      fontSize: '100%',
      backgroundColor: green[600],
    },
    user: {
      color: theme.palette.getContrastText(green[600]),
      backgroundColor: green[400],
    },
    group: {
      color: theme.palette.getContrastText(green[600]),
      backgroundColor: green[600],
    },
    organisation: {
      color: theme.palette.getContrastText(green[700]),
      backgroundColor: green[700],
    },
    network: {
      color: theme.palette.getContrastText(green[800]),
      backgroundColor: green[800],
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
      backgroundColor: green[600],
      border: '1px solid white',
    },
  })
)(MuiAvatar)
