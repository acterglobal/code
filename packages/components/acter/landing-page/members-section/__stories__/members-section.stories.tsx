import { Meta, Story } from '@storybook/react'

import { MembersSection } from '@acter/components/acter/landing-page/members-section'
import { withExampleActerParams } from '@acter/lib/storybook-helpers'

export default {
  title: 'Organisms/Acter/MemberSection',
  component: MembersSection,
  args: {
    people: [],
    organisations: [],
  },
  parameters: withExampleActerParams(),
} as Meta

export const MemberSection: Story = (args) => <MembersSection {...args} />
