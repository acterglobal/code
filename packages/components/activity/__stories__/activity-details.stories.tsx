import React from 'react'

import { Meta, Story } from '@storybook/react'

import {
  ActivityDetails,
  ActivityDetailsProps,
} from '@acter/components/activity/activity-details'
import { Acter } from '@acter/schema'
import {
  ExampleActer,
  ExampleActivityActer,
  ExampleActerConnection,
  ExampleActivity,
} from '@acter/schema/fixtures'

const acter: Acter = {
  ...ExampleActivityActer,
  Activity: ExampleActivity,
  ActerInterests: [],
  Followers: [
    {
      ...ExampleActerConnection,
      Follower: ExampleActer,
    },
  ],
}

export default {
  title: 'Pages/Activity/ActivityDetails',
  component: ActivityDetails,
  args: {
    acter: acter,
  },
} as Meta

export const Main: Story<ActivityDetailsProps> = (args) => (
  <ActivityDetails {...args} />
)
