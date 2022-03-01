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
import { Size } from '@acter/lib/constants'

import { Organiser } from '../organiser'

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
        <Typography className={classes.name} variant="h5">
          {activity.Acter?.name}
        </Typography>

        <Typography className={classes.location} noWrap variant="body2">
          {activity.isOnline ? 'Online' : activity.Acter?.location}
        </Typography>

        <Organiser acter={activity?.Organiser} size={Size.SMALL} />
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
      fontSize: '0.9rem',
      fontWeight: theme.typography.fontWeightBold,
      color: theme.palette.secondary.main,
      lineHeight: 1.3,
      display: '-webkit-box',
      boxOrient: 'vertical',
      lineClamp: 2,
      wordBreak: 'keep-all',
      overflow: 'hidden',
      marginBottom: theme.spacing(0.5),
    },
    location: {
      fontSize: '0.8rem',
      color: theme.colors.blue.light,
    },
    organiser: {
      fontSize: theme.spacing(1.1),
      color: theme.colors.grey.main,
      fontWeight: theme.typography.fontWeightBold,
    },
  })
)
