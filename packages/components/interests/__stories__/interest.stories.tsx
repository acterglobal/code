import { Story, Meta } from '@storybook/react'
import { Interest, InterestProps } from '@acter/components/interests/interest'
import { ExampleInterest } from 'src/__fixtures__'

export default {
  title: 'interests/Interest',
  component: Interest,
} as Meta

const Template: Story<InterestProps> = (args) => <Interest {...args} />

export const EconomyTypeDisabled = Template.bind({})
EconomyTypeDisabled.args = {
  interest: ExampleInterest,
  type: 'Economy',
  selected: false,
  disabled: true,
}

export const EconomyType = Template.bind({})
EconomyType.args = {
  interest: ExampleInterest,
  type: 'Economy',
  selected: false,
}

export const EconomyTypeSelected = Template.bind({})
EconomyTypeSelected.args = {
  interest: ExampleInterest,
  type: 'Economy',
  selected: true,
}

export const EnvironmentType = Template.bind({})
EnvironmentType.args = {
  interest: ExampleInterest,
  type: 'Environment',
  selected: false,
}

export const EnvironmentTypeSelected = Template.bind({})
EnvironmentTypeSelected.args = {
  interest: ExampleInterest,
  type: 'Environment',
  selected: true,
}

export const SocialType = Template.bind({})
SocialType.args = { interest: ExampleInterest, type: 'social', selected: false }

export const SocialTypeSelected = Template.bind({})
SocialTypeSelected.args = {
  interest: ExampleInterest,
  type: 'Social',
  selected: true,
}

export const ApproachType = Template.bind({})
ApproachType.args = {
  interest: ExampleInterest,
  type: 'Approach',
  selected: false,
}

export const ApproachTypeSelected = Template.bind({})
ApproachTypeSelected.args = {
  interest: ExampleInterest,
  type: 'Approach',
  selected: true,
}

export const TagType = Template.bind({})
TagType.args = { interest: ExampleInterest, type: 'Tags', selected: false }

export const TagTypeSelected = Template.bind({})
TagTypeSelected.args = {
  interest: ExampleInterest,
  type: 'Tags',
  selected: true,
}
