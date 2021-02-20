import React from 'react'
import { ImageUpload } from './image-upload'

export const ImageUploadSection = () => {
  return (
    <>
      <ImageUpload imageType="avtar" />
      <ImageUpload imageType="banner" />
    </>
  )
}
