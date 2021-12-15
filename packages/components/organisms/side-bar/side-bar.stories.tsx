import React from 'react'

import { Story, Meta } from '@storybook/react'

import { Sidebar } from '@acter/components/organisms/side-bar'
import { loggedInParameters } from '@acter/lib/storybook-helpers'

export default {
  title: 'Organisms/Layout/Side Bar',
  component: Sidebar,
  args: {
    size: 50,
  },
} as Meta

const Template: Story = (args) => <Sidebar {...args} />

export const LoggedOut = Template.bind({})

export const LoggedIn = Template.bind({})
LoggedIn.parameters = loggedInParameters
