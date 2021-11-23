import { Meta, Story } from '@storybook/react'

import { withFormik } from 'storybook-formik'

import {
  BasicsStep,
  BasicsStepValues,
} from '@acter/components/activity/form/steps/basics'
import { ExampleActer } from '@acter/schema/fixtures'

export default {
  title: 'Organisms/Activity/Form/Steps/Basics',
  component: BasicsStep,
  args: {
    acters: [ExampleActer],
  },
  decorators: [withFormik],
  parameters: {
    layout: 'padded',
    formik: {
      initialValues: {
        activityTypeId: '',
        endAt: null,
        isOnline: false,
        isAllDay: false,
        organiserActerId: '',
        startAt: null,
      } as BasicsStepValues,
    },
  },
} as Meta

const Template: Story = (args) => (
  <div style={{ width: 600 }}>
    <BasicsStep {...args} />
  </div>
)

export const New = Template.bind({})
