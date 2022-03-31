import React, { FC } from 'react'

import { Box, createStyles, makeStyles } from '@material-ui/core'

import { ActivityAvatar } from '@acter/components/activity/tile/avatar'
import { Image } from '@acter/components/util/image'
import { getImageUrl } from '@acter/lib/images/get-image-url'
import { Activity } from '@acter/schema'

type ImageSectionProps = {
  activity: Activity
}

export const ImageSection: FC<ImageSectionProps> = ({ activity }) => {
  const classes = useStyles()

  if (!activity) return null

  return (
    <Box>
      <Box className={classes.image}>
        <Image
          src={getImageUrl(activity.Acter.bannerUrl, 'banner')}
          alt={activity.Acter.name}
          height={85}
        />
        <ActivityAvatar activity={activity} />
      </Box>
    </Box>
  )
}

const useStyles = makeStyles(
  createStyles({
    image: {
      height: 85,
      position: 'relative',
    },
  })
)
