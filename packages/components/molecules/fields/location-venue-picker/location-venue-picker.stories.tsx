import { Meta, Story } from '@storybook/react'

import withFormik from 'storybook-formik'

import { LocationVenuePicker } from '@acter/components/molecules/fields/location-venue-picker'

export default {
  title: 'Molecules/Fields/LocationVenuePicker',
  component: LocationVenuePicker,
  decorators: [withFormik],
  args: {},
  parameters: {
    formik: {
      initialValues: {
        isOnline: false,
      },
    },
  },
} as Meta

const Template: Story = () => <LocationVenuePicker />

export const Default = Template.bind({})
Default.args = {}
