import { FC } from 'react'
import Imgix from 'react-imgix'

import { getImageExtension } from '@acter/lib/images/get-image-extension'

interface ImageProps {
  src: string
  alt: string
}
export const Image: FC<ImageProps> = ({ src, alt }) => {
  return (
    <Imgix
      src={src}
      alt={alt}
      width="100%"
      imgixParams={{
        fm: getImageExtension(src),
      }}
    />
  )
}
