import React from 'react'
import { Meta } from '@storybook/react'
import InfoSection from '../info-section'

export default {
  title: 'landingpage/MetaSection',
  component: InfoSection,
} as Meta

import { ExampleActer } from 'src/__fixtures__/acter/example-acter'

export const MetaSection: React.FC = () => <InfoSection acter={ExampleActer} />
