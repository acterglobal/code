import React from 'react'
import { NextPage } from 'next'
import Head from 'next/head'
import { useMutation } from '@apollo/client'

import { useSnackbar } from 'notistack'

import { handleUpdateActer } from 'src/lib/acter/handle-update-acter'

import { Layout } from 'src/components/layout'
import { ProfileEdit } from 'src/components/user/profile-edit'

import { InterestType, User } from '@schema'

import { composeProps, ComposedGetServerSideProps } from 'lib/compose-props'
import { getUserProfile, getInterests } from 'src/props'

import UPDATE_ACTER from 'api/mutations/acter-update.graphql'

type WithInterestIds = {
  interestIds: string[]
}

export const _handleSubmit = (user: User, updateFn: (any) => Promise<any>) =>
  handleUpdateActer(user.Acter, updateFn)
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
  const { enqueueSnackbar } = useSnackbar()
  const [updateUser, { loading }] = useMutation(UPDATE_ACTER, {
    onCompleted: () => {
      enqueueSnackbar('Profile updated', { variant: 'success' })
    },
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
          loading={loading}
        />
      </main>
    </Layout>
  )
}

export const getServerSideProps: ComposedGetServerSideProps = (ctx) =>
  composeProps(ctx, getUserProfile(true), getInterests)

export default UserProfilePage
