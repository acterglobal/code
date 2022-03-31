import React, { FC } from 'react'

import { Story, Meta } from '@storybook/react'

import { loggedInParameters } from '@acter/lib/storybook-helpers'

import { SearchTemplate } from './search-template'

const Content: FC = () => <main>Main content</main>

export default {
  title: 'Layouts/Search',
  component: SearchTemplate,
  args: {
    children: <Content />,
  },
} as Meta

const Template: Story = (args) => <SearchTemplate {...args} />

export const LoggedOut = Template.bind({})

export const LoggedIn = Template.bind({})
LoggedIn.parameters = loggedInParameters
