import React from 'react'
import { NextPage } from 'next'
import { useRouter, NextRouter } from 'next/router'

import { acterAsUrl } from 'src/lib/acter/acter-as-url'
import { useNotificationMutation } from 'src/lib/apollo/use-notification-mutation'

import { Layout } from 'src/components/layout'
import { ActerForm } from 'src/components/acter/form'
import { ActivityForm } from 'src/components/activity/form'
import { Head } from 'src/components/layout/head'

import {
  getUserProfile,
  getActerTypes,
  setActerType,
  getInterests,
  getActivityTypes,
} from 'src/props'
import { composeProps, ComposedGetServerSideProps } from 'lib/compose-props'

import { ActerType, ActivityType, InterestType, User } from '@schema'

import MUTATE_ACTER_CREATE from 'api/mutations/mutate-create-acter.graphql'
import UPDATE_ACTER from 'api/mutations/acter-update.graphql'
import CREATE_ACTIVITY from 'api/mutations/activity-create.graphql'
import { ACTIVITY } from 'src/constants'
import { getCreateFunction } from 'src/lib/acter/get-create-function'

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
  const [createActer] = useNotificationMutation(MUTATE_ACTER_CREATE)

  const [updateActer] = useNotificationMutation(UPDATE_ACTER, {
    getSuccessMessage: ({ updateActer }) => `Created ${updateActer.name}`,
    onCompleted: ({ updateActer }) => router.push(acterAsUrl(updateActer)),
  })

  const Form = acterType.name === ACTIVITY ? ActivityForm : ActerForm

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
