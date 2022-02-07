import React, { FC } from 'react'
import Imgix, { ImgixProviderProps } from 'react-imgix'

import { getImageExtension } from '@acter/lib/images/get-image-extension'

interface ImageProps extends ImgixProviderProps {
  alt: string
}

// TODO: monitor https://github.com/imgix/react-imgix/issues/356 for the addition of types to library so we can remove @types/react-imgix
export const Image: FC<ImageProps> = (props) => {
  const { alt, src, sizes = '100vw', ...restProps } = props
  return (
    <Imgix
      {...restProps}
      src={src}
      sizes={sizes}
      width="100%"
      imgixParams={{
        fm: getImageExtension(src),
      }}
      htmlAttributes={{
        alt,
      }}
    />
  )
}
