import React from 'react'
import { NextPage } from 'next'
import { useRouter, NextRouter } from 'next/router'
import { useMutation } from '@apollo/client'

import { acterTypeAsUrl } from 'src/lib/acter-types/acter-type-as-url'

import Head from 'next/head'
import { Layout } from 'src/components/layout'
import { ActerForm } from 'src/components/acter/form'

import {
  getToken,
  getUserProfile,
  getActerTypes,
  setActerType,
} from 'src/props'
import { composeProps, ComposedGetServerSideProps } from 'lib/compose-props'

import { Acter, ActerType, User } from '@generated/type-graphql'

import MUTATE_ACTER_CREATE from 'graphql/mutations/mutate-create-acter.graphql'

/**
 * Returns an onSubmit handler
 * @param createActerFn Function returned from useMutation
 * @param acterType The ActerType to use for Acter creation
 */
export const _handleSubmit = (
  createActerFn: (any) => any,
  acterType: ActerType
) => async (data: Acter) => {
  return await createActerFn({
    variables: {
      ...data,
      acterTypeId: acterType.id,
    },
  })
}

/**
 * Returns a handler for useMutaion onComplete
 * @param router NextRouter returned from useRouter
 * @param acterType The ActerType to use for routing
 */
export const _handleOnComplete = (
  router: NextRouter,
  acterType: ActerType
) => ({ createActer }: { createActer: Acter }) =>
  router.push(`/${acterTypeAsUrl(createActer.ActerType)}/${createActer.slug}`)

interface NewActerPageProps {
  /**
   * The ActerType we are creating
   */
  acterType: ActerType
  /**
   * The logged in user
   */
  user?: User
}
export const NewActerPage: NextPage<NewActerPageProps> = ({
  acterType,
  user,
}) => {
  const router: NextRouter = useRouter()
  const [createActer, { loading, error }] = useMutation(MUTATE_ACTER_CREATE, {
    onCompleted: _handleOnComplete(router, acterType),
  })

  return (
    <Layout loggedInUser={user}>
      <Head>
        <title>New {acterType.name}</title>
      </Head>
      <main>
        <ActerForm
          acterType={acterType}
          loading={loading}
          error={error?.message}
          onSubmit={_handleSubmit(createActer, acterType)}
        />
      </main>
    </Layout>
  )
}

export const getServerSideProps: ComposedGetServerSideProps = (ctx) =>
  composeProps(ctx, getToken, getUserProfile, getActerTypes, setActerType)

export default NewActerPage
