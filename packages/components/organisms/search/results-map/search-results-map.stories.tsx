import { Meta, Story } from '@storybook/react'

import { SearchResultsMap, SearchResultsMapProps } from './index'

import { ExampleActerLocationList } from '@acter/schema/fixtures'

export default {
  title: 'Organisms/Search/Results/Map',
  component: SearchResultsMap,
  args: {
    acters: ExampleActerLocationList,
  },
} as Meta<SearchResultsMapProps>

const Template: Story<SearchResultsMapProps> = (args) => (
  <SearchResultsMap {...args} />
)

export const Default = Template.bind({})
