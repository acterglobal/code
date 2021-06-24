import { Meta, Story } from '@storybook/react'
import { withFormik } from 'storybook-formik'
import { ImageUploadSection } from '@acter/components/acter/form/image-upload-section'

export default {
  title: 'acter/ImagesUpload',
  component: ImageUploadSection,
  args: {
    onFile: () => null,
    aspectRatio: 1,
  },
  argTypes: {
    onFile: { action: 'File' },
  },
  decorators: [withFormik],
} as Meta

export const ImagesUpload: Story = () => <ImageUploadSection />
