import DateUtils from '@date-io/date-fns'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import { Meta, Story } from '@storybook/react'

import {
  DatePicker,
  DatePickerProps,
} from '@acter/components/atoms/fields/date-picker'

export default {
  title: 'Atoms/Fields/DatePicker',
  component: DatePicker,
  args: {},
} as Meta

const Template: Story<DatePickerProps> = (args) => (
  <MuiPickersUtilsProvider utils={DateUtils}>
    <DatePicker {...args} />
  </MuiPickersUtilsProvider>
)

export const Default = Template.bind({})
