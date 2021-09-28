import React, { FC } from 'react'

import { Meta } from '@storybook/react'

import { ActivityDetails as Activity } from '@acter/components/activity'
import {
  ExampleActivity,
  ExampleActer,
  Interests,
  ExampleUser,
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
    interestTypes: Interests.data.interestTypes,
    user: ExampleUser,
  },
} as Meta

export const ActivityDetails: FC = (args) => <Activity {...args} />
