import { Meta, Story } from '@storybook/react'

import { SearchButton, SearchButtonProps } from './search-button'

export default {
  title: 'Atoms/Search/Button',
  component: SearchButton,
  args: {},
} as Meta

const Template: Story<SearchButtonProps> = (args) => <SearchButton {...args} />

export const Button = Template.bind({})
