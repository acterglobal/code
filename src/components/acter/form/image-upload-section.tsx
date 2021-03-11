import React from 'react'
import { ImageUpload } from 'src/components/image-upload'

// TODO : ADD types to this component
export const ImageUploadSection = ({ initialValues, setFieldValue }) => {
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

ImageUploadSection.label = 'Upload Images'
ImageUploadSection.initialValues = {
  AvatarImage: null,
  BannerImage: null,
}
