import React, { FC } from 'react'

import { useRouter } from 'next/router'

import { Box, Typography } from '@material-ui/core'
import { makeStyles, Theme } from '@material-ui/core/styles'

import { FollowersAvatars } from '@acter/components/acter/followers-avatars'
import { acterAsUrl } from '@acter/lib/acter/acter-as-url'
import { Acter } from '@acter/schema'

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    backgroundColor: 'white',
    padding: theme.spacing(2),
    borderRadius: theme.spacing(1),
  },
  heading: {
    fontWeight: 'bolder',
    fontSize: '0.9rem',
  },
}))

export type ParticipantsProps = {
  acter: Acter
}

export const Participants: FC<ParticipantsProps> = ({ acter }) => {
  const classes = useStyles()
  const router = useRouter()
  const handleOnAvatarClick = () =>
    router.push(`${acterAsUrl({ acter, extraPath: ['members'] })}`)
  return (
    <Box className={classes.container}>
      <Typography className={classes.heading} variant="h6">
        Participants
      </Typography>
      <FollowersAvatars acter={acter} onAvatarClick={handleOnAvatarClick} />
    </Box>
  )
}
