import React from 'react'

import { Story, Meta } from '@storybook/react'

import { Sidebar } from '@acter/components/organisms/side-bar'
import { ActerMenu } from '@acter/lib/constants'
import {
  ExampleActer,
  ExampleUser,
  ExampleOrganisationActer,
} from '@acter/schema/fixtures'

export default {
  title: 'Organisms/Layout/Side Bar',
  component: Sidebar,
  args: {
    size: 50,
  },
  parameters: {
    nextRouter: {
      query: {
        slug: ExampleActer.slug,
        tab: [ActerMenu.FORUM],
      },
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

const Template: Story = (args) => <Sidebar {...args} />

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
