import React, { FC } from 'react'

import { Story, Meta } from '@storybook/react'

import { OverallLayout, LayoutProps } from '@acter/components/layout/overall'
import { loggedInParameters } from '@acter/lib/storybook-helpers'

const Content: FC = () => <main>Main content</main>

export default {
  title: 'Layouts/Overall',
  component: OverallLayout,
  args: {
    children: <Content />,
  },
} as Meta

const Template: Story<LayoutProps> = (args) => <OverallLayout {...args} />

export const LoggedOut = Template.bind({})

export const LoggedIn = Template.bind({})
LoggedIn.parameters = loggedInParameters
