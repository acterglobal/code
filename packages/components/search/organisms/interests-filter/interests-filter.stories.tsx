import { Meta, Story } from '@storybook/react'

import { withExampleInterestParams } from '@acter/lib/storybook-helpers/with-example-interest-params'

import {
  SearchInterestsFilter,
  InterestsFilterProps,
} from './search-interests-filter'

export default {
  title: 'Organisms/Search/InterestsFilter',
  component: SearchInterestsFilter,
  args: {},
  parameters: withExampleInterestParams,
} as Meta

const Template: Story<InterestsFilterProps> = (args) => (
  <SearchInterestsFilter {...args} />
)

export const InterestsFilter = Template.bind({})
