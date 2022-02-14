import { Meta, Story } from '@storybook/react'

import { SubtypeSelect, SubtypeSelectProps } from './index'

export default {
  title: 'Molecules/Search/Subtype Select',
  component: SubtypeSelect,
  args: { subTypeName: 'Example' },
} as Meta<SubtypeSelectProps>

const Template: Story<SubtypeSelectProps> = (args) => (
  <SubtypeSelect {...args} />
)

export const Unchecked = Template.bind({})

export const Checked = Template.bind({})
Checked.args = {
  checked: true,
}
