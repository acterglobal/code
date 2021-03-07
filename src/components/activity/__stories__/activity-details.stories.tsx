import React, { FC } from 'react'
import { Meta } from '@storybook/react'
import {
  ActivityDetails as Activity,
  ActivityDetailsProps,
} from 'src/components/activity'
import {
  ExampleActivity,
  ExampleActer,
  Interests,
  ExampleUser,
} from 'src/__fixtures__'

const acter = {
  ...ExampleActer,
  Activity: ExampleActivity,
  ActerInterests: [{ Interest: Interests.data.interestTypes[1].Interests[0] }],
  Followers: [{ Follower: ExampleActer }],
}

export default {
  title: 'landingpage/ActivityDetails',
  component: Activity,
  args: {
    acter: acter,
    interestTypes: Interests.data.interestTypes,
    user: ExampleUser,
  },
} as Meta

export const ActivityDetails: FC<ActivityDetailsProps> = (args) => (
  <Activity {...args} />
)
