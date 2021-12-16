import React, { FC } from 'react'

import { Story, Meta } from '@storybook/react'

import { SearchLayout } from '@acter/components/layout/search'
import { loggedInParameters } from '@acter/lib/storybook-helpers'

const Content: FC = () => <main>Main content</main>

export default {
  title: 'Layouts/Search',
  component: SearchLayout,
  args: {
    children: <Content />,
  },
} as Meta

const Template: Story = (args) => <SearchLayout {...args} />

export const LoggedOut = Template.bind({})

export const LoggedIn = Template.bind({})
LoggedIn.parameters = loggedInParameters
