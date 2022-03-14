import React, { FC } from 'react'

import { Box, Button, Typography } from '@mui/material'
import { Theme } from '@mui/material/styles'
import makeStyles from '@mui/styles/makeStyles'

import { FollowersAvatars } from '@acter/components/acter/followers-avatars'
import { blueGrey } from '@acter/components/themes/colors'
import { Acter } from '@acter/schema'

export type ParticipantsProps = {
  acter: Acter
  handleOnClick: () => void
}

export const Participants: FC<ParticipantsProps> = ({
  acter,
  handleOnClick,
}) => {
  const classes = useStyles()

  return (
    <Box className={classes.participants}>
      <Box className={classes.headingContainer}>
        <Typography className={classes.heading} variant="h6">
          Participants
        </Typography>
        <Button className={classes.button} onClick={handleOnClick}>
          See All Participants
        </Button>
      </Box>

      <FollowersAvatars acter={acter} />
    </Box>
  )
}

const useStyles = makeStyles((theme: Theme) => ({
  participants: {
    backgroundColor: 'white',
    padding: theme.spacing(2),
    borderRadius: theme.spacing(1),
  },
  headingContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: theme.spacing(1),
  },
  heading: {
    fontWeight: 'bolder',
    fontSize: '0.9rem',
  },
  button: {
    padding: 0,
    marginLeft: theme.spacing(0.5),
    textTransform: 'none',
    textDecoration: 'underline',
    fontSize: 12,
    color: blueGrey.A200,
    '&:hover': {
      color: blueGrey.A700,
      textDecoration: 'underline',
      backgroundColor: theme.palette.background.paper,
    },
  },
}))
