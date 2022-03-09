import React from 'react'

import { Meta } from '@storybook/react'

import { InfoSection } from '@acter/components/acter/landing-page/info-section'
import { withExampleActerParams } from '@acter/lib/storybook-helpers/with-example-acter-params'

export default {
  title: 'Molecules/Acter/MetaSection',
  component: InfoSection,
  parameters: withExampleActerParams(),
} as Meta

export const MetaSection: React.FC = () => <InfoSection />
