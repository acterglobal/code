import React, { FC } from 'react'

import {
  Box,
  createStyles,
  Divider,
  makeStyles,
  Theme,
  Typography,
} from '@material-ui/core'

import { ActivityTileProps } from '@acter/components/activity/tile'
import { DateTimeInfo } from '@acter/components/activity/tile/date-time-info'

type InfoSectionProps = ActivityTileProps

export const InfoSection: FC<InfoSectionProps> = ({ activity }) => {
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      <Box className={classes.dateInfo}>
        <DateTimeInfo activity={activity} />
      </Box>
      <Divider className={classes.divider} />

      <Box className={classes.info}>
        <Typography className={classes.name} variant="h6">
          {activity.Acter?.name}
        </Typography>

        <Typography className={classes.location} noWrap variant="body2">
          {activity.isOnline ? 'Online' : activity.Acter?.location}
        </Typography>

        <Typography className={classes.organiser} noWrap variant="subtitle1">
          {activity.Organiser?.name}
        </Typography>
      </Box>
    </Box>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      color: theme.palette.secondary.main,
    },
    dateInfo: {
      marginLeft: 10,
    },
    info: {
      marginLeft: 13,
      maxWidth: '85%',
    },
    divider: {
      marginTop: 5,
      marginBottom: 5,
      backgroundColor: theme.palette.secondary.light,
    },
    activityName: {
      height: 20,
    },
    name: {
      fontSize: theme.spacing(1.5),
      fontWeight: theme.typography.fontWeightBold,
      lineHeight: 1.3,
      display: '-webkit-box',
      boxOrient: 'vertical',
      lineClamp: 2,
      wordBreak: 'keep-all',
      overflow: 'hidden',
      marginBottom: theme.spacing(0.5),
    },
    location: {
      fontSize: theme.spacing(1.3),
      color: theme.colors.grey.main,
      fontWeight: theme.typography.fontWeightBold,
    },
    organiser: {
      fontSize: theme.spacing(1.1),
      color: theme.colors.grey.main,
      fontWeight: theme.typography.fontWeightBold,
    },
  })
)
