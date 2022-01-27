import { Meta, Story } from '@storybook/react'

import { SearchTopBar } from './index'

import { Interests } from '@acter/schema/fixtures'

export default {
  title: 'Organisms/Search/Top Bar',
  component: SearchTopBar,
  args: {},
  parameters: {
    backgrounds: {
      default: 'background',
    },
    urql: () => ({ data: { interestTypes: Interests.data.interestTypes } }),
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
