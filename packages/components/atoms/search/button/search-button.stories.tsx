import { Meta, Story } from '@storybook/react'

import { SearchButton, SearchButtonProps } from './index'

export default {
  title: 'Atoms/Search/Button',
  component: SearchButton,
  args: {},
} as Meta

const Template: Story<SearchButtonProps> = (args) => <SearchButton {...args} />

export const Default = Template.bind({})
Default.args = {}
