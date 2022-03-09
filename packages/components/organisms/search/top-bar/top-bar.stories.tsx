import { Meta, Story } from '@storybook/react'

import { withExampleInterestParams } from '@acter/lib/storybook-helpers/with-example-interest-params'

import { SearchTopBar } from './index'

export default {
  title: 'Organisms/Search/Top Bar',
  component: SearchTopBar,
  args: {},
  parameters: {
    ...withExampleInterestParams,
    backgrounds: {
      default: 'background',
    },
  },
} as Meta

const Template: Story = (args) => <SearchTopBar {...args} />

export const Acters = Template.bind({})
Acters.args = {}

export const Activities = Template.bind({})
Activities.parameters = {
  nextRouter: {
    pathname: 'search/activities',
  },
}
