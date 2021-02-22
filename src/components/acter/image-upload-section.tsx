import React, { FC } from 'react'
import { ImageUpload } from 'src/components/acter/image-upload'
import { FormikSetFieldType } from 'src/components/acter/wizard'

// TODO : ADD types to this component
export const ImageUploadSection = (props) => {
  const { setFieldValue } = props
  return (
    <div style={{ display: 'flex' }}>
      <ImageUpload imageType="Avatar" onFile={() => null} setImageToFormField={setFieldValue} />
      <ImageUpload
        aspectRatio={24 / 5}
        imageType="Banner"
        onFile={() => null}
        setImageToFormField={setFieldValue}
      />
    </div>
  )
}

ImageUploadSection.label = 'Upload Images'
ImageUploadSection.initialValues = {
  avatarImage: null,
  bannerImage: null,
}
