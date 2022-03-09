import React from 'react'

import { Meta, Story } from '@storybook/react'

import { Activity, ActivityProps } from '@acter/components/activity'
import { withExampleActerParams } from '@acter/lib/storybook-helpers'
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
  title: 'Pages/Activity',
  component: Activity,
  args: {
    acter,
  },
  parameters: withExampleActerParams(acter),
} as Meta

export const Main: Story<ActivityProps> = (args) => <Activity {...args} />
