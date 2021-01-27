import { Story, Meta } from '@storybook/react'

import { Approach, ApproachProps } from 'src/components/interests/approach'

import { ExampleApproach } from 'src/__fixtures__'

export default {
  title: 'interests/Approach',
  component: Approach,
  args: {
    interest: ExampleApproach,
  },
} as Meta

const Template: Story<ApproachProps> = (args: ApproachProps) => (
  <Approach {...args} />
)

export const Default = Template.bind({})
Default.args = {
  selected: false
} as ApproachProps