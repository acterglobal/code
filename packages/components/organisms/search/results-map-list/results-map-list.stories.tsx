import { Meta, Story } from '@storybook/react'

import { ResultsMapList } from './index'

import { ExampleActerLocationList } from '@acter/schema/fixtures'

export default {
  title: 'Organisms/Search/Results/Map List',
  component: ResultsMapList,
  args: {},
  parameters: {
    urql: () => ({ data: { acters: ExampleActerLocationList } }),
  },
} as Meta

const Template: Story = (args) => <ResultsMapList {...args} />

export const Default = Template.bind({})
