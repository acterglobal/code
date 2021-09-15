import React, { FC, useMemo } from 'react'

import { Box, Hidden, Typography } from '@material-ui/core'
import { green } from '@material-ui/core/colors'
import { makeStyles, Theme } from '@material-ui/core/styles'
import {
  Computer,
  LocationOnOutlined,
  Event as CalenderIcon,
} from '@material-ui/icons'

import { Connect } from '@acter/components/acter/connect'
import { About } from '@acter/components/activity/about'
import { LoadingSpinner } from '@acter/components/util/loading-spinner'
import { useActer } from '@acter/lib/acter/use-acter'
import { DATE_FORMAT, DATE_FORMAT_NO_TIME } from '@acter/lib/constants'
import { parseAndFormat } from '@acter/lib/datetime/parse-and-format'
import { capitalize } from '@acter/lib/string/capitalize'

export const ActivityInfo: FC = () => {
  const { acter, loading: acterLoading } = useActer()
  const activityTypeName = useMemo(() => acter?.Activity?.ActivityType?.name, [
    acter,
  ])
  const classes = useStyles({ activityTypeName })
  if (acterLoading) return <LoadingSpinner />
  if (!acter) return null

  const displayFormat = acter.Activity.isAllDay
    ? DATE_FORMAT_NO_TIME
    : DATE_FORMAT

  const startAt = parseAndFormat(acter.Activity.startAt, displayFormat)

  const endAt = parseAndFormat(acter.Activity.endAt, displayFormat)

  const getUrl = (url) => {
    if (!url) {
      return ''
    }

    if (url.match(/^https?:\/\//)) {
      return url
    }

    return `http://${url}`
  }

  return (
    <Box className={classes.activityInfo}>
      <Box className={classes.dateContainer}>
        <CalenderIcon className={classes.calenderIcon} />
        <Typography className={classes.date} variant="subtitle1">
          {startAt === endAt ? startAt : `${startAt} - ${endAt}`}
        </Typography>
      </Box>
      <Box className={classes.titleAndJoinContainer}>
        <Box className={classes.titleContainer}>
          <Typography className={classes.title} variant="h3">
            {capitalize(acter.name)}
          </Typography>
          <Box className={classes.activityType}>
            {acter.Activity.ActivityType.name &&
              capitalize(acter.Activity.ActivityType.name)}
          </Box>
        </Box>
        <Connect />
      </Box>
      <Box className={classes.locationContainer}>
        {acter.Activity.isOnline && acter.url && (
          <>
            <Computer className={classes.computerIcon} />
            <a
              href={getUrl(acter.url)}
              className={classes.onlineLink}
              target="_blank"
            >
              <Typography className={classes.location} variant="body2">
                {acter.url}
              </Typography>
            </a>
          </>
        )}
        {!acter.Activity.isOnline && acter.location && (
          <>
            <LocationOnOutlined className={classes.locationIcon} />
            <Typography className={classes.location} variant="body2">
              {capitalize(acter.location)}
            </Typography>
          </>
        )}
      </Box>
      <Hidden smUp>
        <About acter={acter} />
      </Hidden>
    </Box>
  )
}

const useStyles = makeStyles((theme: Theme) => ({
  activityInfo: {
    padding: '20px 20px 20px 30px',
    [theme.breakpoints.down('xs')]: {
      padding: '15px 5px 5px 10px',
    },
    backgroundColor: 'white',
  },
  dateContainer: {
    display: 'flex',
    alignItems: 'center',
    color: theme.palette.primary.main,
  },
  calenderIcon: {
    fontSize: '1.3rem',
    marginRight: 5,
    [theme.breakpoints.down('xs')]: {
      marginRight: 3,
    },
  },
  date: {
    fontWeight: theme.typography.fontWeightBold,
    [theme.breakpoints.down('xs')]: {
      fontSize: '0.7rem',
    },
  },
  titleContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  title: {
    fontWeight: theme.typography.fontWeightBold,
    fontSize: '1.4rem',
    margin: '3px 3px 3px 0px',
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.2rem',
    },
  },
  activityType: {
    height: theme.spacing(3.5),
    width: theme.spacing(17),
    marginLeft: theme.spacing(1),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: theme.typography.fontWeightLight,
    borderRadius: 5,
    backgroundColor: ({ activityTypeName }: { activityTypeName: string }) =>
      theme.colors.activityTypes[activityTypeName],
  },
  computerIcon: {
    fontSize: '1.3rem',
    marginRight: 5,
    color: green[500],
  },
  locationIcon: {
    fontSize: '1.3rem',
    marginRight: 5,
  },
  locationContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  location: {
    fontSize: '0.9rem',
    fontWeight: theme.typography.fontWeightLight,
    [theme.breakpoints.down('xs')]: {
      fontSize: '0.8rem',
    },
  },
  onlineLink: {
    fontSize: '0.9rem',
    fontWeight: theme.typography.fontWeightLight,
    color: theme.palette.primary.main,
    textDecoration: 'none',
    '&:hover': {
      cursor: 'pointer',
    },
  },
  titleAndJoinContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
}))
