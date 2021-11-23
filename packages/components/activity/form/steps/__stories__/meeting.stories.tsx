import { Meta, Story } from '@storybook/react'

import { withFormik } from 'storybook-formik'
import { v4 } from 'uuid'

import { BasicsStepValues } from '@acter/components/activity/form/steps/basics'
import { MeetingStep } from '@acter/components/activity/form/steps/meeting'
import { SettingsStepProps } from '@acter/components/activity/form/steps/settings'
import { ExampleActer, ActivityTypes } from '@acter/schema/fixtures'

type MeetingStepValues = BasicsStepValues & {
  description: string
}

export default {
  title: 'Organisms/Activity/Form/Steps/Meeting',
  component: MeetingStep,
  args: {
    acters: [
      { ...ExampleActer, id: v4(), name: 'Acter 1' },
      { ...ExampleActer, id: v4(), name: 'Acter 2' },
      { ...ExampleActer, id: v4(), name: 'Acter 3' },
    ],
    activityTypes: ActivityTypes,
  },
  decorators: [withFormik],
  parameters: {
    layout: 'padded',
    formik: {
      initialValues: {
        activityTypeId: '',
        description: '',
        endAt: null,
        isOnline: false,
        isAllDay: false,
        organiserActerId: '',
        startAt: null,
      } as MeetingStepValues,
    },
  },
} as Meta

const Template: Story<SettingsStepProps> = (args) => (
  <div style={{ width: 600 }}>
    <MeetingStep {...args} />
  </div>
)

export const New = Template.bind({})
