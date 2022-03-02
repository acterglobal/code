import React, { FC } from 'react'

import { Box, makeStyles, createStyles, Theme } from '@material-ui/core'

import { Connect } from '@acter/components/acter/connect'
import { ActivityType } from '@acter/components/activity/tile/activity-type'
import { ImageSection } from '@acter/components/activity/tile/image-section'
import { InfoSection } from '@acter/components/activity/tile/info-section'
import { acterAsUrl } from '@acter/lib/acter/acter-as-url'
import { Size } from '@acter/lib/constants'
import { Activity } from '@acter/schema'

export interface ActivityTileProps {
  activity: Activity
}

export const ActivityTile: FC<ActivityTileProps> = ({ activity }) => {
  const classes = useStyles()

  return (
    <Box className={classes.activityTile}>
      <ImageSection activity={activity} />

      <InfoSection activity={activity} />

      <ActivityType activity={activity} />

      <Box className={classes.buttonContainer}>
        <Connect acterId={activity?.Acter.id} size={Size.SMALL} />
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
      height: 256,
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
