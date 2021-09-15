import React, { FC } from 'react'

import { useFormikContext } from 'formik'

import { ImageUpload } from '@acter/components/image-upload'

export interface ImageUploadValues {
  avatarUrl?: string
  bannerUrl?: string
}

export const ImageUploadSection: FC = () => {
  const { values } = useFormikContext<ImageUploadValues>()
  return (
    <div style={{ display: 'flex' }}>
      <ImageUpload imageType="avatar" fileUrl={values.avatarUrl} />
      <ImageUpload
        aspectRatio={24 / 5}
        imageType="banner"
        fileUrl={values.bannerUrl}
      />
    </div>
  )
}
