import React from 'react'
import { NextPage } from 'next'

import { updateActerWithPictures } from 'src/lib/acter/update-acter-with-pictures'
import { useNotificationMutation } from 'src/lib/apollo/use-notification-mutation'

import { Layout } from 'src/components/layout'
import { Head } from 'src/components/layout/head'
import { ProfileEdit } from 'src/components/user/profile-edit'

import { Acter, InterestType, User } from '@schema'

import { composeProps, ComposedGetServerSideProps } from 'lib/compose-props'
import { getUserProfile, getInterests } from 'src/props'

import UPDATE_ACTER from 'api/mutations/acter-update.graphql'

//TODO: write types for formData
export const _handleSubmit = (
  acter: Acter,
  //eslint-disable-next-line @typescript-eslint/no-explicit-any
  updateActer: (any) => Promise<any>
  //eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
) => (formData: any): Promise<any> =>
  updateActerWithPictures({ acter, formData, updateActer })

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
  const [updateUser, { loading }] = useNotificationMutation(UPDATE_ACTER, {
    getSuccessMessage: () => 'Profile updated',
  })

  return (
    <Layout user={user}>
      <Head title="Profile - Acter" />
      <main>
        <ProfileEdit
          user={user}
          interestTypes={interestTypes}
          onSubmit={_handleSubmit(user.Acter, updateUser)}
          loading={loading}
        />
      </main>
    </Layout>
  )
}

export const getServerSideProps: ComposedGetServerSideProps = (ctx) =>
  composeProps(ctx, getUserProfile(true), getInterests)

export default UserProfilePage
