import React, { FC } from 'react'

import { Box, createStyles, makeStyles } from '@material-ui/core'

import { ActivityTileProps } from '@acter/components/activity/tile'
import { Image } from '@acter/components/util/image'
import { getImageUrl } from '@acter/lib/images/get-image-url'

type ImageSectionProps = ActivityTileProps

export const ImageSection: FC<ImageSectionProps> = ({ activity }) => {
  const classes = useStyles()

  return (
    <Box className={classes.image}>
      <Image
        src={getImageUrl(activity.Acter?.bannerUrl, 'banner')}
        alt={activity.Acter?.name}
        height={85}
      />
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
