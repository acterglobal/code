import React, { FC } from 'react'

import { Box, Hidden } from '@material-ui/core'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'

import { Image } from '@acter/components/util/image'
import { getImageUrl } from '@acter/lib/images/get-image-url'
import { Acter } from '@acter/schema'

export interface ActerTileImageProps {
  acter: Acter
}

export const ActerImage: FC<ActerTileImageProps> = ({ acter }) => {
  const classes = useStyles()

  return (
    <Hidden smDown>
      <Box className={classes.image}>
        <Image src={getImageUrl(acter.avatarUrl, 'avatar')} alt={acter.name} />
      </Box>
    </Hidden>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    image: {
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(3),
      border: '2px solid black',
      width: 100,
      height: 100,
      borderRadius: '50%',
      overflow: 'hidden',
    },
  })
)
