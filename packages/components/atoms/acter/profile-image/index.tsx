import React, { FC } from 'react'

import { Box } from '@material-ui/core'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'

import { ActivityTypeIcon } from '@acter/components/icons/activity-type-icons'
import { Image, ImageProps } from '@acter/components/util/image'
import { ActerTypes } from '@acter/lib/constants'
import { getImageUrl } from '@acter/lib/images/get-image-url'
import { Acter } from '@acter/schema'

export interface ActerProfileImageProps extends ImageProps {
  acter: Acter
  size?: number
  background?: string
  borderSize?: number
}

export const ActerProfileImage: FC<ActerProfileImageProps> = ({
  acter,
  size = 96,
  background,
  borderSize = 2,
  ...restProps
}) => {
  const classes = useStyles({ background, borderSize, size })

  if (acter.ActerType?.name == ActerTypes.ACTIVITY && acter.Activity) {
    return (
      <Box className={classes.acterProfileImage}>
        <ActivityTypeIcon activity={acter.Activity} />
      </Box>
    )
  }

  return (
    <Box className={classes.acterProfileImage}>
      <Image
        {...restProps}
        src={getImageUrl(acter.avatarUrl, 'avatar')}
        alt={acter.name}
        height={size}
        width={size}
        imgixParams={{
          fit: 'facearea',
        }}
      />
    </Box>
  )
}

type StylesTypes = Pick<
  ActerProfileImageProps,
  'background' | 'borderSize' | 'size'
>

const useStyles = makeStyles<Theme, StylesTypes>((theme: Theme) =>
  createStyles({
    acterProfileImage: {
      flex: 'none',
      display: 'flex',
      flexShrink: 0,
      alignItems: 'center',
      alignContent: 'center',
      justifyContent: 'center',
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(3),
      [theme.breakpoints.down('md')]: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(2),
      },
      border: ({ borderSize }) =>
        `${borderSize ? borderSize : 2}px solid black`,
      borderRadius: '50%',
      overflow: 'hidden',
      background: ({ background }) => (background ? background : 'transparent'),
      width: ({ size }) => size,
      height: ({ size }) => size,
    },
  })
)
