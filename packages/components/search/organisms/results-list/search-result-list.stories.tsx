import { Meta, Story } from '@storybook/react'

import { withExampleInterestParams } from '@acter/lib/storybook-helpers/with-example-interest-params'
import { ExampleActerLocationList } from '@acter/schema/fixtures'

import {
  SearchResultsList,
  SearchResultsListProps,
} from './search-results-list'

export default {
  title: 'Organisms/Search/ResultsList',
  component: SearchResultsList,
  args: {
    acters: ExampleActerLocationList,
  },
  parameters: withExampleInterestParams,
} as Meta<SearchResultsListProps>

const Template: Story<SearchResultsListProps> = (args) => (
  <SearchResultsList {...args} />
)

export const ResultsList = Template.bind({})
