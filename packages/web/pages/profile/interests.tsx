import React from 'react'
import { NextPage } from 'next'
import { Layout } from '@acter/components/layout'
import { Head } from '@acter/components/layout/head'
import { ProfileInterestsForm } from '@acter/components/user/form/interests'
import { InterestType } from '@acter/schema'
import {
  composeProps,
  ComposedGetServerSideProps,
} from '@acter/lib/compose-props'
import { getInterests } from 'props'

interface UserProfilePageProps {
  interestTypes: InterestType[]
}

export const UserProfileInterestsPage: NextPage<UserProfilePageProps> = ({
  interestTypes,
}) => {
  return (
    <Layout>
      <Head title="Profile - Acter" />
      <main>
        <ProfileInterestsForm interestTypes={interestTypes} />
      </main>
    </Layout>
  )
}

export const getServerSideProps: ComposedGetServerSideProps = (ctx) =>
  composeProps(ctx, getInterests)

export default UserProfileInterestsPage
