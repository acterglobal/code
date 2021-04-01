import React from 'react'
import { NextPage } from 'next'
import { useRouter, NextRouter } from 'next/router'
import { useMutation } from '@apollo/client'
import { useSnackbar } from 'notistack'

import { acterTypeAsUrl } from 'src/lib/acter-types/acter-type-as-url'

import { Layout } from 'src/components/layout'
import { Head } from 'src/components/layout/head'
import { ActerForm } from 'src/components/acter/form'
import { ActivityForm } from 'src/components/activity/form'
import { upsertActerWithPictures } from 'src/lib/acter/upsert-acter-with-pictures'

import {
  getUserProfile,
  getActerTypes,
  setActerType,
  getInterests,
  getActer,
  getActivityTypes,
} from 'src/props'
import { composeProps, ComposedGetServerSideProps } from 'lib/compose-props'

import { Acter, ActerType, ActivityType, InterestType, User } from '@schema'

import UPDATE_ACTER from 'api/mutations/acter-update.graphql'
import UPDATE_ACTIVITY from 'api/mutations/activity-update.graphql'
import { ACTIVITY } from 'src/constants'
import { acterAsUrl } from 'src/lib/acter/acter-as-url'
import { upsertActivity } from 'src/lib/activity/upsert-activity'

/**
 * Returns a handler for useMutaion onComplete
 * @param router NextRouter returned from useRouter
 * @param acterType The ActerType to use for routing
 */
export const _handleOnComplete = (
  router: NextRouter,
  acter: Acter
): Promise<boolean> =>
  router.push(`/${acterTypeAsUrl(acter.ActerType)}/${acter.slug}`)

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
      onCompleted: () => {
        enqueueSnackbar('Profile updated', { variant: 'success' })
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
        enqueueSnackbar('Event updated', { variant: 'success' })
        router.push(acterAsUrl(acter))
      },
    }
  )

  // TODO: Refactor this
  let Form
  let updateFn
  switch (acterType.name) {
    case ACTIVITY:
      Form = ActivityForm
      updateFn = async (data): Promise<Acter> => {
        try {
          const res = await upsertActivity(updateActivity, data)
          return res.data.updateActivity.Acter
        } catch (err) {
          return {} as Acter
        }
      }
      break
    default:
      updateFn = async (data): Promise<Acter> => {
        try {
          const res = await updateActer(data)
          return res.data.createActer
        } catch (err) {
          return {} as Acter
        }
      }
      Form = ActerForm
  }

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
          onSubmit={upsertActerWithPictures(acter, updateFn)}
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
