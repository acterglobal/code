import React from 'react'

import { Meta, Story } from '@storybook/react'

import { HeaderSection } from '@acter/components/acter/landing-page/header-section'
import { ExampleActer, ExampleUser } from '@acter/lib/fixtures'

export default {
  title: 'Organisms/Acter/Header',
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

export const Header: Story = (args) => <HeaderSection {...args} />
