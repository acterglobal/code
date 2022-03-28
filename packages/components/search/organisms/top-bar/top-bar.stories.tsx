import { Meta, Story } from '@storybook/react'

import { ResultDisplayType } from '@acter/lib/constants'
import { withExampleInterestParams } from '@acter/lib/storybook-helpers/with-example-interest-params'

import { SearchTopBar, SearchTopBarProps } from './search-top-bar'

export default {
  title: 'Organisms/Search/Top Bar',
  component: SearchTopBar,
  args: {
    resultDisplayType: ResultDisplayType.LIST,
    onResultDisplayTypeChange: () => null,
  },
  parameters: {
    ...withExampleInterestParams,
    backgrounds: {
      default: 'background',
    },
  },
} as Meta<SearchTopBarProps>

const Template: Story<SearchTopBarProps> = (args) => <SearchTopBar {...args} />

export const Acters = Template.bind({})
Acters.args = {}

export const Activities = Template.bind({})
Activities.parameters = {
  nextRouter: {
    pathname: 'search/activities',
  },
}
