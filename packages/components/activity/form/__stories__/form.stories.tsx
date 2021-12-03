import { Meta, Story } from '@storybook/react'

import pluralize from 'pluralize'
import { withFormik } from 'storybook-formik'

import {
  ActivityForm,
  ActivityFormProps,
  ActivityFormValues,
} from '@acter/components/activity/form'
import {
  ExampleActivityActer,
  ExampleActivity,
  OrganisationActerType,
  NetworkActerType,
  EventActivityType,
  ProjectActivityType,
  ExampleActer,
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
    nextRouter: {
      asPath: `/${pluralize(OrganisationActerType.name)}/`,
      query: {
        slug: ExampleActer.slug,
      },
    },
    urql: () => ({
      data: {
        acterTypes: [OrganisationActerType, NetworkActerType],
        activityTypes: [EventActivityType, ProjectActivityType],
        findFirstActer: ExampleActer,
        user: ExampleUser,
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
