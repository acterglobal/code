import React from 'react'
import { NextPage } from 'next'

import { useUpdateActer } from '@acter/lib/acter/use-update-acter'

import { Layout } from '@acter/components/layout'
import { Head } from '@acter/components/layout/head'
import { ProfileInterestsForm } from '@acter/components/user/form/interests'

import { InterestType, User } from '@schema'

import {
  composeProps,
  ComposedGetServerSideProps,
} from '@acter/lib/compose-props'
import { getUserProfile, getInterests } from 'src/props'

interface UserProfilePageProps {
  interestTypes: InterestType[]
  user?: User
}

export const UserProfileInterestsPage: NextPage<UserProfilePageProps> = ({
  user,
  interestTypes,
}) => {
  const [updateActer] = useUpdateActer(user.Acter)
  return (
    <Layout user={user}>
      <Head title="Profile - Acter" />
      <main>
        <ProfileInterestsForm
          user={user}
          interestTypes={interestTypes}
          onSubmit={updateActer}
        />
      </main>
    </Layout>
  )
}

export const getServerSideProps: ComposedGetServerSideProps = (ctx) =>
  composeProps(ctx, getUserProfile(true), getInterests)

export default UserProfileInterestsPage
