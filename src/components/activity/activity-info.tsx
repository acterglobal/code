import React, { FC } from 'react'
import moment from 'moment'
import {
  Computer,
  LocationOnOutlined,
  Event as CalanderIcon,
} from '@material-ui/icons'
import { Box, Typography } from '@material-ui/core'
import { makeStyles, Theme } from '@material-ui/core/styles'
import { green, grey } from '@material-ui/core/colors'

import { Acter } from '@generated/type-graphql'

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

const momentFormat = 'llll'

export interface ActivityInfoProps {
  acter: Acter
}

export const ActivityInfo: FC<ActivityInfoProps> = ({ acter }) => {
  const classes = useStyles()
  const startAt = moment(acter.Activity.startAt)
  const endAt = moment(acter.Activity.endAt)
  return (
    <Box className={classes.activityInfo}>
      <Box className={classes.dateContainer}>
        <CalanderIcon style={{ fontSize: '1.3rem', marginRight: 5 }} />
        <Typography className={classes.date} variant="subtitle1">
          {`${startAt.format(momentFormat)} - ${endAt.format(momentFormat)}`}
        </Typography>
      </Box>
      <Typography className={classes.title} variant="h3">
        {acter.name}
      </Typography>
      <Box className={classes.locationContainer}>
        {acter.Activity.isOnline ? (
          <>
            <Computer style={{ fontSize: '1.3rem', marginRight: 5 }} />
            <Typography className={classes.location} variant="body2">
              {acter.url}
            </Typography>
          </>
        ) : (
          <>
            <LocationOnOutlined
              style={{ fontSize: '1.3rem', marginRight: 5 }}
            />
            <Typography className={classes.location} variant="body2">
              {acter.location}
            </Typography>
          </>
        )}
      </Box>
    </Box>
  )
}
