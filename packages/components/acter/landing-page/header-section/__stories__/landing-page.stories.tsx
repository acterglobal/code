import React from 'react'
import { Meta, Story } from '@storybook/react'
import {
  ActerLanding,
  ActerLandingProps,
} from '@acter/components/acter/landing-page/index'
import { ExampleActer, ExampleUser } from '@acter/schema/fixtures'

export default {
  title: 'landingpage/LandingPage',
  component: ActerLanding,
  args: {
    acter: ExampleActer,
    user: ExampleUser,
  },
  argTypes: {
    onJoin: { action: 'Join' },
    onLeave: { action: 'Leave' },
  },
} as Meta

export const LandingPage: Story<ActerLandingProps> = (args) => (
  <ActerLanding {...args} />
)
