import { Story, Meta } from '@storybook/react'

import { TopBar } from 'src/components/layout/top-bar'

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

export const LoggedOut: Story = () => <TopBar />

export const LoggedIn: Story = () => <TopBar />
LoggedIn.parameters = {
  nextAuth: {
    user: ExampleUser,
  },
}
