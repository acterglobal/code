import { Meta, Story } from '@storybook/react'
import moment from 'moment'
import { withFormik } from 'storybook-formik'
import { MeetingStep } from '@acter/components/activity/form/steps/meeting'
import { BasicsStepValues } from '@acter/components/activity/form/steps/basics'
import { ExampleActer, ActivityTypes } from '@acter/schema/fixtures'

type MeetingStepValues = BasicsStepValues & {
  description: string
}

export default {
  title: 'Activity/Form/Steps/Meeting',
  component: MeetingStep,
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
        description: '',
        isOnline: false,
        isAllDay: false,
        startDate: moment(),
        startTime: moment(),
        endDate: moment(),
        endTime: moment(),
      } as MeetingStepValues,
    },
  },
} as Meta

const Template: Story = (args) => (
  <div style={{ width: 600 }}>
    <MeetingStep {...args} />
  </div>
)

export const New = Template.bind({})
