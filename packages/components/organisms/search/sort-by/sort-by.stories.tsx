import { Meta, Story } from '@storybook/react'

import { SortBy, SortByProps } from './index'

export default {
  title: 'Organisms/Search/Sort By',
  component: SortBy,
  args: {},
} as Meta

const Template: Story<SortByProps> = (args) => <SortBy {...args} />

export const Default = Template.bind({})
Default.args = {}
