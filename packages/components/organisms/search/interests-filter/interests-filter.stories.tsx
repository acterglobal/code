import { Meta, Story } from '@storybook/react'

import { withExampleInterestParams } from '@acter/lib/storybook-helpers/with-example-interest-params'

import { InterestsFilter, InterestsFilterProps } from './index'

export default {
  title: 'Organisms/Search/Interests Filter',
  component: InterestsFilter,
  args: {},
  parameters: withExampleInterestParams,
} as Meta

const Template: Story<InterestsFilterProps> = (args) => (
  <InterestsFilter {...args} />
)

export const Default = Template.bind({})
Default.args = {}
