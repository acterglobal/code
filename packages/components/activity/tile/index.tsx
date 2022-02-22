import React, { FC } from 'react'

import { Box, makeStyles, createStyles, Theme } from '@material-ui/core'

import { ActivityType } from '@acter/components/activity/tile/activity-type'
import { ImageSection } from '@acter/components/activity/tile/image-section'
import { InfoSection } from '@acter/components/activity/tile/info-section'
import { Link } from '@acter/components/util/anchor-link'
import { acterAsUrl } from '@acter/lib/acter/acter-as-url'
import { Activity } from '@acter/schema'

export interface ActivityTileProps {
  activity: Activity
}

export const ActivityTile: FC<ActivityTileProps> = ({ activity }) => {
  const classes = useStyles()

  const redirectUrl = acterAsUrl({ acter: activity?.Acter })

  return (
    <Link href={redirectUrl}>
      <Box className={classes.ActivityTile}>
        <ImageSection activity={activity} />

        <InfoSection activity={activity} />

        <ActivityType activity={activity} />
      </Box>
    </Link>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    ActivityTile: {
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
