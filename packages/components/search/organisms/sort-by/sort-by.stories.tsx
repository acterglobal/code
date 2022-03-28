import { Meta, Story } from '@storybook/react'

import { SearchSortBy, SortByProps } from './search-sort-by'

export default {
  title: 'Organisms/Search/SortBy',
  component: SearchSortBy,
  args: {},
} as Meta

const Template: Story<SortByProps> = (args) => <SearchSortBy {...args} />

export const SortBy = Template.bind({})
