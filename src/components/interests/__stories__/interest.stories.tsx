import { Story, Meta } from '@storybook/react'

import Interest, { InterestProps } from 'src/components/interests/interest'

export default {
  title: 'interests/Interests',
  component: Interest,
} as Meta

const Economy = {
  interest: {
    id: '381c6a10-d18a-4473-95c4-4d7639474a99',
    name: 'Transportation',
  },
  type: 'Economy',
}
const Environment = {
  interest: {
    id: '69c94fa5-c62c-4ad9-af73-5dbdeca32201',
    name: 'Climate change',
  },
  type: 'Environment',
}
const Social = {
  interest: { id: '03cd6491-c100-4bd4-b543-8c585d8f6560', name: 'Refugees' },
  type: 'Social',
}
const Tag = {
  interest: { id: 'a998bcd8-e635-45f8-aafc-c56d4acf96a1', name: 'BalticSea' },
  type: 'Tags',
}
const Approach = {
  interest: { id: '92eadbee-873c-4c13-9d12-9aa0043ec55d', name: 'Workshops' },
  type: 'Approach',
}

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
