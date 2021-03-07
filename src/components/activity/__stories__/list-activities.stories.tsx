import React, { FC } from 'react'
import { Meta } from '@storybook/react'
import { ActivitiesList } from 'src/components/activity/list'
import { ExampleActer, ExampleActivity, ExampleUser } from 'src/__fixtures__'

export default {
  title: 'landingpage/ActivitiesList',
  component: ActivitiesList,
} as Meta

export const List: FC = () => (
  <ActivitiesList
    acter={ExampleActer}
    user={ExampleUser}
    activities={[ExampleActivity]}
  />
)
