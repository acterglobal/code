import React, { FC } from 'react'

import { Box, Theme, Typography } from '@mui/material';

import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';

import { ActivityTileProps } from '@acter/components/activity/tile'
import { DateTimeInfo } from '@acter/components/activity/tile/date-time-info'
import { Size } from '@acter/lib/constants'

import { Organiser } from '../organiser'

type InfoSectionProps = ActivityTileProps

export const InfoSection: FC<InfoSectionProps> = ({ activity }) => {
  const classes = useStyles()

  return (
    <Box className={classes.infoSection}>
      <Box className={classes.dateInfo}>
        <DateTimeInfo activity={activity} />
      </Box>

      <Box className={classes.info}>
        <Typography className={classes.name} variant="h5">
          {activity.Acter?.name}
        </Typography>

        <Typography className={classes.location} variant="body2">
          {activity.isOnline ? 'Online' : activity.Acter?.location}
        </Typography>

        <Organiser acter={activity?.Organiser} size={Size.SMALL} />
      </Box>
    </Box>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    infoSection: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      color: theme.palette.secondary.main,
      width: 250,
    },
    dateInfo: {
      marginLeft: 10,
      marginBottom: 5,
    },
    info: {
      marginLeft: 13,
      maxWidth: '85%',
    },
    name: {
      fontSize: '0.9rem',
      fontWeight: theme.typography.fontWeightBold,
      color: theme.palette.secondary.main,
      lineHeight: 1.3,
      display: '-webkit-box',
      boxOrient: 'vertical',
      lineClamp: 1,
      wordBreak: 'keep-all',
      overflow: 'hidden',
      marginBottom: theme.spacing(0.5),
    },
    location: {
      fontSize: '0.8rem',
      color: theme.colors.blue.light,
      display: '-webkit-box',
      boxOrient: 'vertical',
      lineClamp: 1,
      wordBreak: 'keep-all',
      overflow: 'hidden',
    },
  })
)
