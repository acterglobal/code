import React from 'react'

import { Meta, Story } from '@storybook/react'

import {
  ActivityDetails as Activity,
  ActivityDetailsProps,
} from '@acter/components/activity'
import {
  ExampleActer,
  ExampleActivityActer,
  ExampleActerConnection,
  ExampleActivity,
} from '@acter/lib/fixtures'
import { Acter } from '@acter/schema'

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
  component: Activity,
  args: {
    acter: acter,
  },
} as Meta

export const ActivityDetails: Story<ActivityDetailsProps> = (args) => (
  <Activity {...args} />
)
