import { Story, Meta } from '@storybook/react'

import { TopBar } from 'src/components/layout/top-bar'

import { ExampleUser } from 'src/__fixtures__/user/example-user'
import { decorator as NextAuthMockDecorator } from 'src/__mocks__/next-auth'

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
