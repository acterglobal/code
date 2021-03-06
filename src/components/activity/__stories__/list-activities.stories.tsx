import React, { FC } from 'react'
import { Meta } from '@storybook/react'
import { ActivitiesList } from 'src/components/activity/list'

export default {
  title: 'landingpage/ActivitiesList',
  component: ActivitiesList,
} as Meta

export const ActivitiesList: FC = () => <ActivitiesList />
