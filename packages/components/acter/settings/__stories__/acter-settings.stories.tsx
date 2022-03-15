import React from 'react'

import { Meta, Story } from '@storybook/react'

import { ActerSettings } from '@acter/components/acter/settings'
import { withExampleActerParams } from '@acter/lib/storybook-helpers'
import { ExampleActer } from '@acter/schema/fixtures'

export default {
  title: 'Pages/Acter/Settings',
  component: ActerSettings,
  parameters: withExampleActerParams(),
} as Meta

const Template: Story = (props) => <ActerSettings {...props} />

export const Main = Template.bind({})
Main.args = {
  acter: ExampleActer,
}
