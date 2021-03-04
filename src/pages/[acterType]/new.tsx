import React from 'react'
import md5 from 'md5'
import { NextPage } from 'next'
import { useRouter, NextRouter } from 'next/router'
import { useMutation } from '@apollo/client'

import { acterTypeAsUrl } from 'src/lib/acter-types/acter-type-as-url'
import { uploadImage } from 'src/lib/images/upload-image'

import Head from 'next/head'
import { Layout } from 'src/components/layout'
import { ActerForm } from 'src/components/acter/form'

import {
  getToken,
  getUserProfile,
  getActerTypes,
  setActerType,
  getInterests,
} from 'src/props'
import { composeProps, ComposedGetServerSideProps } from 'lib/compose-props'

import { Acter, ActerType, InterestType, User } from '@generated/type-graphql'

import MUTATE_ACTER_CREATE from 'graphql/mutations/mutate-create-acter.graphql'
import MUTATE_ACTER_UPDATE from 'graphql/mutations/mutate-update-acter.graphql'

interface FileDescription {
  name: string
  size: number
  type: string
}

interface FileUpload {
  avatar: FileDescription
  banner: FileDescription
}

type FormValues = Acter & FileUpload

const blankActer: Partial<Acter> = {
  name: '',
  slug: '',
  description: '',
  location: '',
  url: '',
  avatarUrl: '',
  bannerUrl: '',
}

/**
 * Returns an onSubmit handler
 * @param createActerFn Function returned from useMutation
 * @param acterType The ActerType to use for Acter creation
 */
export const _handleSubmit = (
  createActerFn: (any) => any,
  updateActerFn: (any) => any,
  acterType: ActerType
) => async (data: FormValues) => {
  // Create the acter
  const acterData = (data as unknown) as Acter
  const createRes = await createActerFn({
    variables: {
      ...acterData,
      acterTypeId: acterType.id,
    },
  })
  const acter: Acter = createRes.data.createActer

  // Upload images
  const folder = `acter/${md5(acter.id)}`
  await Promise.all(
    ['avatar', 'banner'].map(async (fileName) => {
      //TODO: error handling for failed upload
      const file = data[fileName]
      if (file) {
        const img = await uploadImage(folder, file)
        if (img) {
          acter[`${fileName}Url`] = img
        }
      }
    })
  )

  // Update Acter with image URLs
  return await updateActerFn({
    variables: {
      ...acter,
      acterId: acter.id,
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
  const [createActer, createOut] = useMutation(MUTATE_ACTER_CREATE)
  const [updateActer, updateOut] = useMutation(MUTATE_ACTER_UPDATE, {
    onCompleted: ({ updateActer }) => {
      _handleOnComplete(router, updateActer)
    },
  })

  return (
    <Layout loggedInUser={user}>
      <Head>
        <title>New {acterType.name}</title>
      </Head>
      <main>
        <ActerForm
          acterType={acterType}
          interestTypes={interestTypes}
          onSubmit={_handleSubmit(createActer, updateActer, acterType)}
        />
      </main>
    </Layout>
  )
}

export const getServerSideProps: ComposedGetServerSideProps = (ctx) =>
  composeProps(
    ctx,
    getToken,
    getUserProfile,
    getActerTypes,
    setActerType,
    getInterests
  )

export default NewActerPage
