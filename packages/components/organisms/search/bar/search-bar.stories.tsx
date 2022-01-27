import { Meta, Story } from '@storybook/react'

import { SearchBar, SearchBarProps } from './index'

export default {
  title: 'Organisms/Search/Bar',
  component: SearchBar,
  args: {},
} as Meta

const Template: Story<SearchBarProps> = (args) => <SearchBar {...args} />

export const Default = Template.bind({})
Default.args = {}
