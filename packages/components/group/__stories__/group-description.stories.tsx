import { Meta, Story } from '@storybook/react'

import { DescriptionSection } from '@acter/components/group/sections/description'
import { ExampleActer } from '@acter/schema/fixtures'

export default {
  title: 'Organisms/Group/sections',
  component: DescriptionSection,
  parameters: {
    urql: () => ({
      data: {
        findFirstActer: ExampleActer,
      },
    }),
  },
} as Meta

export const Description: Story = () => <DescriptionSection />
