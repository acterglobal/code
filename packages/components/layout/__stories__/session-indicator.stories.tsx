import { Story, Meta } from '@storybook/react'

import {
  SessionIndicator,
  SessionIndicatorProps,
} from '@acter/components/layout/session-indicator'

import { ExampleActer, ExampleUser } from '@acter/schema/fixtures'
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
  user: {
    ...ExampleUser,
    Acter: ExampleActer,
  },
}
