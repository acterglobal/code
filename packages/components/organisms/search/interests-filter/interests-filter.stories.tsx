import { Meta, Story } from '@storybook/react'

import { InterestsFilter, InterestsFilterProps } from './index'

import { Interests } from '@acter/schema/fixtures'

export default {
  title: 'Organisms/Search/Interests Filter',
  component: InterestsFilter,
  args: {},
  parameters: {
    urql: () => ({ data: { interestTypes: Interests.data.interestTypes } }),
  },
} as Meta

const Template: Story<InterestsFilterProps> = (args) => (
  <InterestsFilter {...args} />
)

export const Default = Template.bind({})
Default.args = {}
