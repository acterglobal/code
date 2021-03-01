import React, { FC } from 'react'
import { Box, Typography, Avatar } from '@material-ui/core'
import { makeStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    marginTop: 10,
    // padding: 20,
    padding: '15px 20px 15px 20px',
    backgroundColor: 'white',
    borderRadius: 5,
  },
  heading: {
    fontWeight: 'bolder',
    fontSize: '0.9rem',
  },
  organiserContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  organiser: {
    width: theme.spacing(4),
    height: theme.spacing(4),
  },
  name: {
    color: theme.palette.secondary.main,
    fontSize: '0.7rem',
    fontWeight: 'bold',
    marginLeft: 10,
  },
}))

export const Organiser = () => {
  const classes = useStyles()
  return (
    <Box className={classes.container}>
      <Typography className={classes.heading} variant="h6">
        Organiser
      </Typography>
      <Box className={classes.organiserContainer}>
        <Avatar
          className={classes.organiser}
          alt="Remy Sharp"
          src="https://res.cloudinary.com/dfglnmgmx/image/upload/v1612887008/IMG_1971_qnods9.jpg"
        />
        <Typography className={classes.name} variant="body1">
          The Green organisation
        </Typography>
      </Box>
    </Box>
  )
}
