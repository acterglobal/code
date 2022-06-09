import { Meta, Story } from '@storybook/react'

import { withFormik } from 'storybook-formik'

import {
  DateTimePicker,
  DateTimePickerProps,
} from '@acter/components/molecules/fields/datetime-picker'

export default {
  title: 'Molecules/Fields/Datetime Picker',
  component: DateTimePicker,
  decorators: [withFormik],
  args: {
    name: 'storybook',
    placeholder: 'Storybook',
  },
  parameters: {
    formik: {
      initialValues: {
        storybook: null,
      },
    },
  },
} as Meta<DateTimePickerProps>

const Template: Story<DateTimePickerProps> = (args) => (
  <DateTimePicker {...args} />
)

export const DateAndTime = Template.bind({})

export const DateOnly = Template.bind({})
DateOnly.args = {
  isAllDay: true,
} as DateTimePickerProps

export const WithMaxDate9June2022 = Template.bind({})
WithMaxDate9June2022.args = {
  maxDate: new Date(2022, 5, 9, 12, 0, 0),
} as DateTimePickerProps

export const WithMinDate9June2022 = Template.bind({})
WithMinDate9June2022.args = {
  minDate: new Date(2022, 5, 9, 12, 0, 0),
} as DateTimePickerProps

export const ErrorState = Template.bind({})
ErrorState.parameters = {
  formik: {
    initialErrors: {
      storybook: 'There was an error',
    },
  },
}
