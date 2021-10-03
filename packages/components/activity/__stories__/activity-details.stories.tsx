import React from 'react'

import { Meta, Story } from '@storybook/react'

import {
  ActivityDetails as Activity,
  ActivityDetailsProps,
} from '@acter/components/activity'
import {
  ExampleActivity,
  ExampleActer,
  Interests,
} from '@acter/schema/fixtures'

const acter = {
  ...ExampleActer,
  Activity: { ...ExampleActivity, type: 'Idea' },
  ActerInterests: [{ Interest: Interests.data.interestTypes[1].Interests[0] }],
  Followers: [{ Follower: ExampleActer }],
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
