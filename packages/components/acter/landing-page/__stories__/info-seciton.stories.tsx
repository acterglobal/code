import React from 'react'

import { Meta } from '@storybook/react'

import { InfoSection } from '@acter/components/acter/landing-page/info-section'

export default {
  title: 'Molecules/Acter/MetaSection',
  component: InfoSection,
} as Meta

export const MetaSection: React.FC = () => <InfoSection />
