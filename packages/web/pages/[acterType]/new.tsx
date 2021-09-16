import React from 'react'

import { NextPage } from 'next'
import { useRouter, NextRouter } from 'next/router'

import { StoreObject } from '@apollo/client'

import { getActerTypes, setActerType, getInterests } from 'props'

import { ActerForm } from '@acter/components/acter/form'
import { ActivityForm } from '@acter/components/activity/form'
import { Layout } from '@acter/components/layout'
import { Head } from '@acter/components/layout/head'
import { acterAsUrl } from '@acter/lib/acter/acter-as-url'
import { getCreateFunction } from '@acter/lib/acter/get-create-function'
import { useUpdateActer } from '@acter/lib/acter/use-update-acter'
import { useNotificationMutation } from '@acter/lib/apollo/use-notification-mutation'
import {
  composeProps,
  ComposedGetServerSideProps,
} from '@acter/lib/compose-props'
import { ActerTypes } from '@acter/lib/constants'
import { Acter, ActerType, InterestType } from '@acter/schema'
import ACTER_CREATE from '@acter/schema/mutations/acter-create.graphql'
import CREATE_ACTIVITY from '@acter/schema/mutations/activity-create.graphql'

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
  // TODO: merge this with useCreateActer
  const [createActer] = useNotificationMutation(ACTER_CREATE, {
    update: (cache, result) => {
      const {
        data: { createActerCustom },
      } = result
      const ref = cache.identify((createActerCustom as unknown) as StoreObject)
      createActerCustom.Followers.forEach(({ Follower }) => {
        cache.modify({
          id: cache.identify((Follower as unknown) as StoreObject),
          fields: {
            Following: (prevFollowing) => [...prevFollowing, { __ref: ref }],
          },
        })
      })
    },
  })

  const [updateActer] = useUpdateActer({} as Acter, {
    getSuccessMessage: ({ updateActerCustom }) =>
      `Created ${updateActerCustom.name}`,
    onCompleted: ({ updateActerCustom }) =>
      router.push(acterAsUrl({ acter: updateActerCustom })),
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
