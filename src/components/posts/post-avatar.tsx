import React, { FC } from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import { Box } from '@material-ui/core'
import { Avatar } from 'src/components/acter/avatar'
import Image from 'next/image'
import { Acter } from '@schema'
import { getImageUrl } from 'src/lib/images/get-image-url'

export interface PostAvatarProps {
  acter: Acter
}

export const PostAvatar: FC<PostAvatarProps> = ({ acter }) => {
  const classes = useStyles()

  return (
    <Box className={classes.image}>
      <Image
        src={getImageUrl(acter.avatarUrl, 'avatar')}
        alt={acter.name}
        layout="responsive"
        width="50"
        height="50"
      />
    </Box>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    image: {
      marginRight: theme.spacing(1.2),
      objectFit: 'cover',
      border: '1px solid black',
      width: 30,
      height: 30,
      padding: theme.spacing(0.8),
      borderRadius: '50%',
      [theme.breakpoints.down('xs')]: {
        display: 'none',
      },
    },
  })
)
