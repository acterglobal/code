import { Meta, Story } from '@storybook/react'

import { add } from 'date-fns'
import { withFormik } from 'storybook-formik'

import {
  StartEndDateTimePicker,
  StartEndDateTimePickerProps,
} from '@acter/components/molecules/fields/start-end-datetime-picker'

export default {
  title: 'Molecules/Fields/Start End DateTime Picker',
  component: StartEndDateTimePicker,
  args: {
    placeholder: 'Storybook',
  },
  decorators: [withFormik],
  parameters: {
    layout: 'padded',
    formik: {
      initialValues: {
        startAt: null,
        endAt: null,
        isAllDay: false,
      },
    },
  },
} as Meta<StartEndDateTimePickerProps>

const Template: Story<StartEndDateTimePickerProps> = (args) => (
  <StartEndDateTimePicker {...args} />
)

export const WithAllDayOption = Template.bind({})

export const NoAllDayOption = Template.bind({})
NoAllDayOption.args = {
  hideIsAllDayCheckBox: true,
} as StartEndDateTimePickerProps

const today = new Date()
const tomorrow = add(today, { days: 1 })
export const WithValues = Template.bind({})
WithValues.parameters = {
  formik: {
    initialValues: {
      startAt: today,
      endAt: tomorrow,
    },
  },
}

export const WithError = Template.bind({})
WithError.parameters = {
  args: {
    endAt: new Date(2021, 10, 18),
    startAt: new Date(2021, 10, 17),
  },
  formik: {
    initialErrors: {
      endAt: 'Cannot be before start',
    },
  },
}
