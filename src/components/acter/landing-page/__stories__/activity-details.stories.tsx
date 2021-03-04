import React, { FC } from 'react'
import { Meta } from '@storybook/react'
import {
  ActivityDetails as Activity,
  ActivityDetailsProps,
} from 'src/components/acter/landing-page/activities/activity-details'
import { ExampleActivity, ExampleActer } from 'src/__fixtures__'

export default {
  title: 'landingpage/ActivityDetails',
  component: Activity,
  args: {
    activity: ExampleActivity,
    acter: ExampleActer,
  },
} as Meta

export const ActivityDetails: FC<ActivityDetailsProps> = (args) => (
  <Activity {...args} />
)
