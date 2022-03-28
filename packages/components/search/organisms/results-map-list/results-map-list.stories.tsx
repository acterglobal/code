import { Meta, Story } from '@storybook/react'

import { ExampleActerLocationList } from '@acter/schema/fixtures'

import { SearchResultsMapList } from './search-results-map-list'

export default {
  title: 'Organisms/Search/Results/MapList',
  component: SearchResultsMapList,
  args: {},
  parameters: {
    urql: () => ({ data: { acters: ExampleActerLocationList } }),
  },
} as Meta

const Template: Story = (args) => <SearchResultsMapList {...args} />

export const MapList = Template.bind({})
