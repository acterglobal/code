import React from 'react'

import { Meta, Story } from '@storybook/react'

import {
  ActivityDetails as Activity,
  ActivityDetailsProps,
} from '@acter/components/activity'
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
  title: 'Activity/ActivityDetails',
  component: Activity,
  args: {
    acter: acter,
  },
} as Meta

export const ActivityDetails: Story<ActivityDetailsProps> = (args) => (
  <Activity {...args} />
)
