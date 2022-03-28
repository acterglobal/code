import { Meta, Story } from '@storybook/react'

import { SearchPage, SearchPageProps } from '@acter/components/search/pages'
import { ResultDisplayType } from '@acter/lib/constants'
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
  component: SearchPage,
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
} as Meta<SearchPageProps>

const acter = { ...ExampleActivityActer, Activity: ExampleActivity }

const activities = [...Array(8)].map(() => acter)

const acters = ExampleActerLocationList

const Template: Story<SearchPageProps> = (args) => <SearchPage {...args} />

export const Activities = Template.bind({})
Activities.parameters = {
  nextRouter: {
    pathname: 'search/activities',
  },
  urql: () => ({
    data: {
      searchActers: activities,
      ...withExampleInterestParams.urql().data,
    },
  }),
}

export const Acters = Template.bind({})
Acters.parameters = {
  urql: () => ({ data: { searchActers: acters, interestTypes } }),
}

export const ActersMap = Template.bind({})
ActersMap.args = {
  initialResultDisplayType: ResultDisplayType.MAP,
}
ActersMap.parameters = {
  urql: () => ({ data: { searchActers: acters, interestTypes } }),
}

export const ZeroActers = Template.bind({})
