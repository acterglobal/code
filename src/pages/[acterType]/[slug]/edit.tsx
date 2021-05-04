import React from 'react'
import { NextPage } from 'next'
import { useRouter, NextRouter } from 'next/router'
import { useMutation } from '@apollo/client'
import { useSnackbar } from 'notistack'
import { acterAsUrl } from 'src/lib/acter/acter-as-url'
import { getUpdateFunction } from 'src/lib/acter/get-update-function'

import { Layout } from 'src/components/layout'
import { Head } from 'src/components/layout/head'
import { ActerForm } from 'src/components/acter/form'
import { ActivityForm } from 'src/components/activity/form'

import { composeProps, ComposedGetServerSideProps } from 'lib/compose-props'
import {
  getUserProfile,
  getActerTypes,
  setActerType,
  getInterests,
  getActer,
  getActivityTypes,
} from 'src/props'

import { Acter, ActerType, ActivityType, InterestType, User } from '@schema'

import UPDATE_ACTER from 'api/mutations/acter-update.graphql'
import UPDATE_ACTIVITY from 'api/mutations/activity-update.graphql'
import { ACTIVITY } from 'src/constants'

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
  const { enqueueSnackbar } = useSnackbar()
  const [updateActer, { loading: updateActerLoading }] = useMutation(
    UPDATE_ACTER,
    {
      onError: (err) => {
        enqueueSnackbar(err.message, { variant: 'error' })
      },
      onCompleted: (data) => {
        enqueueSnackbar(`${data.updateActer.name} updated`, {
          variant: 'success',
        })
        router.push(acterAsUrl(acter))
      },
    }
  )
  const [updateActivity, { loading: updateActivityLoading }] = useMutation(
    UPDATE_ACTIVITY,
    {
      onError: (err) => {
        enqueueSnackbar(err.message, { variant: 'error' })
      },
      onCompleted: () => {
        enqueueSnackbar('Activity updated', { variant: 'success' })
        router.push(acterAsUrl(acter))
      },
    }
  )

  const Form = acter.ActerType.name === ACTIVITY ? ActivityForm : ActerForm

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
