import React, { FC } from 'react'
import { Meta } from '@storybook/react'
import {
  ActivityDetails as Activity,
  ActivityDetailsProps,
} from 'src/components/acter/landing-page/activities/activity-details'
import { ExampleActivity } from 'src/__fixtures__/activity/example-activity'

export default {
  title: 'landingpage/ActivityDetails',
  component: Activity,
  args: {
    activity: ExampleActivity,
  },
} as Meta

export const ActivityDetails: FC<ActivityDetailsProps> = (args) => (
  <Activity {...args} />
)
