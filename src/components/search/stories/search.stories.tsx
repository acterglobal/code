import { Meta, Story } from '@storybook/react'
import { Search as SearchComponent } from 'src/components/search'
import { DisplayResultsProps } from 'src/components/search/display-results'
import { ExampleActivity } from 'src/__fixtures__/activity/example-activity'

export default {
  title: 'Search/Activities',
  component: SearchComponent,
  args: {
    dataType: '',
    data: [],
  },
} as Meta

const ExampleActivities = [
  ExampleActivity,
  ExampleActivity,
  ExampleActivity,
  ExampleActivity,
  ExampleActivity,
]

const Template: Story<DisplayResultsProps> = (args) => (
  <SearchComponent {...args} />
)

export const Activities = Template.bind({})
Activities.args = {
  dataType: 'activity',
  data: ExampleActivities,
}
