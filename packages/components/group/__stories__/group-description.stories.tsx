import { Meta, Story } from '@storybook/react'

import { DescriptionSection } from '@acter/components/group/sections/description'
import { ExampleActer, GroupActerType } from '@acter/schema/fixtures'

export default {
  title: 'Atoms/Group/Sections',
  component: DescriptionSection,
  args: {
    acter: {
      ...ExampleActer,
      acterType: GroupActerType,
    },
  },
} as Meta

export const Description: Story = (args) => <DescriptionSection {...args} />
