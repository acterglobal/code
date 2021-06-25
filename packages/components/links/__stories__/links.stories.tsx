import React from 'react'
import { Meta, Story } from '@storybook/react'
import { Links, LinkProps } from '@acter/components/links'
import { ExampleLink, ExampleActer, ExampleUser } from '@acter/schema/fixtures'

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

export const LinkSection: Story<LinkProps> = (args) => <Links {...args} />
