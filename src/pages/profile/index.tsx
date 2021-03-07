import React from 'react'
import { NextPage } from 'next'
import Head from 'next/head'
import { useMutation } from '@apollo/client'
import md5 from 'md5'
import { pick } from 'lodash'

import { uploadImage } from 'src/lib/images/upload-image'

import { Layout } from 'src/components/layout'
import { ProfileEdit } from 'src/components/user/profile-edit'

import { Acter, InterestType, User } from '@generated/type-graphql'

import { composeProps, ComposedGetServerSideProps } from 'lib/compose-props'
import { getUserProfile, getInterests } from 'src/props'

import UPDATE_USER_ACTER from 'graphql/mutations/mutate-update-acter.graphql'

export const _handleSubmit = (user: User, updateFn: (any) => any) => async (
  data: Partial<Acter>
) => {
  // Upload images
  const folder = `acter/${md5(user.Acter.id)}`
  await Promise.all(
    ['avatar', 'banner'].map(async (fileName) => {
      //TODO: error handling for failed upload
      const file = data[fileName]
      if (file) {
        if (!user.Acter.avatarUrl.match(file.name)) {
          const img = await uploadImage(folder, file)
          if (img) {
            data[`${fileName}Url`] = img
          }
        }
      }
    })
  )

  const updateSet = [
    'name',
    'description',
    'location',
    'url',
    'avatarUrl',
    'bannerUrl',
  ]

  const acter = {
    ...pick(user.Acter, ...updateSet),
    ...pick(data, ...updateSet),
  }

  return await updateFn({
    variables: {
      acterId: user.Acter.id,
      ...acter,
    },
  })
}
interface UserProfilePageProps {
  loading?: boolean
  error?: string
  interestTypes: InterestType[]
  user?: User
}

export const UserProfilePage: NextPage<UserProfilePageProps> = ({
  user,
  interestTypes,
}) => {
  const [updateUser] = useMutation(UPDATE_USER_ACTER, {
    // update: (cache, res) => {},
  })

  return (
    <Layout user={user}>
      <Head>
        <title>Profile</title>
      </Head>

      <main>
        <ProfileEdit
          user={user}
          interestTypes={interestTypes}
          onSubmit={_handleSubmit(user, updateUser)}
        />
      </main>
    </Layout>
  )
}

export const getServerSideProps: ComposedGetServerSideProps = (ctx) =>
  composeProps(ctx, getUserProfile(true), getInterests)

export default UserProfilePage
