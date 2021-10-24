import { Meta, Story } from '@storybook/react'

import { withFormik } from 'storybook-formik'

import {
  ActivityForm,
  ActivityFormProps,
  ActivityFormValues,
} from '@acter/components/activity/form'
import { ExampleActivityActer, ExampleActivity } from '@acter/schema/fixtures'

const args: ActivityFormProps = {
  onSubmit: () => null,
}

export default {
  title: 'Organisms/Activity/Form',
  component: ActivityForm,
  args,
  decorators: [withFormik],
  parameters: {
    layout: 'padded',
    formik: {
      initialValues: {
        followerIds: [],
        activityTypeId: '',
        bannerUrl: '',
        description: '',
        organiserActerId: '',
        isOnline: false,
        isAllDay: false,
        startDate: new Date(),
        startTime: new Date(),
        endDate: new Date(),
        endTime: new Date(),
      } as ActivityFormValues,
    },
  },
} as Meta

const Template: Story<ActivityFormProps> = (args) => <ActivityForm {...args} />

export const New = Template.bind({})

export const Existing = Template.bind({})
Existing.args = {
  ...args,
  acter: {
    ...ExampleActivityActer,
    Activity: ExampleActivity,
  },
}
