import { Meta, Story } from '@storybook/react'

import { DescriptionSection } from '@acter/components/group/sections/description'
import { withExampleActerParams } from '@acter/lib/storybook-helpers'

export default {
  title: 'Organisms/Group/sections',
  component: DescriptionSection,
  parameters: withExampleActerParams(),
} as Meta

export const Description: Story = () => <DescriptionSection />
