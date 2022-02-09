import React from 'react'

import { Meta, Story } from '@storybook/react'

import { ActerSettings } from '@acter/components/acter/settings'
import { ExampleActer } from '@acter/lib/fixtures'

export default {
  title: 'Pages/Acter/Settings',
  component: ActerSettings,
} as Meta

const Template: Story = (props) => <ActerSettings {...props} />

export const Main = Template.bind({})
Main.args = {
  acter: ExampleActer,
}
