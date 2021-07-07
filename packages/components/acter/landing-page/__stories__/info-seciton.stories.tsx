import React from 'react'
import { Meta } from '@storybook/react'
import { InfoSection } from '@acter/components/acter/landing-page/info-section'
import { Interests } from 'src/__fixtures__'

export default {
  title: 'landingpage/MetaSection',
  component: InfoSection,
} as Meta

import { ExampleActer } from 'src/__fixtures__'
export const MetaSection: React.FC = () => (
  <InfoSection
    acter={ExampleActer}
    interestTypes={Interests.data.interestTypes}
  />
)
