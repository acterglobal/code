import React from 'react'
import { Meta, Story } from '@storybook/react'
import { Links } from 'src/components/links'
import { ExampleLink, ExampleActer, ExampleUser } from 'src/__fixtures__'

export default {
  title: 'Acter/Link',
  component: Links,
  args: {
    links: [
      {
        ...ExampleLink,
      },
    ],
    user: { ...ExampleUser },
    acter: { ...ExampleActer },
  },
} as Meta

export const LinkSection: Story = (args) => <Links {...args} />
