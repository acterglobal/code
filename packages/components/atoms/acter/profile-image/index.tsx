import React, { FC } from 'react'

import { Box } from '@material-ui/core'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'

import { Image } from '@acter/components/util/image'
import { getImageUrl } from '@acter/lib/images/get-image-url'
import { Acter } from '@acter/schema'

export interface ActerProfileImageProps {
  acter: Acter
  height?: number
  background?: string
}

export const ActerProfileImage: FC<ActerProfileImageProps> = ({
  acter,
  height = 96,
  background,
}) => {
  const classes = useStyles({ height, background })

  return (
    <Box className={classes.image}>
      <Image
        src={getImageUrl(acter.avatarUrl, 'avatar')}
        alt={acter.name}
        height={96}
        width={96}
        imgixParams={{
          fit: 'facearea',
        }}
      />
    </Box>
  )
}

type StylesTypes = Pick<ActerProfileImageProps, 'height' | 'background'>

const useStyles = makeStyles<Theme, StylesTypes>((theme: Theme) =>
  createStyles({
    image: {
      display: 'flex',
      flexShrink: 0,
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(3),
      border: ({ height }) => `${height <= 30 ? 1 : 2}px solid black`,
      borderRadius: '50%',
      overflow: 'hidden',
      background: ({ background }) => (background ? background : 'transparent'),
    },
  })
)
