import React, { FC } from 'react'
import { Box, Typography, Button } from '@material-ui/core'
import { makeStyles, Theme } from '@material-ui/core/styles'
import { People } from 'src/components/acter/landing-page/info-section/people'
import { Organizations } from 'src/components/acter/landing-page/info-section/organizations'

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
  // users: []
}

export const Participates: FC<ParticipatesProps> = () => {
  const classes = useStyles()
  return (
    <Box className={classes.container}>
      <Typography className={classes.heading} variant="h6">
        Participates
      </Typography>
      <Box className={classes.people}>
        <People numOfPeople={12} imageURL={[]} />
      </Box>
      <Box className={classes.organisations}>
        <Organizations imageURL={[]} />
      </Box>
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
