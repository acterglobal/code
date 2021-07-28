import React from 'react'
import { NextPage } from 'next'
import { useRouter, NextRouter } from 'next/router'
import { acterAsUrl } from '@acter/lib/acter/acter-as-url'
import { getUpdateFunction } from '@acter/lib/acter/get-update-function'

import { Layout } from '@acter/components/layout'
import { Head } from '@acter/components/layout/head'
import { ActerForm } from '@acter/components/acter/form'
import { ActivityForm } from '@acter/components/activity/form'

import {
  composeProps,
  ComposedGetServerSideProps,
} from '@acter/lib/compose-props'
import { useNotificationMutation } from '@acter/lib/apollo/use-notification-mutation'

import {
  getUserProfile,
  getActerTypes,
  setActerType,
  getInterests,
  getActer,
  getActivityTypes,
} from 'props'

import {
  Acter,
  ActerType,
  ActivityType,
  InterestType,
  User,
} from '@acter/schema/types'

import UPDATE_ACTER from '@acter/schema/mutations/acter-update.graphql'
import UPDATE_ACTIVITY from '@acter/schema/mutations/activity-update.graphql'
import { ActerTypes } from '@acter/lib/constants'

interface NewActerPageProps {
  /**
   * This Acter
   */
  acter: Acter
  /**
   * The ActerType we are creating
   */
  acterType: ActerType
  /**
   * List of interests grouped by Interest Type
   */
  interestTypes: InterestType[]
  /**
   * All activity types
   */
  activityTypes: ActivityType[]
  /**
   * The logged in user
   */
  user?: User
}
export const NewActerPage: NextPage<NewActerPageProps> = ({
  acter,
  acterType,
  interestTypes,
  activityTypes,
  user,
}) => {
  const router: NextRouter = useRouter()
  const [updateActer, { loading: updateActerLoading }] =
    useNotificationMutation(UPDATE_ACTER, {
      getSuccessMessage: (data) => `${data.updateActer.name} updated`,
      onCompleted: () => router.push(acterAsUrl({ acter })),
    })
  const [updateActivity, { loading: updateActivityLoading }] =
    useNotificationMutation(UPDATE_ACTIVITY, {
      getSuccessMessage: () => 'Activity updated',
      onCompleted: () => router.push(acterAsUrl({ acter })),
    })

  const Form =
    acter.ActerType.name === ActerTypes.ACTIVITY ? ActivityForm : ActerForm

  return (
    <Layout user={user}>
      <Head title={`${acter.name} - Acter`} />
      <main>
        <Form
          acter={acter}
          acterType={acterType}
          user={user}
          interestTypes={interestTypes}
          activityTypes={activityTypes}
          onSubmit={getUpdateFunction({ acter, updateActivity, updateActer })}
          loading={updateActerLoading || updateActivityLoading}
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
    getActer,
    getActivityTypes
  )

export default NewActerPage
