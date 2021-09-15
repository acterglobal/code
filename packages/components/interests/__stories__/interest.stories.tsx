import { Story, Meta } from '@storybook/react'

import { Interest, InterestProps } from '@acter/components/interests/interest'
import { InterestTypes } from '@acter/lib/constants'
import { ExampleInterest } from '@acter/schema/fixtures'

const { APPROACH, TAGS, ECONOMY, ENVIRONMENT, SOCIAL } = InterestTypes

export default {
  title: 'interests/Interest',
  component: Interest,
} as Meta

const Template: Story<InterestProps> = (args) => <Interest {...args} />

export const EconomyTypeDisabled = Template.bind({})
EconomyTypeDisabled.args = {
  interest: ExampleInterest,
  type: ECONOMY,
  selected: false,
  disabled: true,
}

export const EconomyType = Template.bind({})
EconomyType.args = {
  interest: ExampleInterest,
  type: ECONOMY,
  selected: false,
}

export const EconomyTypeSelected = Template.bind({})
EconomyTypeSelected.args = {
  interest: ExampleInterest,
  type: ECONOMY,
  selected: true,
}

export const EnvironmentType = Template.bind({})
EnvironmentType.args = {
  interest: ExampleInterest,
  type: ENVIRONMENT,
  selected: false,
}

export const EnvironmentTypeSelected = Template.bind({})
EnvironmentTypeSelected.args = {
  interest: ExampleInterest,
  type: ENVIRONMENT,
  selected: true,
}

export const SocialType = Template.bind({})
SocialType.args = { interest: ExampleInterest, type: 'social', selected: false }

export const SocialTypeSelected = Template.bind({})
SocialTypeSelected.args = {
  interest: ExampleInterest,
  type: SOCIAL,
  selected: true,
}

export const ApproachType = Template.bind({})
ApproachType.args = {
  interest: ExampleInterest,
  type: APPROACH,
  selected: false,
}

export const ApproachTypeSelected = Template.bind({})
ApproachTypeSelected.args = {
  interest: ExampleInterest,
  type: APPROACH,
  selected: true,
}

export const TagType = Template.bind({})
TagType.args = { interest: ExampleInterest, type: TAGS, selected: false }

export const TagTypeSelected = Template.bind({})
TagTypeSelected.args = {
  interest: ExampleInterest,
  type: TAGS,
  selected: true,
}
