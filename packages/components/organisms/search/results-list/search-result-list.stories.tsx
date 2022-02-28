import { Meta, Story } from '@storybook/react'

import { SearchResultsList, SearchResultsListProps } from './index'

import { ExampleActerLocationList } from '@acter/schema/fixtures'

export default {
  title: 'Organisms/Search/Results/List',
  component: SearchResultsList,
  args: {
    acters: ExampleActerLocationList,
  },
} as Meta<SearchResultsListProps>

const Template: Story<SearchResultsListProps> = (args) => (
  <SearchResultsList {...args} />
)

export const Acters = Template.bind({})
