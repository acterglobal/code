import { Meta, Story } from '@storybook/react'

import { ExampleActerLocationList } from '@acter/schema/fixtures'

import { SearchResultsMap, SearchResultsMapProps } from './search-results-map'

export default {
  title: 'Organisms/Search/ResultsMap',
  component: SearchResultsMap,
  args: {
    acters: ExampleActerLocationList,
  },
} as Meta<SearchResultsMapProps>

const Template: Story<SearchResultsMapProps> = (args) => (
  <SearchResultsMap {...args} />
)

export const ResultsMap = Template.bind({})
