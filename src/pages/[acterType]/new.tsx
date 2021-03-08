import React from 'react'
import { NextPage } from 'next'
import { useRouter, NextRouter } from 'next/router'
import { useMutation } from '@apollo/client'

import { acterTypeAsUrl } from 'src/lib/acter-types/acter-type-as-url'
import { saveActerImages } from 'src/lib/acter/save-images'

import Head from 'next/head'
import { Layout } from 'src/components/layout'
import { ActerForm } from 'src/components/acter/form'
import { ActivityForm } from 'src/components/activity/form'

import {
  getUserProfile,
  getActerTypes,
  setActerType,
  getInterests,
} from 'src/props'
import { composeProps, ComposedGetServerSideProps } from 'lib/compose-props'

import { Acter, ActerType, InterestType, User } from '@generated/type-graphql'

import MUTATE_ACTER_CREATE from 'api/mutations/mutate-create-acter.graphql'
import UPDATE_ACTER_IMAGES from 'api/mutations/acter-update-images.graphql'
import CREATE_ACTIVITY from 'api/mutations/activity-create.graphql'
import { ACTIVITY } from 'src/constants'

/**
 * Returns an onSubmit handler
 * @param createActerFn Function returned from useMutation
 * @param acterType The ActerType to use for Acter creation
 */
export const _handleSubmit = (
  createActerFn: (any) => any,
  updateActerFn: (any) => any,
  acterType: ActerType
) => async (data) => {
  // Create the acter
  const acter: Acter = await createActerFn({
    variables: {
      ...data,
      acterTypeId: acterType.id,
    },
  })

  console.log('Acter created: ', acter)

  // Upload images
  await saveActerImages(acter, data)

  console.log('Acter images created: ', acter)

  // Update Acter with image URLs
  const res = await updateActerFn({
    variables: {
      acterId: acter.id,
      avatarUrl: acter.avatarUrl || '',
      bannerUrl: acter.bannerUrl || '',
    },
  })
  console.log('Acter updated with images ', res)
}

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
}
export const NewActerPage: NextPage<NewActerPageProps> = ({
  acterType,
  interestTypes,
  user,
}) => {
  const router: NextRouter = useRouter()
  const [createActivity] = useMutation(CREATE_ACTIVITY)
  const [createActer] = useMutation(MUTATE_ACTER_CREATE)
  const [updateActerImages] = useMutation(UPDATE_ACTER_IMAGES, {
    onCompleted: ({ updateActer }) => {
      _handleOnComplete(router, updateActer)
    },
  })

  // TODO: Refactor this
  let Form
  let createFn
  switch (acterType.name) {
    case ACTIVITY:
      Form = ActivityForm
      createFn = async (data): Promise<Acter> => {
        // Create copy of the variables
        const variables = {
          ...data.variables,
        }
        ;['start', 'end'].forEach((t) => {
          const time = data.variables[`${t}Time`]
          variables[`${t}At`] = data.variables[`${t}Date`]
            .hour(time.hour())
            .minute(time.minute())
            .second(time.second())
            .toDate()
          delete variables[`${t}Date`]
          delete variables[`${t}Time`]
        })
        variables.isOnline = variables.isOnline === 'true'
        const res = await createActivity({ variables })
        return res.data.createActivity.Acter
      }
      break
    default:
      createFn = async (data): Promise<Acter> => {
        const res = await createActer(data)
        return res.data.createActer
      }
      Form = ActerForm
  }

  return (
    <Layout user={user}>
      <Head>
        <title>New {acterType.name}</title>
      </Head>
      <main>
        <Form
          acterType={acterType}
          user={user}
          interestTypes={interestTypes}
          onSubmit={_handleSubmit(createFn, updateActerImages, acterType)}
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
    getInterests
  )

export default NewActerPage
