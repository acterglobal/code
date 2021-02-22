import { Story, Meta } from '@storybook/react'
import { Interest, InterestProps } from 'src/components/interests/interest'
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

export const EconomyTypeDisabled = Template.bind({})
EconomyTypeDisabled.args = { ...Economy, selected: false, disabled: true }

export const EconomyType = Template.bind({})
EconomyType.args = { ...Economy, selected: false }

export const EconomyTypeSelected = Template.bind({})
EconomyTypeSelected.args = { ...Economy, selected: true }

export const EnvironmentType = Template.bind({})
EnvironmentType.args = { ...Environment, selected: false }

export const EnvironmentTypeSelected = Template.bind({})
EnvironmentTypeSelected.args = { ...Environment, selected: true }

export const SocialType = Template.bind({})
SocialType.args = { ...Social, selected: false }

export const SocialTypeSelected = Template.bind({})
SocialTypeSelected.args = { ...Social, selected: true }

export const ApproachType = Template.bind({})
ApproachType.args = { ...Approach, selected: false }

export const ApproachTypeSelected = Template.bind({})
ApproachTypeSelected.args = { ...Approach, selected: true }

export const TagType = Template.bind({})
TagType.args = { ...Tag, selected: false }

export const TagTypeSelected = Template.bind({})
TagTypeSelected.args = { ...Tag, selected: true }
