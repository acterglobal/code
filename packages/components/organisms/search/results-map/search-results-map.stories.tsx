import { Meta, Story } from '@storybook/react'

import { SearchResultsMap, SearchResultsMapProps } from './index'

import { ExampleActer, ExampleActerLocationList } from '@acter/schema/fixtures'

export default {
  title: 'Organisms/Search/Results Map',
  component: SearchResultsMap,
  args: {
    acters: [
      {
        ...ExampleActer,
        locationLat: 56.1478516,
        locationLng: 10.1791979,
      },
      {
        ...ExampleActer,
        locationLat: 56.154445,
        locationLng: 10.2140252,
      },
      {
        ...ExampleActer,
        locationLat: 56.2026077,
        locationLng: 10.1305802,
      },
      {
        ...ExampleActer,
        locationLat: 56.1714575,
        locationLng: 10.1374956,
      },
      {
        ...ExampleActer,
        locationLat: 56.1040756,
        locationLng: 10.1642967,
      },
    ],
  },
} as Meta<SearchResultsMapProps>

const Template: Story<SearchResultsMapProps> = (args) => (
  <SearchResultsMap {...args} />
)

export const Default = Template.bind({})
