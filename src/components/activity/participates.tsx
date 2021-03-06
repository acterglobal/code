import React, { FC } from 'react'
import { Box, Typography, Button } from '@material-ui/core'
import { makeStyles, Theme } from '@material-ui/core/styles'
import { FollowersAvatars } from 'src/components/acter/followers-avatars'
import { Connect, ConnectProps } from 'src/components/acter/connect'

import { Acter, User } from '@generated/type-graphql'

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    padding: '15px 20px 15px 20px',
    backgroundColor: 'white',
    borderRadius: 5,
  },
  heading: {
    fontWeight: 'bolder',
    fontSize: '0.9rem',
  },
  people: {
    margin: '15px 0px 5px 0px',
  },
  organisations: {
    marginTop: 10,
  },
  button: {
    marginTop: 10,
    color: 'white',
    textTransform: 'none',
    height: 30,
    borderRadius: 30,
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
