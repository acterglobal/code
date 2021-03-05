import React, { FC } from 'react'
import { Meta } from '@storybook/react'
import { ListActivities } from 'src/components/activities/list-activities'

export default {
  title: 'landingpage/ActivitiesList',
  component: ListActivities,
} as Meta

export const ActivitiesList: FC = () => <ListActivities />
