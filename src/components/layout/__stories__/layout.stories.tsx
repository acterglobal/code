import React, { FC } from 'react'
import { Story, Meta } from '@storybook/react'
import { withNextRouter } from 'storybook-addon-next-router'
import { Layout, LayoutProps } from 'src/components/layout'
import {
  ExampleActer,
  ExampleOrganisationActer,
  ExampleUser,
} from 'src/__fixtures__'
const Content: FC = () => <main>Main content</main>

export default {
  title: 'layout/Overall',
  component: Layout,
  decorators: [withNextRouter],
  args: {
    children: <Content />,
  },
  parameters: {
    query: {
      slug: ExampleActer.slug,
      tab: ['feed'],
    },
  },
} as Meta

const acter = ExampleActer
const user = {
  ...ExampleUser,
  Acter: {
    ...ExampleActer,
    Following: [
      { Following: ExampleActer },
      { Following: ExampleOrganisationActer },
    ],
  },
}

const Template: Story<LayoutProps> = (args) => <Layout {...args} />

export const LoggedOut = Template.bind({})

export const LoggedOutActerContext = Template.bind({})
LoggedOutActerContext.args = {
  acter,
}

export const LoggedIn = Template.bind({})
LoggedIn.args = {
  user,
}

export const LoggedInActerContext = Template.bind({})
LoggedInActerContext.args = {
  acter,
  user,
}
