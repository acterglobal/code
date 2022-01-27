import { Meta, Story } from '@storybook/react'

import { SearchInput, SearchInputProps } from './index'

export default {
  title: 'Atoms/Search/Input',
  component: SearchInput,
  args: {},
} as Meta

const Template: Story<SearchInputProps> = (args) => <SearchInput {...args} />

export const story = Template.bind({})
story.args = {}
