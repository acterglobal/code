import React, { FC } from 'react'
import { ImageUpload } from 'src/components/image-upload'
import { FormSetFieldValue, FormValues } from 'src/components/acter/form'

export interface ImageUploadProps {
  initialValues: FormValues
  setFieldValue: FormSetFieldValue
}

export const ImageUploadSection: FC<ImageUploadProps> = (props) => {
  const { initialValues, setFieldValue } = props
  return (
    <div style={{ display: 'flex' }}>
      <ImageUpload
        imageType="avatar"
        setImageToFormField={setFieldValue}
        fileUrl={initialValues.avatarUrl}
      />
      <ImageUpload
        aspectRatio={24 / 5}
        imageType="banner"
        setImageToFormField={setFieldValue}
        fileUrl={initialValues.bannerUrl}
      />
    </div>
  )
}
