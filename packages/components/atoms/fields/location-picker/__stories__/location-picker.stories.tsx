import { Meta, Story } from '@storybook/react'

import withFormik from 'storybook-formik'

import {
  LocationPicker,
  LocationPickerProps,
} from '@acter/components/atoms/fields/location-picker'

export default {
  title: 'Atoms/Fields/Location Picker',
  component: LocationPicker,
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
} as Meta<LocationPickerProps>

const Template: Story<LocationPickerProps> = (args) => (
  <LocationPicker {...args} />
)

export const Empty = Template.bind({})
Empty.args = {}

export const WithValue = Template.bind({})
WithValue.parameters = {
  formik: {
    initialValues: {
      placeId: 'ChIJr7io8Cq8SUYRCYkY8Bfmd1E',
      location: 'Klitmøller, Denmark',
      locationLat: 57.0400556,
      locationLng: 8.4932873,
    },
  },
}

export const WithLegacyValue = Template.bind({})
WithLegacyValue.parameters = {
  formik: {
    initialValues: {
      location: 'Klitmøller, Denmark',
    },
  },
}

export const LimitedPlaces = Template.bind({})
LimitedPlaces.args = {
  types: ['(regions)'],
  cacheKey: 'regions',
} as LocationPickerProps
