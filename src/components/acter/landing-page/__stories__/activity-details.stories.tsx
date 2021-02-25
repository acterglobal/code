import React from 'react'
import { Meta } from '@storybook/react'
import { ActivityDetails as Activity } from 'src/components/acter/landing-page/activities/activity-details'

export default {
  title: 'landingpage/ActivityDetails',
  component: Activity,
} as Meta

// import { ExampleActer } from 'src/__fixtures__/acter/example-acter'

export const MetaSection: React.FC = () => <Activity />
