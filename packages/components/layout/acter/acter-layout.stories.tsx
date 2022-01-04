import React, { FC } from 'react'

import { Story, Meta } from '@storybook/react'

import { ActerLayout } from '@acter/components/layout/acter'
import { loggedInParameters } from '@acter/lib/storybook-helpers'
import { pluralize } from '@acter/lib/string/pluralize'
import { ExampleActer, OrganisationActerType } from '@acter/schema/fixtures'

const Content: FC = () => <main>Main content</main>

export default {
  title: 'Layouts/Acter',
  component: ActerLayout,
  args: {
    children: <Content />,
  },
  parameters: {
    nextRouter: {
      asPath: `/${pluralize(OrganisationActerType.name)}/`,
      query: {
        slug: ExampleActer.slug,
      },
    },
    urql: () => ({
      data: {
        acterTypes: [OrganisationActerType],
        findFirstActer: ExampleActer,
      },
    }),
  },
} as Meta

const Template: Story = (args) => <ActerLayout {...args} />

export const LoggedOut = Template.bind({})

export const LoggedIn = Template.bind({})
LoggedIn.parameters = {
  ...loggedInParameters,
  urql: () => ({
    data: {
      ...loggedInParameters.urql().data,
      acterTypes: [OrganisationActerType],
      findFirstActer: ExampleActer,
    },
  }),
}
