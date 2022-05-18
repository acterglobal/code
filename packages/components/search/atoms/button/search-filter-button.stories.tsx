import { Meta, Story } from '@storybook/react'

import { SearchFilterButton } from './search-filter-button'

export default {
  title: 'Atoms/Search/Button/SearchFilterButton',
  component: SearchFilterButton,
} as Meta

const Template: Story = () => <SearchFilterButton />

export const Button = Template.bind({})
