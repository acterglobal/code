import React from 'react'
import { Meta } from '@storybook/react'
import { ActerWithSlugAndType } from '@acter/lib/acter/acter-as-url'
import { InfoSection } from '@acter/components/acter/landing-page/info-section'
import { Interests } from '@acter/schema/fixtures'
import { ExampleActer } from '@acter/schema/fixtures'

export default {
  title: 'landingpage/MetaSection',
  component: InfoSection,
} as Meta

export const MetaSection: React.FC = () => (
  <InfoSection
    acter={ExampleActer as ActerWithSlugAndType}
    interestTypes={Interests.data.interestTypes}
  />
)
