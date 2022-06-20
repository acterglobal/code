import { Meta, Story } from '@storybook/react'

import { FilterButton } from './filter-button'

export default {
  title: 'Atoms/Search/Button/FilterButton',
  component: FilterButton,
} as Meta

const Template: Story = () => <FilterButton />

export const Button = Template.bind({})
