import React, { FC } from 'react'
import { ImageUpload } from 'src/components/acter/image-upload'
import { FormikSetFieldType } from 'src/components/acter/wizard'

export const ImageUploadSection: FC<FormikSetFieldType> = (props) => {
  const { setFieldValue } = props
  return (
    <div style={{ display: 'flex' }}>
      <ImageUpload imageType="avatar" setImageToFormField={setFieldValue} />
      <ImageUpload imageType="banner" setImageToFormField={setFieldValue} />
    </div>
  )
}

ImageUploadSection.label = 'Upload Images'
ImageUploadSection.initialValues = {
  avatarImage: null,
  bannerImage: null,
}
