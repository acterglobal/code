import React, { FC } from 'react'

import {
  Box,
  createStyles,
  makeStyles,
  Theme,
  Typography,
} from '@material-ui/core'

import { format } from 'date-fns'

import { ActivityTileProps } from '@acter/components/activity/tile'
import {
  DAY_DATE_MONTH_FORMAT_SHORT,
  DATE_MONTH_FORMAT_SHORT,
  TIME_FORMAT_SHORT,
} from '@acter/lib/constants'

type DateTimeInfoProps = ActivityTileProps

export const DateTimeInfo: FC<DateTimeInfoProps> = ({ activity }) => {
  const classes = useStyles()

  const displayDayFormat = activity.isAllDay
    ? DAY_DATE_MONTH_FORMAT_SHORT
    : DATE_MONTH_FORMAT_SHORT

  const startDay = format(activity.startAt, displayDayFormat)
  const endDay = format(activity.endAt, displayDayFormat)

  const startTime = format(activity.startAt, TIME_FORMAT_SHORT)
  const endTime = format(activity.endAt, TIME_FORMAT_SHORT)

  return (
    <Box className={classes.root}>
      <Box className={classes.startSection}>
        <Typography className={classes.day} variant="h5">
          {startDay}
        </Typography>

        {!activity.isAllDay && (
          <Typography variant="caption">{startTime}</Typography>
        )}
      </Box>

      {(startDay !== endDay || !activity.isAllDay) && '-'}

      <Box className={classes.endSection}>
        {startDay !== endDay && (
          <Typography className={classes.day} variant="h5">
            {endDay}
          </Typography>
        )}

        {!activity.isAllDay && (
          <Typography variant="caption">{endTime}</Typography>
        )}
      </Box>
    </Box>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      alignItems: 'center',
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(0.9),
      margin: 'auto',
      width: '90%',
      height: 12,
      color: theme.palette.secondary.main,
    },
    startSection: {
      display: 'flex',
      alignItems: 'center',
      marginRight: 3,
    },
    endSection: {
      display: 'flex',
      alignItems: 'center',
      marginLeft: 3,
    },
    day: {
      fontSize: theme.spacing(1.5),
      fontWeight: theme.typography.fontWeightBold,
      marginRight: 3,
      marginLeft: 3,
    },
  })
)
