import React, { FC, useMemo } from 'react'

import {
  Avatar as MuiAvatar,
  createStyles,
  makeStyles,
  withStyles,
  Theme,
  Box,
} from '@material-ui/core'

import { ActerTypes } from '@acter/lib/constants'
import { getInitials } from '@acter/lib/get-initials'
import { getImageBaseUrl } from '@acter/lib/images/get-image-base-url'
import { Acter } from '@acter/schema'

const { USER } = ActerTypes

export interface ActerAvatarProps {
  acter: Acter
  size?: number
  handleOpenSidePanel?: (acterId: string) => void
}

export const ActerAvatar: FC<ActerAvatarProps> = ({
  acter,
  size = 6,
  handleOpenSidePanel,
}) => {
  const classes = useStyles({ size })

  if (!acter) return null

  const isUserType = acter.ActerType.name === USER

  const avatarUrl = useMemo(
    () =>
      acter.avatarUrl
        ? `${getImageBaseUrl()}/${acter.avatarUrl}?w=64&h=64&crop=entropy`
        : '',
    [acter.avatarUrl]
  )

  const handleClick = () => {
    if (isUserType && !!handleOpenSidePanel)
      return handleOpenSidePanel(acter?.id)
    else return null
  }

  return (
    <Box onClick={handleClick}>
      <Avatar
        size={size}
        className={acter.avatarUrl ? null : classes.acterAvatar}
        alt={`${acter.ActerType.name} ${acter.name}`}
        src={avatarUrl}
      >
        {!acter.avatarUrl && getInitials(acter.name || '')}
      </Avatar>
    </Box>
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

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    root: {
      width: ({ size }: { size: number }) => theme.spacing(size),
      height: ({ size }: { size: number }) => theme.spacing(size),
      fontSize: '100%',
    },
    acterAvatar: {
      color: theme.palette.secondary.dark,
      backgroundColor: theme.colors.white,
    },
  })
})
