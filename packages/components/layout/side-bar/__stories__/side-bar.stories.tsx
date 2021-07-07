import React from 'react'
import { Story, Meta } from '@storybook/react'
import { withNextRouter } from 'storybook-addon-next-router'
import { Sidebar, SidebarProps } from '@acter/components/layout/side-bar'
import { ActerMenu } from '@acter/lib/constants'
import {
  ExampleActer,
  ExampleUser,
  ExampleOrganisationActer,
} from '@acter/schema/fixtures'

export default {
  title: 'layout/Side Bar',
  component: Sidebar,
  decorators: [withNextRouter],
  args: {
    size: 50,
  },
  parameters: {
    query: {
      slug: ExampleActer.slug,
      tab: [ActerMenu.FORUM],
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

const Template: Story<SidebarProps> = (args) => <Sidebar {...args} />

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
