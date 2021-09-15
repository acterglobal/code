import React from 'react'

import { NextPage } from 'next'
import { useRouter } from 'next/router'

import { getActerTypes, setActerType, getInterests, getActer } from 'props'

import { ActerForm } from '@acter/components/acter/form'
import { ActivityForm } from '@acter/components/activity/form'
import { Layout } from '@acter/components/layout'
import { Head } from '@acter/components/layout/head'
import { LoadingSpinner } from '@acter/components/util/loading-spinner'
import { acterAsUrl } from '@acter/lib/acter/acter-as-url'
import { getUpdateFunction } from '@acter/lib/acter/get-update-function'
import { useActer } from '@acter/lib/acter/use-acter'
import { useUpdateActer } from '@acter/lib/acter/use-update-acter'
import { useNotificationMutation } from '@acter/lib/apollo/use-notification-mutation'
import {
  composeProps,
  ComposedGetServerSideProps,
} from '@acter/lib/compose-props'
import { ActerTypes } from '@acter/lib/constants'
import { ActerType, InterestType } from '@acter/schema'
import UPDATE_ACTIVITY from '@acter/schema/mutations/activity-update.graphql'

interface NewActerPageProps {
  /**
   * The ActerType we are creating
   */
  acterType: ActerType
  /**
   * List of interests grouped by Interest Type
   */
  interestTypes: InterestType[]
}
export const NewActerPage: NextPage<NewActerPageProps> = ({
  acterType,
  interestTypes,
}) => {
  const router = useRouter()
  const { acter, loading } = useActer()
  const [updateActer, { loading: updateActerLoading }] = useUpdateActer(acter, {
    getSuccessMessage: ({ updateActerCustom }) =>
      `${updateActerCustom.name} updated`,
    onCompleted: () => router.push(acterAsUrl({ acter })),
  })

  const [
    updateActivity,
    { loading: updateActivityLoading },
  ] = useNotificationMutation(UPDATE_ACTIVITY, {
    getSuccessMessage: ({ updateActivityCustom }) =>
      `${updateActivityCustom.Acter.name} updated`,
    onCompleted: () => router.push(acterAsUrl({ acter })),
  })

  if (loading) return <LoadingSpinner />
  if (!acter) return null

  const Form =
    acter.ActerType.name === ActerTypes.ACTIVITY ? ActivityForm : ActerForm

  return (
    <Layout>
      <Head title={`${acter.name} - Acter`} />
      <main>
        <Form
          acter={acter}
          acterType={acterType}
          interestTypes={interestTypes}
          onSubmit={getUpdateFunction({ acter, updateActivity, updateActer })}
          loading={updateActerLoading || updateActivityLoading}
        />
      </main>
    </Layout>
  )
}

export const getServerSideProps: ComposedGetServerSideProps = (ctx) =>
  composeProps(ctx, getActerTypes, setActerType, getInterests, getActer)

export default NewActerPage
