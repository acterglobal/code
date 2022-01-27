import { Meta, Story } from '@storybook/react'

import { Search as SearchComponent } from '@acter/components/pages/search'
import {
  ExampleActivityActer,
  ExampleActivity,
  ExampleActer,
} from '@acter/schema/fixtures'

export default {
  title: 'Pages/Search',
  component: SearchComponent,
  args: {
    searchType: '',
    acters: [],
    handleSearch: () => void 0,
  },
  parameters: {
    urql: () => ({ data: { acters: [] } }),
    backgrounds: {
      default: 'background',
    },
  },
} as Meta

const acter = { ...ExampleActivityActer, Activity: ExampleActivity }

const activities = [...Array(8)].map(() => acter)

const acters = [...Array(4)].map(() => ExampleActer)

const Template: Story = (args) => <SearchComponent {...args} />

export const Activities = Template.bind({})
Activities.parameters = {
  nextRouter: {
    pathname: 'search/activities',
  },
  urql: () => ({ data: { searchActivities: activities } }),
}

export const Acters = Template.bind({})
Acters.parameters = {
  urql: () => ({ data: { acters } }),
}

export const ZeroActers = Template.bind({})
