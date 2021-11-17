import { useState } from 'react'

import { Meta, Story } from '@storybook/react'

import {
  DateTimePicker,
  DateTimePickerProps,
} from '@acter/components/util/datetime'

export default {
  title: 'Molecules/Fields/Datetime Picker',
  component: DateTimePicker,
} as Meta<DateTimePickerProps>

const Template: Story<DateTimePickerProps> = (args) => {
  const [value, setValue] = useState(args.value)
  const handleChange = (date: Date) => {
    setValue(date)
    args.onChange(date)
  }
  return <DateTimePicker {...args} value={value} onChange={handleChange} />
}

export const DateAndTime = Template.bind({})

export const DateOnly = Template.bind({})
DateOnly.args = {
  isAllDay: true,
} as DateTimePickerProps

export const WithMaxDateToday = Template.bind({})
WithMaxDateToday.args = {
  maxDate: new Date(),
} as DateTimePickerProps

export const WithMinDateToday = Template.bind({})
WithMinDateToday.args = {
  minDate: new Date(),
} as DateTimePickerProps
