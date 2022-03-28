import { Meta, Story } from '@storybook/react'

import { SearchBar, SearchBarProps } from './search-bar'

export default {
  title: 'Organisms/Search/Bar',
  component: SearchBar,
  args: {},
} as Meta

const Template: Story<SearchBarProps> = (args) => <SearchBar {...args} />

export const Bar = Template.bind({})
