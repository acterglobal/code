import React, { FC } from 'react'
import { Avatar, createStyles, makeStyles, Theme } from '@material-ui/core'
import { green } from '@material-ui/core/colors'
import clsx from 'clsx'
import { getInitials } from 'src/lib/get-initials'
import { useRouter } from 'next/router'
import { MoreHoriz as MeetBallsIcon } from '@material-ui/icons'
import { Acter } from '@schema'

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    root: {
      width: ({ size }: { size: number }) => theme.spacing(size),
      height: ({ size }: { size: number }) => theme.spacing(size),
      fontSize: '100%',
      backgroundColor: green[600],
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
    meetballsIcon: {
      cursor: 'pointer',
    },
  })
})

export interface ActerAvatarProps {
  acter: Acter
  size?: number
  groupAvatar?: boolean
}

export const ActerAvatar: FC<ActerAvatarProps> = (props) => {
  const { acter, size = 6, groupAvatar = false } = props
  const classes = useStyles({ size })
  const router = useRouter()

  const avatarUrl = groupAvatar
    ? ''
    : `${process.env.NEXT_PUBLIC_IMAGE_LOADER_URL}/${acter.avatarUrl}?w=64&h=64&crop=entropy`

  const handleRedirectToMembers = () => {
    const { acterType, slug } = router.query
    router.push(`/${acterType}/${slug}/members`)
  }

  return (
    <Avatar
      className={clsx(
        classes.root,
        acter.avatarUrl || classes[acter.ActerType.name.toLocaleLowerCase()]
      )}
      alt={`${acter.ActerType.name} ${acter.name}`}
      src={avatarUrl}
    >
      {groupAvatar ? (
        <MeetBallsIcon
          onClick={handleRedirectToMembers}
          className={classes.meetballsIcon}
        />
      ) : acter.avatarUrl ? (
        ''
      ) : (
        getInitials(acter.name || '')
      )}
    </Avatar>
  )
}
