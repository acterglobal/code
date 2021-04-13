import React, { FC, useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import moment from 'moment'
import {
  makeStyles,
  createStyles,
  withStyles,
  Theme,
} from '@material-ui/core/styles'
import { Box, Typography, Tooltip } from '@material-ui/core'
import { Activity } from '@schema'
import { getImageUrl } from 'src/lib/images/get-image-url'
import { DATE_FORMAT_SHORT, DATE_FORMAT_SHORT_NO_TIME } from 'src/constants'
import { grey } from '@material-ui/core/colors'

//  TODO: put these colors in theme or somewhere
export const activityTypeColors = {
  Event: 'rgb(0,171,142,0.2)',
  Project: 'rgb(30,176,1,0.2)',
  Idea: 'rgb(249,186,57,0.2)',
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: 'white',
      borderRadius: theme.spacing(2),
      overflow: 'hidden',
      width: 200,
      height: 200,
    },
    image: {
      height: 100,
      position: 'relative',
    },
    info: {
      padding: theme.spacing(0.8),
    },
    dateTime: {
      fontSize: '0.6rem',
      fontWeight: 'lighter',
    },
    name: {
      fontSize: 14,
      fontWeight: 'bold',
    },
    location: {
      fontSize: '0.6rem',
      fontWeight: 'lighter',
    },
    activityType: {
      textAlign: 'center',
      paddingTop: theme.spacing(0.8),
      paddingBottom: theme.spacing(0.8),
    },
  })
)

const StyledTooltip = withStyles((theme: Theme) => ({
  tooltip: {
    backgroundColor: theme.palette.common.white,
    color: grey[900],
    fontSize: 15,
    fontWeight: 'bold',
  },
}))(Tooltip)

export interface ActivityTileProps {
  activity: Activity
}

export const ActivityTile: FC<ActivityTileProps> = ({ activity }) => {
  const [isOverflowed, setIsOverflow] = useState(false)
  const textElementRef = useRef(null)
  useEffect(() => {
    setIsOverflow(
      textElementRef.current.scrollWidth > textElementRef.current.clientWidth
    )
  }, [])

  if (!activity.id) return null
  const classes = useStyles()

  const format = activity.isAllDay
    ? DATE_FORMAT_SHORT_NO_TIME
    : DATE_FORMAT_SHORT

  const startAt = moment(activity.startAt).format(format)
  const endAt = moment(activity.endAt).format(format)

  return (
    <Box className={classes.root}>
      <Box className={classes.image}>
        <Image
          src={getImageUrl(activity.Acter?.bannerUrl, 'banner')}
          alt={activity.Acter?.name}
          layout="fill"
        />
      </Box>

      <Box className={classes.info}>
        <Typography className={classes.dateTime} variant="subtitle1">
          {startAt === endAt ? startAt : `${startAt} - ${endAt}`}
        </Typography>

        <StyledTooltip
          title={activity.Acter?.name}
          disableHoverListener={!isOverflowed}
          aria-label="tooltip"
        >
          <Typography
            ref={textElementRef}
            className={classes.name}
            noWrap
            variant="h6"
          >
            {activity.Acter?.name}
          </Typography>
        </StyledTooltip>
        <Typography className={classes.location} variant="subtitle1">
          {activity.isOnline ? 'Online' : activity.Acter?.location}
        </Typography>
      </Box>
      <Box
        className={classes.activityType}
        style={{ backgroundColor: activityTypeColors['Idea'] }}
      >
        <Typography variant="caption">Event</Typography>
      </Box>
    </Box>
  )
}
