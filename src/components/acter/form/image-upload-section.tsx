import React from 'react'
import { ImageUpload } from 'src/components/image-upload'

// TODO : ADD types to this component
export const ImageUploadSection = (props) => {
  const { setFieldValue } = props
  return (
    <div style={{ display: 'flex' }}>
      <ImageUpload imageType="avatar" setImageToFormField={setFieldValue} />
      <ImageUpload
        aspectRatio={24 / 5}
        imageType="banner"
        setImageToFormField={setFieldValue}
      />
    </div>
  )
}

ImageUploadSection.label = 'Upload Images'
ImageUploadSection.initialValues = {
  AvatarImage: null,
  BannerImage: null,
}
