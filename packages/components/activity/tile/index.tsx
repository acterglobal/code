import React, { FC } from 'react'

import { Box, Theme } from '@mui/material';

import makeStyles from '@mui/styles/makeStyles';
import createStyles from '@mui/styles/createStyles';

import { Connect } from '@acter/components/acter/connect'
import { ImageSection } from '@acter/components/activity/tile/image-section'
import { InfoSection } from '@acter/components/activity/tile/info-section'
import { Size } from '@acter/lib/constants'
import { Activity } from '@acter/schema'

export interface ActivityTileProps {
  activity: Activity
}

export const ActivityTile: FC<ActivityTileProps> = ({ activity }) => {
  const classes = useStyles()

  if (!activity) return null

  return (
    <Box className={classes.activityTile}>
      <ImageSection activity={activity} />

      <InfoSection activity={activity} />

      <Box className={classes.buttonContainer}>
        <Connect acterId={activity.Acter.id} size={Size.SMALL} />
      </Box>
    </Box>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    activityTile: {
      backgroundColor: 'white',
      borderRadius: theme.spacing(2),
      overflow: 'hidden',
      width: 210,
      height: 230,
      position: 'relative',
      cursor: 'pointer',
    },
    buttonContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 4,
    },
  })
)
