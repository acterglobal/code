import { Story, Meta } from '@storybook/react'

import {
  SessionIndicator,
  SessionIndicatorProps,
} from 'src/components/layout/session-indicator'

import { ExampleUser } from 'src/__fixtures__/user/example-user'

export default {
  title: 'layout/UserSession',
  component: SessionIndicator,
  parameters: {
    nextAuth: {
      user: null,
    },
  },
} as Meta

const Template: Story<SessionIndicatorProps> = (args) => (
  <SessionIndicator {...args} />
)

export const LoggedOut = Template.bind({})

export const LoggedIn = Template.bind({})
LoggedIn.args = {
  user: ExampleUser,
}
