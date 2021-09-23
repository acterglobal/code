import React from 'react'

import { useRouter, NextRouter } from 'next/router'

import { StoreObject } from '@apollo/client'

import { NextPageWithLayout } from 'pages/_app'
import { getInterests } from 'props'

import { ActivityForm } from '@acter/components/activity/form'
import { Head } from '@acter/components/layout/head'
import { useActerTypes } from '@acter/lib/acter-types/use-acter-types'
import { acterAsUrl } from '@acter/lib/acter/acter-as-url'
import { getCreateFunction } from '@acter/lib/acter/get-create-function'
import { useUpdateActer } from '@acter/lib/acter/use-update-acter'
import { addToCacheList } from '@acter/lib/apollo/add-to-cache-list'
import { useNotificationMutation } from '@acter/lib/apollo/use-notification-mutation'
import {
  composeProps,
  ComposedGetServerSideProps,
} from '@acter/lib/compose-props'
import { ActerTypes } from '@acter/lib/constants'
import { Acter, InterestType } from '@acter/schema'
import ACTER_CREATE from '@acter/schema/mutations/acter-create.graphql'
import CREATE_ACTIVITY from '@acter/schema/mutations/activity-create.graphql'

interface NewActerPageProps {
  /**
   * List of interests grouped by Interest Type
   */
  interestTypes: InterestType[]
}

export const NewActivityPage: NextPageWithLayout<NewActerPageProps> = ({
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
      createActerCustom.Followers.forEach(({ Follower }) => {
        cache.modify({
          id: cache.identify((Follower as unknown) as StoreObject),
          fields: {
            Following: addToCacheList(createActerCustom),
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

  const { acterTypes } = useActerTypes()
  if (!acterTypes) {
    return null
  }

  const acterType = acterTypes.find((type) => type.name === ActerTypes.ACTIVITY)

  return (
    <>
      <Head title="New Activity" />
      <main>
        <ActivityForm
          interestTypes={interestTypes}
          onSubmit={getCreateFunction({
            acterType,
            createActivity,
            createActer,
            updateActer,
          })}
        />
      </main>
    </>
  )
}

export const getServerSideProps: ComposedGetServerSideProps = (ctx) =>
  composeProps(ctx, getInterests)

export default NewActivityPage
