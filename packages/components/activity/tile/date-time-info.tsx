import React, { FC } from 'react'

import { useRouter } from 'next/router'

import {
  Box,
  createStyles,
  makeStyles,
  Theme,
  Typography,
} from '@material-ui/core'

import {
  DAY_DATE_MONTH_FORMAT_SHORT,
  DATE_MONTH_FORMAT_SHORT,
  TIME_FORMAT_SHORT,
} from '@acter/lib/constants'
import { parseAndFormat } from '@acter/lib/datetime/parse-and-format'
import { Activity } from '@acter/schema'

type DateTimeInfoProps = {
  activity: Activity
}

export const DateTimeInfo: FC<DateTimeInfoProps> = ({ activity }) => {
  const classes = useStyles()
  const { locale } = useRouter()
  const displayDayFormat = activity.isAllDay
    ? DAY_DATE_MONTH_FORMAT_SHORT
    : DATE_MONTH_FORMAT_SHORT

  const startDay = parseAndFormat({
    dateString: activity.startAt,
    formatString: displayDayFormat,
    currentLocale: locale,
  })
  const endDay = parseAndFormat({
    dateString: activity.endAt,
    formatString: displayDayFormat,
    currentLocale: locale,
  })
  const startTime = parseAndFormat({
    dateString: activity.startAt,
    formatString: TIME_FORMAT_SHORT,
    currentLocale: locale,
  })
  const endTime = parseAndFormat({
    dateString: activity.endAt,
    formatString: TIME_FORMAT_SHORT,
    currentLocale: locale,
  })

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
          <Typography className={classes.day} variant="subtitle1">
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
      color: theme.colors.blue.light,
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
      marginRight: 3,
      marginLeft: 3,
    },
    time: {
      fontSize: theme.spacing(1.5),
    },
  })
)
