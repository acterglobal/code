import React, { FC } from 'react'

import { Box, makeStyles, createStyles, Theme } from '@material-ui/core'

import clsx from 'clsx'

import { Connect } from '@acter/components/acter/connect'
import { ImageSection } from '@acter/components/activity/tile/image-section'
import { InfoSection } from '@acter/components/activity/tile/info-section'
import { Size } from '@acter/lib/constants'
import { Activity } from '@acter/schema'

export interface ActivityTileProps {
  activity: Activity
  hovered?: boolean
}

export const ActivityTile: FC<ActivityTileProps> = ({
  activity,
  hovered = false,
}) => {
  const classes = useStyles()

  if (!activity) return null

  return (
    <Box
      className={clsx(
        classes.activityTile,
        hovered && classes.activityTileHovered
      )}
    >
      <ImageSection activity={activity} />

      <InfoSection activity={activity} />

      <Box className={classes.buttonContainer}>
        <Connect acterId={activity.Acter.id} size={Size.SMALL} />
      </Box>
    </Box>
  )
}

// TODO: refactor to common style
const hoverStyle = { boxShadow: '2px 2px 8px rgb(0, 0, 0, .1)' }

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
      '&:hover': hoverStyle,
    },
    activityTileHovered: hoverStyle,
    buttonContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: theme.spacing(1.7),
    },
  })
)
