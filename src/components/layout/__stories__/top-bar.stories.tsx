import { Story, Meta } from '@storybook/react'

import { TopBar, TopBarProps } from 'src/components/layout/top-bar'

import { ExampleUser } from 'src/__fixtures__/user/example-user'
//@ts-ignore
import { decorator as NextAuthMockDecorator } from 'next-auth/client'

export default {
  title: 'layout/TopBar',
  component: TopBar,
  decorators: [NextAuthMockDecorator],
  parameters: {
    nextAuth: {
      user: null,
    },
  },
} as Meta

const Template: Story<TopBarProps> = (args) => <TopBar {...args} />

export const LoggedOut = Template.bind({})

export const LoggedIn = Template.bind({})
LoggedIn.args = {
  user: ExampleUser,
}
