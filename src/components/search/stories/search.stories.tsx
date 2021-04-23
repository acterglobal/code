import { Meta, Story } from '@storybook/react'
import { Search as SearchComponent } from 'src/components/search'
import { DisplayResultsProps } from 'src/components/search/display-results'
import { ExampleActivityActer } from 'src/__fixtures__'
import { ACTIVITY } from 'src/constants'

export default {
  title: 'Search/Activities',
  component: SearchComponent,
  args: {
    dataType: '',
    acters: [],
  },
} as Meta

const activities = [...Array(5).keys()].map(() => ExampleActivityActer)

const Template: Story<DisplayResultsProps> = (args) => (
  <SearchComponent {...args} />
)

export const Activities = Template.bind({})
Activities.args = {
  dataType: ACTIVITY,
  acters: activities,
}
