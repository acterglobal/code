import React, { FC } from 'react'
import { Box, Typography, Button } from '@material-ui/core'
import { makeStyles, Theme } from '@material-ui/core/styles'
import { FollowersAvatars } from 'src/components/acter/followers-avatars'
import { Connect, ConnectProps } from 'src/components/acter/connect'

import { Acter, User } from '@schema'

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

export type ParticipatesProps = ConnectProps

export const Participates: FC<ParticipatesProps> = (props) => {
  const classes = useStyles()

  return (
    <Box className={classes.container}>
      <Typography className={classes.heading} variant="h6">
        Participates
      </Typography>
      <FollowersAvatars acter={props.acter} />
      <Connect {...props} />
    </Box>
  )
}
