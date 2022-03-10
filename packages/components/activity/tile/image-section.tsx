import React, { FC } from 'react'

import { Box } from '@mui/material';

import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';

import { ActivityTileProps } from '@acter/components/activity/tile'
import { ActivityAvatar } from '@acter/components/activity/tile/avatar'
import { Image } from '@acter/components/util/image'
import { getImageUrl } from '@acter/lib/images/get-image-url'

type ImageSectionProps = ActivityTileProps

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
