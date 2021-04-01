import React, { FC } from 'react'
import { Story, Meta } from '@storybook/react'
import { Layout, LayoutProps } from 'src/components/layout'
import { ExampleUser } from 'src/__fixtures__'
const Content: FC = () => <main>Main content</main>

export default {
  title: 'layout/Overall',
  component: Layout,
  args: {
    children: <Content />,
  },
} as Meta

const Template: Story<LayoutProps> = (args) => <Layout {...args} />

export const LoggedOut = Template.bind({})

export const LoggedIn = Template.bind({})
LoggedIn.args = {
  loggedInUser: ExampleUser,
}
