import { Meta, Story } from '@storybook/react'

import {
  LocationPicker,
  LocationPickerProps,
} from '@acter/components/atoms/fields/location-picker'

export default {
  title: 'Atoms/Fields/Location Picker',
  component: LocationPicker,
  args: {
    label: 'Location',
  },
} as Meta<LocationPickerProps>

const Template: Story<LocationPickerProps> = (args) => (
  <LocationPicker {...args} />
)

export const Main = Template.bind({})
Main.args = {}
