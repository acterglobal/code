import React, { FC } from 'react'
import { useFormikContext } from 'formik'
import { ImageUpload } from 'src/components/image-upload'

export interface ImageUploadValues {
  avatarUrl: string
  bannerUrl: string
}

export const ImageUploadSection: FC = () => {
  const { values, setFieldValue } = useFormikContext<ImageUploadValues>()
  return (
    <div style={{ display: 'flex' }}>
      <ImageUpload
        imageType="avatar"
        setImageToFormField={setFieldValue}
        fileUrl={values.avatarUrl}
      />
      <ImageUpload
        aspectRatio={24 / 5}
        imageType="banner"
        setImageToFormField={setFieldValue}
        fileUrl={values.bannerUrl}
      />
    </div>
  )
}
