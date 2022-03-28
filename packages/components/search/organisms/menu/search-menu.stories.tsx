import { Meta, Story } from '@storybook/react'

import { SearchMenu } from './search-menu'

export default {
  title: 'Organisms/Search/Menu',
  component: SearchMenu,
  args: {},
} as Meta

const Template: Story = (args) => <SearchMenu {...args} />

export const ActersSearch = Template.bind({})

export const ActivitiesSearch = Template.bind({})
ActivitiesSearch.parameters = {
  nextRouter: {
    pathname: 'search/activities',
  },
}
