import { Meta, Story } from '@storybook/react'

import { Search as SearchComponent } from '@acter/components/pages/search'
import { withExampleInterestParams } from '@acter/lib/storybook-helpers/with-example-interest-params'
import {
  ExampleActivityActer,
  ExampleActivity,
  Interests,
  ExampleActerLocationList,
} from '@acter/schema/fixtures'

const interestTypes = Interests.data.interestTypes

export default {
  title: 'Pages/Search/List',
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

const acters = ExampleActerLocationList

const Template: Story = (args) => <SearchComponent {...args} />

export const Activities = Template.bind({})
Activities.parameters = {
  nextRouter: {
    pathname: 'search/activities',
  },
  urql: () => ({
    data: {
      searchActivities: activities,
      ...withExampleInterestParams.urql().data,
    },
  }),
}

export const Acters = Template.bind({})
Acters.parameters = {
  urql: () => ({ data: { acters, interestTypes } }),
}

export const ZeroActers = Template.bind({})
