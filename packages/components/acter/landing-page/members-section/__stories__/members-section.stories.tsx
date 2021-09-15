import { Meta, Story } from '@storybook/react'

import {
  MembersSection,
  MembersSectionProps,
} from '@acter/components/acter/landing-page/members-section'

export default {
  title: 'landingpage/MemberSection',
  component: MembersSection,
  args: {
    people: [],
    organisations: [],
  },
} as Meta

export const MemberSection: Story<MembersSectionProps> = (args) => (
  <MembersSection {...args} />
)
