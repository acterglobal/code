import React, { FC, useState } from 'react'

import { Box, makeStyles, createStyles, Theme } from '@material-ui/core'

import { ActivityLanding } from './activity-landing'

import { ActivityType } from '@acter/components/activity/tile/activity-type'
import { ImageSection } from '@acter/components/activity/tile/image-section'
import { InfoSection } from '@acter/components/activity/tile/info-section'
import { Activity } from '@acter/schema'

export interface ActivityTileProps {
  activity: Activity
}

export const ActivityTile: FC<ActivityTileProps> = ({ activity }) => {
  if (!activity) return null

  const classes = useStyles()
  const [showActivity, setShowActivity] = useState<boolean>(false)
  const handleClick = () => setShowActivity(true)
  const handleClose = () => setShowActivity(false)

  return (
    <>
      <Box className={classes.root} onClick={handleClick}>
        <ImageSection activity={activity} />

        <InfoSection activity={activity} />

        <ActivityType activity={activity} />
      </Box>

      {showActivity && (
        <ActivityLanding
          activitySlug={activity.Acter.slug}
          openDrawer={showActivity}
          handleCloseDrawer={handleClose}
        />
      )}
    </>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: 'white',
      borderRadius: theme.spacing(2),
      overflow: 'hidden',
      width: 210,
      height: 218,
      position: 'relative',
      cursor: 'pointer',
    },
  })
)
