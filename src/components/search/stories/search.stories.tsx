import { Meta, Story } from '@storybook/react'
import { Search as SearchComponent } from 'src/components/search'

export default {
  title: 'Search/Activities',
  component: SearchComponent,
} as Meta

export const Activities: Story = () => <SearchComponent />
