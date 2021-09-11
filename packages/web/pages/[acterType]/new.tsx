import React from 'react'
import { NextPage } from 'next'
import { useRouter, NextRouter } from 'next/router'

import { acterAsUrl } from '@acter/lib/acter/acter-as-url'
import { useNotificationMutation } from '@acter/lib/apollo/use-notification-mutation'

import { Layout } from '@acter/components/layout'
import { ActerForm } from '@acter/components/acter/form'
import { ActivityForm } from '@acter/components/activity/form'
import { Head } from '@acter/components/layout/head'

import { getActerTypes, setActerType, getInterests } from 'props'
import {
  composeProps,
  ComposedGetServerSideProps,
} from '@acter/lib/compose-props'

import { Acter, ActerType, InterestType } from '@acter/schema'

import ACTER_CREATE from '@acter/schema/mutations/acter-create.graphql'
import CREATE_ACTIVITY from '@acter/schema/mutations/activity-create.graphql'
import { ActerTypes } from '@acter/lib/constants'
import { getCreateFunction } from '@acter/lib/acter/get-create-function'
import { useUpdateActer } from '@acter/lib/acter/use-update-acter'

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
  const router: NextRouter = useRouter()
  const [createActivity] = useNotificationMutation(CREATE_ACTIVITY)
  const [createActer] = useNotificationMutation(ACTER_CREATE)

  const [updateActer] = useUpdateActer({} as Acter, {
    getSuccessMessage: ({ updateActer }) => `Created ${updateActer.name}`,
    onCompleted: ({ updateActer }) =>
      router.push(acterAsUrl({ acter: updateActer })),
  })

  const Form = acterType.name === ActerTypes.ACTIVITY ? ActivityForm : ActerForm

  return (
    <Layout>
      <Head title={acterType.name} />
      <main>
        <Form
          acterType={acterType}
          interestTypes={interestTypes}
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
  composeProps(ctx, getActerTypes, setActerType, getInterests)

export default NewActerPage
