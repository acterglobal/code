import React, { FC } from 'react'
import Imgix, { ImgixProviderProps, Background as Banner } from 'react-imgix'

import { createStyles, makeStyles, Theme } from '@material-ui/core'

import { getFileExtension as getImageExtension } from '@acter/lib/files/get-file-extension'

export interface ImageProps extends ImgixProviderProps {
  alt: string
  banner?: boolean
}

// TODO: monitor https://github.com/imgix/react-imgix/issues/356 for the addition of types to library so we can remove @types/react-imgix
export const Image: FC<ImageProps> = (props) => {
  const classes = useStyles()
  const { alt, src, banner, ...restProps } = props

  if (banner)
    return <Banner src={src} className={classes.backgroundImage}></Banner>

  return (
    <Imgix
      {...restProps}
      src={src}
      imgixParams={{
        fm: getImageExtension(src),
      }}
      htmlAttributes={{
        alt,
      }}
    />
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    backgroundImage: {
      height: 300,
      width: '100%',
      backgroundColor: theme.palette.background.paper,
      marginBottom: theme.spacing(1),
    },
  })
)
