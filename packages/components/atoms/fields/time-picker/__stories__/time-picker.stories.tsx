import React from 'react'

import DateUtils from '@date-io/date-fns'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import { Meta, Story } from '@storybook/react'

import {
  TimePicker,
  TimePickerProps,
} from '@acter/components/atoms/fields/time-picker'

export default {
  title: 'Atoms/Fields/TimePicker',
  component: TimePicker,
  args: {},
} as Meta

const Template: Story<TimePickerProps> = (args) => (
  <MuiPickersUtilsProvider utils={DateUtils}>
    <TimePicker {...args} />
  </MuiPickersUtilsProvider>
)

export const Default = Template.bind({})
export const Disabled = Template.bind({})
Disabled.args = {
  disabled: true,
} as TimePickerProps
