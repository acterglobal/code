import { Meta, Story } from '@storybook/react'

import withFormik from 'storybook-formik'

import { LanguagePicker as LanguagePickerComponent } from '@acter/components/atoms/fields/language-picker'

export default {
  title: 'Atoms/Fields/Language Picker',
  component: LanguagePickerComponent,
  args: {
    label: 'Location',
    onSelect: () => void 0,
  },
  decorators: [withFormik],
  parameters: {
    formik: {
      initialValues: {},
    },
  },
} as Meta

export const LanguagePicker: Story = (args) => (
  <LanguagePickerComponent
    size="small"
    variant="outlined"
    fullWidth
    {...args}
  />
)
