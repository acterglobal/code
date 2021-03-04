import React from 'react'
import { Meta, Story } from '@storybook/react'
import {
  HeaderSection,
  HeaderSectionProps,
} from 'src/components/acter/landing-page/header-section'
import { ExampleActer, ExampleUser } from 'src/__fixtures__'

export default {
  title: 'landingpage/Header',
  component: HeaderSection,
  args: {
    acter: ExampleActer,
    user: ExampleUser,
  },
  argTypes: {
    onJoin: { action: 'Join' },
    onLeave: { action: 'Leave' },
  },
} as Meta

export const Header: Story<HeaderSectionProps> = (args) => (
  <HeaderSection {...args} />
)
