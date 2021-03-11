import React from 'react'
import { NextPage } from 'next'
import { useRouter, NextRouter } from 'next/router'
import { useMutation } from '@apollo/client'
import { useSnackbar } from 'notistack'
import { pick } from 'lodash'

import { acterTypeAsUrl } from 'src/lib/acter-types/acter-type-as-url'
import { saveActerImages } from 'src/lib/acter/save-images'

import Head from 'next/head'
import { Layout } from 'src/components/layout'
import { ActerForm } from 'src/components/acter/form'
import { ActivityForm } from 'src/components/activity/form'

import { handleUpdateActer } from 'src/lib/acter/handle-update-acter'

import {
  getUserProfile,
  getActerTypes,
  setActerType,
  getInterests,
  getActer,
} from 'src/props'
import { composeProps, ComposedGetServerSideProps } from 'lib/compose-props'

import { Acter, ActerType, InterestType, User } from '@generated/type-graphql'

import UPDATE_ACTER from 'graphql/mutations/acter-update.graphql'
import { ACTIVITY } from 'src/constants'
import { acterAsUrl } from 'src/lib/acter/acter-as-url'

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
   * The logged in user
   */
  user?: User
}
export const NewActerPage: NextPage<NewActerPageProps> = ({
  acter,
  acterType,
  interestTypes,
  user,
}) => {
  const router: NextRouter = useRouter()
  const { enqueueSnackbar } = useSnackbar()
  const [updateActer, { loading }] = useMutation(UPDATE_ACTER, {
    onCompleted: () => {
      enqueueSnackbar('Profile updated', { variant: 'success' })
      router.push(acterAsUrl(acter))
    },
  })

  // TODO: Refactor this
  let Form
  let createFn
  switch (acterType.name) {
    // case ACTIVITY:
    //   Form = ActivityForm
    //   createFn = async (data): Promise<Acter> => {
    //     // Create copy of the variables
    //     const variables = {
    //       ...data.variables,
    //     }
    //     ;['start', 'end'].forEach((t) => {
    //       const time = data.variables[`${t}Time`]
    //       variables[`${t}At`] = data.variables[`${t}Date`]
    //         .hour(time.hour())
    //         .minute(time.minute())
    //         .second(time.second())
    //         .toDate()
    //       delete variables[`${t}Date`]
    //       delete variables[`${t}Time`]
    //     })
    //     variables.isOnline = variables.isOnline === 'true'
    //     const res = await createActivity({ variables })
    //     return res.data.createActivity.Acter
    //   }
    //   break
    default:
      createFn = async (data): Promise<Acter> => {
        const res = await updateActer(data)
        return res.data.createActer
      }
      Form = ActerForm
  }

  return (
    <Layout user={user}>
      <Head>
        <title>Edit {acter.name} - Acter</title>
      </Head>
      <main>
        <Form
          acter={acter}
          acterType={acterType}
          user={user}
          interestTypes={interestTypes}
          onSubmit={handleUpdateActer(acter, updateActer)}
          loading={loading}
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
    getActer
  )

export default NewActerPage
