import React from 'react'

import { Meta, Story } from '@storybook/react'

import { ActerActivities } from '@acter/components/acter/activities'
import { ExampleActer, ExampleUser } from '@acter/schema/fixtures'

export default {
  title: 'Organisms/Acter/Activities',
  component: ActerActivities,
  args: {
    acter: ExampleActer,
    user: ExampleUser,
  },
  argTypes: {
    onJoin: { action: 'Join' },
    onLeave: { action: 'Leave' },
  },
} as Meta

export const Activities: Story = (props) => <ActerActivities {...props} />
