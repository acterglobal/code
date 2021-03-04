import React, { FC } from 'react'
import { Box, Typography, Button } from '@material-ui/core'
import { makeStyles, Theme } from '@material-ui/core/styles'
import { AvatarList } from 'src/components/acter/landing-page/info-section/avatar-list'
import { Organisations } from 'src/components/acter/landing-page/info-section/organisations'

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
  // TODO: fix the below types
  users?: []
  organisations?: []
}

export const Participates: FC<ParticipatesProps> = (props) => {
  const classes = useStyles()
  const { users, organisations } = props

  return (
    <Box className={classes.container}>
      <Typography className={classes.heading} variant="h6">
        Participates
      </Typography>
      <Box className={classes.people}>
        <AvatarList numOfPeople={12} imageURL={[]} />
      </Box>
      <Box className={classes.organisations}>
        <Organisations imageURL={[]} />
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
