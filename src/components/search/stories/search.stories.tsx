import { Meta, Story } from '@storybook/react'
import { Search as SearchComponent, SearchProps } from 'src/components/search'
import {
  ExampleActivityActer,
  ExampleActivity,
  ExampleActer,
} from 'src/__fixtures__'
import { SearchType } from '@acter/lib/constants'

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

const activities = [...Array(8).keys()].map(() => acter)

const acters = [...Array(4).keys()].map(() => ExampleActer)

const Template: Story<SearchProps> = (args) => <SearchComponent {...args} />

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
