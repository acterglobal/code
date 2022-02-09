import { Meta, Story } from '@storybook/react'

import { Search as SearchComponent } from '@acter/components/pages/search'
import {
  ExampleActivityActer,
  ExampleActivity,
  ExampleActer,
  Interests,
} from '@acter/schema/fixtures'

const interestTypes = Interests.data.interestTypes

export default {
  title: 'Pages/Search',
  component: SearchComponent,
  args: {
    searchType: '',
    acters: [],
    handleSearch: () => void 0,
  },
  parameters: {
    urql: () => ({
      data: { acters: [], interestTypes },
    }),
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
  urql: () => ({ data: { searchActivities: activities, interestTypes } }),
}

export const Acters = Template.bind({})
Acters.parameters = {
  urql: () => ({ data: { acters, interestTypes } }),
}

export const ZeroActers = Template.bind({})
