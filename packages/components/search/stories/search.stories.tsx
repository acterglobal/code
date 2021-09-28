import { Meta, Story } from '@storybook/react'

import { Search as SearchComponent } from '@acter/components/search'
import { SearchType } from '@acter/lib/constants'
import {
  ExampleActivityActer,
  ExampleActivity,
  ExampleActer,
} from '@acter/schema/fixtures'

const { ACTIVITIES, ACTERS } = SearchType

export default {
  title: 'Search/SearchPage',
  component: SearchComponent,
  args: {
    searchType: '',
    acters: [],
    handleSearch: (text) => console.log(text),
  },
} as Meta

const acter = { ...ExampleActivityActer, Activity: ExampleActivity }

const activities = [...Array(8)].map(() => acter)

const acters = [...Array(4)].map(() => ExampleActer)

const Template: Story = (args) => <SearchComponent {...args} />

export const Activities = Template.bind({})
Activities.args = {
  searchType: ACTIVITIES,
  acters: activities,
}

export const Acters = Template.bind({})
Acters.args = {
  searchType: ACTERS,
  acters: acters,
}
export const ZeroActers = Template.bind({})
Acters.args = {
  searchType: ACTERS,
  acters: [],
}
