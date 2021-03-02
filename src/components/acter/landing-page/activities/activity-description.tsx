import React, { FC } from 'react'
import { Box, Typography } from '@material-ui/core'
import { makeStyles, Theme } from '@material-ui/core/styles'
import { InterestsSection } from 'src/components/interests/interests-section'

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    margin: '10px 0px 10px 10px',
    padding: 20,
    width: 500,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  heading: {
    fontWeight: 'bolder',
    fontSize: '0.9rem',
  },
  description: {
    height: 100,
    overflow: 'scroll',
    fontSize: '0.7rem',
    lineHeight: '0.05rem',
    color: theme.palette.secondary.main,
    marginBottom: 5,
  },
}))

export interface ActivityDescriptionProps {
  // TODO: fix the type below
  activity: any
}

export const ActivityDescription: FC<ActivityDescriptionProps> = ({
  activity,
}) => {
  const classes = useStyles()
  return (
    <Box className={classes.container}>
      <Typography className={classes.heading} variant="h6">
        About
      </Typography>
      <Box className={classes.description}>
        <Typography variant="caption">{activity.description}</Typography>
      </Box>
      {/* <InterestsSection interestTypes={activity.interests} /> */}
    </Box>
  )
}
