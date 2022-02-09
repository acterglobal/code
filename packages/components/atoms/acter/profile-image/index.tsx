import React, { FC } from 'react'

import { Box } from '@material-ui/core'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'

import { Image } from '@acter/components/util/image'
import { getImageUrl } from '@acter/lib/images/get-image-url'
import { Acter } from '@acter/schema'

export interface ActerProfileImageProps {
  acter: Acter
}

export const ActerProfileImage: FC<ActerProfileImageProps> = ({ acter }) => {
  const classes = useStyles()

  return (
    <Box className={classes.image}>
      <Image
        src={getImageUrl(acter.avatarUrl, 'avatar')}
        alt={acter.name}
        height={96}
      />
    </Box>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    image: {
      display: 'flex',
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(3),
      border: '2px solid black',
      borderRadius: '50%',
      overflow: 'hidden',
    },
  })
)
