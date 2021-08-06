import React from 'react'
import { NextPage } from 'next'
import { useUpdateActer } from '@acter/lib/acter/use-update-acter'
import { Layout } from '@acter/components/layout'
import { Head } from '@acter/components/layout/head'
import { ProfileInfoForm } from '@acter/components/user/form/info'
import { InterestType, User } from '@acter/schema'
import {
  composeProps,
  ComposedGetServerSideProps,
} from '@acter/lib/compose-props'
import { getUserProfile } from 'props'

interface UserProfilePageProps {
  interestTypes: InterestType[]
  user?: User
}

export const UserProfileInfoPage: NextPage<UserProfilePageProps> = ({
  user,
}) => {
  const [updateActer] = useUpdateActer(user.Acter)
  return (
    <Layout user={user}>
      <Head title="Profile - Acter" />
      <main>
        <ProfileInfoForm user={user} onSubmit={updateActer} />
      </main>
    </Layout>
  )
}

export const getServerSideProps: ComposedGetServerSideProps = (ctx) =>
  composeProps(ctx, getUserProfile(true))

export default UserProfileInfoPage
