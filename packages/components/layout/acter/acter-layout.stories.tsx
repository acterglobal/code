import React, { FC } from 'react'

import { Story, Meta } from '@storybook/react'

import { ActerLayout } from '@acter/components/layout/acter'
import {
  loggedInParameters,
  withExampleActerParams,
} from '@acter/lib/storybook-helpers'

const Content: FC = () => <main>Main content</main>

export default {
  title: 'Layouts/Acter',
  component: ActerLayout,
  args: {
    children: <Content />,
  },
  parameters: {
    ...withExampleActerParams(),
  },
} as Meta

const Template: Story = (args) => <ActerLayout {...args} />

export const LoggedOut = Template.bind({})

export const LoggedIn = Template.bind({})
LoggedIn.parameters = {
  ...loggedInParameters,
  ...withExampleActerParams(),
  urql: () => ({
    data: {
      ...loggedInParameters.urql().data,
      ...withExampleActerParams().urql().data,
    },
  }),
}
