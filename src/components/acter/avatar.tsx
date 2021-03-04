import React, { FC } from 'react'
import { Avatar, createStyles, makeStyles, Theme } from '@material-ui/core'
import { green } from '@material-ui/core/colors'
import clsx from 'clsx'
import { getInitials } from 'src/lib/get-initials'

import { Acter } from '@generated/type-graphql'

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    root: {
      width: ({ size }: { size: number }) => theme.spacing(size),
      height: ({ size }: { size: number }) => theme.spacing(size),
      fontSize: '100%',
    },
    user: {
      color: theme.palette.getContrastText(green[400]),
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
  return (
    <Avatar
      className={clsx(
        classes.root,
        acter.avatarUrl || classes[acter.ActerType.name.toLocaleLowerCase()]
      )}
      alt={`${acter.ActerType.name} ${acter.name}`}
      src={acter.avatarUrl}
    >
      {acter.avatarUrl ? '' : getInitials(acter.name)}
    </Avatar>
  )
}
