import React, { FC } from 'react'
import { LocationOnOutlined, Event as CalanderIcon } from '@material-ui/icons'
import { Box, Typography } from '@material-ui/core'
import { makeStyles, Theme } from '@material-ui/core/styles'
import { green, grey } from '@material-ui/core/colors'

const useStyles = makeStyles((theme: Theme) => ({
  activityInfo: {
    padding: '20px 20px 20px 30px',
    // height: 120,
    backgroundColor: 'white',
  },
  dateContainer: {
    display: 'flex',
    color: green[500],
  },
  date: {
    fontWeight: 'bolder',
    fontSize: '0.8rem',
  },
  title: {
    fontSize: '1.4rem',
    fontWeight: 'bold',
    margin: '3px 0px 3px 0px',
  },
  locationContainer: {
    display: 'flex',
    alignItems: 'center',
    color: grey[800],
  },
  location: {
    fontSize: '0.9rem',
    fontWeight: 'lighter',
  },
}))

// TODO: add correct activity type when you have activity modal ready in prisma
export interface ActivityInfoProps {
  activity: any
}

export const ActivityInfo: FC<ActivityInfoProps> = ({ activity }) => {
  const classes = useStyles()
  return (
    <Box className={classes.activityInfo}>
      <Box className={classes.dateContainer}>
        <CalanderIcon style={{ fontSize: '1.3rem', marginRight: 5 }} />
        <Typography className={classes.date} variant="subtitle1">
          {`${activity.startDate} - ${activity.endDate}`}
        </Typography>
      </Box>
      <Typography className={classes.title} variant="h3">
        {activity.title}
      </Typography>
      <Box className={classes.locationContainer}>
        <LocationOnOutlined style={{ fontSize: '1.3rem', marginRight: 5 }} />
        <Typography className={classes.location} variant="body2">
          {activity.location}
        </Typography>
      </Box>
    </Box>
  )
}
