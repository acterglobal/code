import { Story, Meta } from '@storybook/react'
import Interest, { InterestProps } from 'src/components/interests/interest'
import {
  Economy,
  Social,
  Environment,
  Tag,
  Approach,
} from '../../../__fixtures__/interest/example-interests'

export default {
  title: 'interests/Interests',
  component: Interest,
} as Meta

const Template: Story<InterestProps> = (args) => <Interest {...args} />

export const EconomyType = Template.bind({})
EconomyType.args = Economy

export const EnvironmentType = Template.bind({})
EnvironmentType.args = Environment

export const SocialType = Template.bind({})
SocialType.args = Social

export const TagType = Template.bind({})
TagType.args = Tag

export const ApproachType = Template.bind({})
ApproachType.args = Approach
