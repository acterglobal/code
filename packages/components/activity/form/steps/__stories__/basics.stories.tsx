import { Meta, Story } from '@storybook/react'
import moment from 'moment'
import { withFormik } from 'storybook-formik'
import {
  BasicsStep,
  BasicsStepProps,
  BasicsStepValues,
} from '@acter/components/activity/form/steps/basics'
import { ExampleActer, ActivityTypes } from '@acter/schema/fixtures'

export default {
  title: 'Activity/Form/Steps/Basics',
  component: BasicsStep,
  args: {
    acters: [ExampleActer],
    activityTypes: ActivityTypes,
  },
  decorators: [withFormik],
  parameters: {
    layout: 'padded',
    formik: {
      initialValues: {
        activityTypeId: '',
        organiserActerId: '',
        isOnline: false,
        isAllDay: false,
        startDate: moment(),
        startTime: moment(),
        endDate: moment(),
        endTime: moment(),
      } as BasicsStepValues,
    },
  },
} as Meta

const Template: Story<BasicsStepProps> = (args) => (
  <div style={{ width: 600 }}>
    <BasicsStep {...args} />
  </div>
)

export const New = Template.bind({})
