import React from 'react'
import { NextPage } from 'next'
import { useRouter, NextRouter } from 'next/router'

import { acterAsUrl } from '@acter/lib/acter/acter-as-url'
import { useNotificationMutation } from '@acter/lib/apollo/use-notification-mutation'

import { Layout } from '@acter/components/layout'
import { ActerForm } from '@acter/components/acter/form'
import { ActivityForm } from '@acter/components/activity/form'
import { Head } from '@acter/components/layout/head'

import {
  getUserProfile,
  getActerTypes,
  setActerType,
  getInterests,
  getActivityTypes,
} from 'src/props'
import {
  composeProps,
  ComposedGetServerSideProps,
} from '@acter/lib/compose-props'

import { ActerType, ActivityType, InterestType, User } from '@schema'

import ACTER_CREATE from 'api/mutations/acter-create.graphql'
import UPDATE_ACTER from 'api/mutations/acter-update.graphql'
import CREATE_ACTIVITY from 'api/mutations/activity-create.graphql'
import { ActerTypes } from '@acter/lib/constants'
import { getCreateFunction } from '@acter/lib/acter/get-create-function'

interface NewActerPageProps {
  /**
   * The ActerType we are creating
   */
  acterType: ActerType
  /**
   * List of interests grouped by Interest Type
   */
  interestTypes: InterestType[]
  /**
   * The logged in user
   */
  user?: User
  /**
   *  all activity types
   */
  activityTypes: ActivityType[]
}

export const NewActerPage: NextPage<NewActerPageProps> = ({
  acterType,
  interestTypes,
  activityTypes,
  user,
}) => {
  const router: NextRouter = useRouter()
  const [createActivity] = useNotificationMutation(CREATE_ACTIVITY)
  const [createActer] = useNotificationMutation(ACTER_CREATE)

  const [updateActer] = useNotificationMutation(UPDATE_ACTER, {
    getSuccessMessage: ({ updateActer }) => `Created ${updateActer.name}`,
    onCompleted: ({ updateActer }) => router.push(acterAsUrl(updateActer)),
  })

  const Form = acterType.name === ActerTypes.ACTIVITY ? ActivityForm : ActerForm

  return (
    <Layout user={user}>
      <Head title={acterType.name} />
      <main>
        <Form
          acterType={acterType}
          user={user}
          interestTypes={interestTypes}
          activityTypes={activityTypes}
          onSubmit={getCreateFunction({
            acterType,
            createActivity,
            createActer,
            updateActer,
          })}
        />
      </main>
    </Layout>
  )
}

export const getServerSideProps: ComposedGetServerSideProps = (ctx) =>
  composeProps(
    ctx,
    getUserProfile(true),
    getActerTypes,
    setActerType,
    getInterests,
    getActivityTypes
  )

export default NewActerPage
