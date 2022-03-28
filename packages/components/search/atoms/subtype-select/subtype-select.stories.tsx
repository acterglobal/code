import { Meta, Story } from '@storybook/react'

import {
  SearchSubtypeSelect,
  SearchSubtypeSelectProps,
} from './search-subtype-select'

export default {
  title: 'Molecules/Search/Subtype Select',
  component: SearchSubtypeSelect,
  args: { subTypeName: 'Example' },
} as Meta<SearchSubtypeSelectProps>

const Template: Story<SearchSubtypeSelectProps> = (args) => (
  <SearchSubtypeSelect {...args} />
)

export const Unchecked = Template.bind({})

export const Checked = Template.bind({})
Checked.args = {
  checked: true,
}
