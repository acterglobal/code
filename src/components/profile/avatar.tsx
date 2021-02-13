import React, { FC } from 'react'
import { Box } from '@material-ui/core'
import { makeStyles, Theme } from '@material-ui/core/styles'
import Image from 'next/image'

const useStyles = makeStyles((theme: Theme) => ({
  avatarImage: {
    position: 'absolute',
    border: '2',
    borderColor: theme.palette.primary.main,
    cursor: 'pointer',
    backgroundColor: 'white',
    marginLeft: '40px',
    top: '15vw',
  },
}))

export interface AvatarProps {
  imageUrl: string
}

const Avatar: FC<AvatarProps> = ({ imageUrl }) => {
  const classes = useStyles()
  return (
    <Box border={2} borderRadius={16} className={classes.avatarImage}>
      <Image
        loader={() => imageUrl}
        src={'/acter-logo-144.png'}
        alt="Acter Logo"
        layout="intrinsic"
        height={130}
        width={130}
      />
    </Box>
  )
}

export default Avatar
