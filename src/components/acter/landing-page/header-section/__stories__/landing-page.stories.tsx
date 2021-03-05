import React from 'react'
import { Meta, Story } from '@storybook/react'
import {
  ActerLanding,
  ActerLandingProps,
} from 'src/components/acter/landing-page/index'
import { ExampleActer, ExampleUser } from 'src/__fixtures__'
import { Acter } from '@generated/type-graphql'

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
