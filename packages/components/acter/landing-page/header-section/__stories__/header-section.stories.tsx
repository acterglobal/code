import React from 'react'

import { Meta, Story } from '@storybook/react'

import {
  HeaderSection,
  HeaderSectionProps,
} from '@acter/components/acter/landing-page/header-section'
import { withExampleActerParams } from '@acter/lib/storybook-helpers'
import { ExampleActer } from '@acter/schema/fixtures'

export default {
  title: 'Organisms/Acter/Header',
  component: HeaderSection,
  args: {
    acter: ExampleActer,
  },
  argTypes: {
    onJoin: { action: 'Join' },
    onLeave: { action: 'Leave' },
  },
  parameters: withExampleActerParams(),
} as Meta

export const Header: Story<HeaderSectionProps> = (args) => (
  <HeaderSection {...args} />
)
