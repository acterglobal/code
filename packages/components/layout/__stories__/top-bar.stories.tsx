import { Story, Meta } from '@storybook/react'

import { TopBar } from '@acter/components/layout/top-bar'
import { ExampleUser, ExampleActer } from '@acter/schema/fixtures'

export default {
  title: 'Organisms/Layout/TopBar',
  component: TopBar,
} as Meta

const Template: Story = (args) => <TopBar {...args} />

export const LoggedOut = Template.bind({})

//TODO: this won't work now that we've moved user fetch to a hook
export const LoggedIn = Template.bind({})
LoggedIn.args = {
  user: {
    ...ExampleUser,
    Acter: ExampleActer,
  },
}
