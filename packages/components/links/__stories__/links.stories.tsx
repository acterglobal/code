import React from 'react'

import { Meta, Story } from '@storybook/react'

import { Links } from '@acter/components/links'
import { withExampleActerParams } from '@acter/lib/storybook-helpers'

export default {
  title: 'Atoms/Acter/Link',
  component: Links,
  parameters: {
    ...withExampleActerParams(),
  },
} as Meta

export const LinkSection: Story = () => <Links />
