import React from 'react'
import { ImageUpload } from './image-upload'

export const ImageUploadSection = () => {
  return (
    <div style={{ display: 'flex' }}>
      <ImageUpload imageType="Avatar" />
      <ImageUpload imageType="Banner" />
    </div>
  )
}

ImageUploadSection.label = 'Upload Images'
ImageUploadSection.initialValues = {
  avatarImage: null,
  bannerImage: null,
}
