import React from 'react'
import { Meta, Story } from '@storybook/react'
import { v4 } from 'uuid'
import {
  ActivitiesList,
  ActivityListProps,
} from '@acter/components/activity/list'
import { ExampleActer, ExampleActivity, ExampleUser } from 'src/__fixtures__'
import { Acter } from '@schema'

const acter = ({
  ...ExampleActer,
  Followers: [{ id: v4(), Follower: ExampleActer }],
} as unknown) as Acter

export default {
  title: 'Activity/ActivitiesList',
  component: ActivitiesList,
  args: {
    acter: acter,
    user: ExampleUser,
    activities: [ExampleActivity],
  },
} as Meta

export const List: Story<ActivityListProps> = (args) => (
  <ActivitiesList {...args} />
)