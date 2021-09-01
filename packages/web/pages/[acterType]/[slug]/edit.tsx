import React from 'react'
import { NextPage } from 'next'

import { Layout } from '@acter/components/layout'
import { Head } from '@acter/components/layout/head'
import { ActerForm } from '@acter/components/acter/form'
import { ActivityForm } from '@acter/components/activity/form'

import {
  composeProps,
  ComposedGetServerSideProps,
} from '@acter/lib/compose-props'

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
} from '@acter/schema'

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
