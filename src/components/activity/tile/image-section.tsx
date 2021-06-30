import React, { FC } from 'react'
import { ActivityTileProps } from 'src/components/activity/tile'
import { Box, createStyles, makeStyles } from '@material-ui/core'
import Image from 'next/image'
import { getImageUrl } from 'src/lib/images/get-image-url'

type ImageSectionProps = ActivityTileProps

export const ImageSection: FC<ImageSectionProps> = ({ activity }) => {
  const classes = useStyles()

  return (
    <Box className={classes.image}>
      <Image
        src={getImageUrl(activity.Acter?.bannerUrl, 'banner')}
        alt={activity.Acter?.name}
        layout="fill"
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
