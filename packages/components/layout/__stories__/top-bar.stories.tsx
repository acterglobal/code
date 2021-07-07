import { Story, Meta } from '@storybook/react'

import { TopBar, TopBarProps } from '@acter/components/layout/top-bar'

import { ExampleUser, ExampleActer } from '@acter/schema/fixtures'
export default {
  title: 'layout/TopBar',
  component: TopBar,
} as Meta

const Template: Story<TopBarProps> = (args) => <TopBar {...args} />

export const LoggedOut = Template.bind({})

export const LoggedIn = Template.bind({})
LoggedIn.args = {
  user: {
    ...ExampleUser,
    Acter: ExampleActer,
  },
}
