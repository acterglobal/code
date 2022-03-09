import { Meta, Story } from '@storybook/react'

import { withFormik } from 'storybook-formik'

import {
  ActivityForm,
  ActivityFormProps,
  ActivityFormValues,
} from '@acter/components/activity/form'
import {
  withExampleActerParams,
  withExampleUserParams,
} from '@acter/lib/storybook-helpers'
import {
  ExampleActivityActer,
  ExampleActivity,
  EventActivityType,
  ProjectActivityType,
  ExampleUser,
} from '@acter/schema/fixtures'

const args: ActivityFormProps = {
  onSubmit: () => null,
  setDrawerHeading: () => null,
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
        activityTypeId: '',
        bannerUrl: '',
        description: '',
        endAt: null,
        followerIds: [],
        isOnline: false,
        isAllDay: false,
        location: '',
        locationLat: null,
        locationLng: null,
        organiserActerId: '',
        placeId: '',
        startAt: null,
      } as Partial<ActivityFormValues>,
    },
    initialUser: {
      isLoading: false,
      user: {
        email: ExampleUser.email,
      },
    },
    ...withExampleActerParams(),
    ...withExampleUserParams(),
    urql: () => ({
      data: {
        ...withExampleActerParams().urql().data,
        ...withExampleUserParams().urql().data,
        activityTypes: [EventActivityType, ProjectActivityType],
      },
    }),
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
