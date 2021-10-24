import { Meta, Story } from '@storybook/react'

import { withFormik } from 'storybook-formik'

import { BasicsStepValues } from '@acter/components/activity/form/steps/basics'
import { MeetingStep } from '@acter/components/activity/form/steps/meeting'
import { ExampleActer, ActivityTypes } from '@acter/schema/fixtures'

type MeetingStepValues = BasicsStepValues & {
  description: string
}

export default {
  title: 'Organisms/Activity/Form/Steps/Meeting',
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
        startDate: new Date(),
        startTime: new Date(),
        endDate: new Date(),
        endTime: new Date(),
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
