import React, { FC } from 'react'

import { useRouter } from 'next/router'

import { Box, makeStyles, createStyles, Theme } from '@material-ui/core'

import { ActivityType } from '@acter/components/activity/tile/activity-type'
import { ImageSection } from '@acter/components/activity/tile/image-section'
import { InfoSection } from '@acter/components/activity/tile/info-section'
import { acterAsUrl } from '@acter/lib/acter/acter-as-url'
import { Activity } from '@acter/schema'

export interface ActivityTileProps {
  activity: Activity
}

export const ActivityTile: FC<ActivityTileProps> = ({ activity }) => {
  if (!activity) return null

  const classes = useStyles()
  const router = useRouter()

  const handleOnActivityClick = () => {
    router.push(acterAsUrl({ acter: activity?.Acter }))
  }

  return (
    <>
      <Box className={classes.root} onClick={handleOnActivityClick}>
        <ImageSection activity={activity} />

        <InfoSection activity={activity} />

        <ActivityType activity={activity} />
      </Box>
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
