import React, { FC } from 'react'
import Imgix from 'react-imgix'

import { getImageExtension } from '@acter/lib/images/get-image-extension'

interface ImageProps {
  src: string
  alt: string
  height?: number | string
  width?: number | string
}
export const Image: FC<ImageProps> = ({
  src,
  alt,
  height = '100%',
  width = '100%',
}) => {
  return (
    <Imgix
      src={src}
      alt={alt}
      width={width}
      height={height}
      imgixParams={{
        fm: getImageExtension(src),
      }}
    />
  )
}
