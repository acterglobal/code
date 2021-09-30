import { Meta, Story } from '@storybook/react'

import { Search as SearchComponent } from '@acter/components/search'
import { SearchType } from '@acter/lib/constants'
import { useActerSearchDi, useSearchTypeDi } from '@acter/lib/di'
import {
  ExampleActivityActer,
  ExampleActivity,
  ExampleActer,
} from '@acter/schema/fixtures'

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
Activities.parameters = {
  di: {
    useActerSearch: useActerSearchDi(activities),
    useSearchType: useSearchTypeDi(SearchType.ACTIVITIES),
  },
}

export const Acters = Template.bind({})
Acters.parameters = {
  di: {
    useActerSearch: useActerSearchDi(acters),
  },
}

export const ZeroActers = Template.bind({})
