import { Story, Meta } from '@storybook/react'

import { SessionIndicator } from '@acter/components/molecules/session-indicator'
import { ExampleActer, ExampleUser } from '@acter/schema/fixtures'

export default {
  title: 'Atoms/User/UserSession',
  component: SessionIndicator,
  parameters: {
    nextAuth: {
      user: null,
    },
  },
} as Meta

const Template: Story = (args) => <SessionIndicator {...args} />

export const LoggedOut = Template.bind({})

//TODO: this won't work now that we've moved the data to a hook.
export const LoggedIn = Template.bind({})
LoggedIn.args = {
  user: {
    ...ExampleUser,
    Acter: ExampleActer,
  },
}
