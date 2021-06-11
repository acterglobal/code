import { Meta, Story } from '@storybook/react'
import moment from 'moment'
import { withFormik } from 'storybook-formik'
import {
  ActivityForm,
  ActivityFormProps,
  ActivityFormValues,
} from 'src/components/activity/form'
import {
  ActivityTypes,
  ExampleActer,
  ExampleUser,
  ExampleUserActer,
  ExampleActerConnection,
  Interests,
  ExampleActivityActer,
  ExampleActivity,
} from 'src/__fixtures__'

const args: ActivityFormProps = {
  activityTypes: ActivityTypes,
  interestTypes: Interests.data.interestTypes,
  user: {
    ...ExampleUser,
    Acter: {
      ...ExampleUserActer,
      Following: [
        {
          ...ExampleActerConnection,
          Following: ExampleActer,
        },
      ],
    },
  },
  onSubmit: () => null,
}

export default {
  title: 'Activity/Form',
  component: ActivityForm,
  args,
  decorators: [withFormik],
  parameters: {
    layout: 'padded',
    formik: {
      initialValues: {
        activityTypeId: '',
        bannerUrl: '',
        description: '',
        organiserActerId: '',
        isOnline: false,
        isAllDay: false,
        startDate: moment(),
        startTime: moment(),
        endDate: moment(),
        endTime: moment(),
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
