import React from 'react'
import { NextPage } from 'next'
import { useUpdateActer } from '@acter/lib/acter/use-update-acter'
import { Layout } from 'src/components/layout'
import { Head } from 'src/components/layout/head'
import { ProfileInfoForm } from 'src/components/user/form/info'
import { InterestType, User } from '@schema'
import {
  composeProps,
  ComposedGetServerSideProps,
} from '@acter/lib/compose-props'
import { getUserProfile } from 'src/props'

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
