import { Meta, Story } from '@storybook/react'
import { Search as SearchComponent } from 'src/components/search'
import { DisplayResultsProps } from 'src/components/search/display-results'
import { ExampleActivity } from 'src/__fixtures__/activity/example-activity'
import { ACTIVITY } from 'src/constants'
export default {
  title: 'Search/Activities',
  component: SearchComponent,
  args: {
    dataType: '',
    data: [],
  },
} as Meta

const exampleActivities = [...Array(5).keys()].map(() => ExampleActivity.Acter)

const Template: Story<DisplayResultsProps> = (args) => (
  <SearchComponent {...args} />
)

export const Activities = Template.bind({})
Activities.args = {
  dataType: ACTIVITY,
  data: exampleActivities,
}
