import { Meta } from '@storybook/react'
import { ImageUploadSection } from 'src/components/acter/image-upload-section'

export default {
  title: 'acter/ImagesUpload',
  component: ImageUploadSection,
} as Meta

const testSetFieldValue = () => console.log('test')

export const ImagesUpload = () => (
  <ImageUploadSection setFieldValue={testSetFieldValue} />
)
