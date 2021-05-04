import { Meta, Story } from '@storybook/react'
import { Search as SearchComponent, SearchProps } from 'src/components/search'
import {
  ExampleActivityActer,
  ExampleActivity,
  ExampleActer,
} from 'src/__fixtures__'
import { ACTIVITIES, ACTERS } from 'src/constants'

export default {
  title: 'Search/SearchPage',
  component: SearchComponent,
  args: {
    dataType: '',
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
  dataType: ACTIVITIES,
  acters: activities,
}

export const Acters = Template.bind({})
Acters.args = {
  dataType: ACTERS,
  acters: acters,
}
