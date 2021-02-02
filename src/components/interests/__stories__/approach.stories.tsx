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

export const Default: Story = (args: ApproachProps) => <Approach {...args} />
