import React from 'react'
import { NextPage } from 'next'
import { useMutation } from '@apollo/client'

import { useSnackbar } from 'notistack'

import { handleUpdateActer } from 'src/lib/acter/handle-update-acter'

import { Layout } from 'src/components/layout'
import { Head } from 'src/components/layout/head'
import { ProfileEdit } from 'src/components/user/profile-edit'

import { InterestType, User } from '@schema'

import { composeProps, ComposedGetServerSideProps } from 'lib/compose-props'
import { getUserProfile, getInterests } from 'src/props'

import UPDATE_ACTER from 'api/mutations/acter-update.graphql'

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
      <Head title="Profile - Acter" />
      <main>
        <ProfileEdit
          user={user}
          interestTypes={interestTypes}
          onSubmit={handleUpdateActer(user.Acter, updateUser)}
          loading={loading}
        />
      </main>
    </Layout>
  )
}

export const getServerSideProps: ComposedGetServerSideProps = (ctx) =>
  composeProps(ctx, getUserProfile(true), getInterests)

export default UserProfilePage
