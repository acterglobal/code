import React, { FC } from 'react'

import {
  Box,
  createStyles,
  makeStyles,
  Theme,
  Typography,
} from '@material-ui/core'

import { ActivityTileProps } from '@acter/components/activity/tile'
import {
  DAY_DATE_MONTH_FORMAT_SHORT,
  DATE_MONTH_FORMAT_SHORT,
  TIME_FORMAT_SHORT,
} from '@acter/lib/constants'
import { parseAndFormat } from '@acter/lib/datetime/parse-and-format'

type DateTimeInfoProps = ActivityTileProps

export const DateTimeInfo: FC<DateTimeInfoProps> = ({ activity }) => {
  const classes = useStyles()

  const displayDayFormat = activity.isAllDay
    ? DAY_DATE_MONTH_FORMAT_SHORT
    : DATE_MONTH_FORMAT_SHORT

  const startDay = parseAndFormat(activity.startAt, displayDayFormat)
  const endDay = parseAndFormat(activity.endAt, displayDayFormat)
  const startTime = parseAndFormat(activity.startAt, TIME_FORMAT_SHORT)
  const endTime = parseAndFormat(activity.endAt, TIME_FORMAT_SHORT)

  return (
    <Box className={classes.root}>
      <Box className={classes.startSection}>
        <Typography className={classes.day}>{startDay}</Typography>

        {!activity.isAllDay && (
          <Typography className={classes.time}>{startTime}</Typography>
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
          <Typography className={classes.time}>{endTime}</Typography>
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
    time: {
      fontSize: theme.spacing(1.5),
    },
  })
)
