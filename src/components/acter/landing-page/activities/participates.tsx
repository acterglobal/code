import React, { FC } from 'react'
import { Box, Typography, Button } from '@material-ui/core'
import { makeStyles, Theme } from '@material-ui/core/styles'
import { FollowersAvatars } from 'src/components/acter/followers-avatars'

import { Acter } from '@generated/type-graphql'

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

export interface ParticipatesProps {
  acter: Acter
}

export const Participates: FC<ParticipatesProps> = ({ acter }) => {
  const classes = useStyles()

  return (
    <Box className={classes.container}>
      <Typography className={classes.heading} variant="h6">
        Participates
      </Typography>
      <FollowersAvatars acter={acter} />
      <Button
        className={classes.button}
        variant="contained"
        color="primary"
        fullWidth
      >
        Join
      </Button>
    </Box>
  )
}
