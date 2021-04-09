import React from 'react'
import { NextPage } from 'next'
import { useMutation } from '@apollo/client'

import { useSnackbar } from 'notistack'

import { updateActerWithPictures } from 'src/lib/acter/update-acter-with-pictures'

import { Layout } from 'src/components/layout'
import { Head } from 'src/components/layout/head'
import { ProfileEdit } from 'src/components/user/profile-edit'

import { InterestType, User } from '@schema'

import { composeProps, ComposedGetServerSideProps } from 'lib/compose-props'
import { getUserProfile, getInterests } from 'src/props'

import UPDATE_ACTER from 'api/mutations/acter-update.graphql'

//TODO: write types for formValues
//eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
export const _handleSubmit = (user: User, updateFn: (any) => Promise<any>) => (
  formValues: any
): Promise<any> => updateActerWithPictures(user.Acter, formValues, updateFn)

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
