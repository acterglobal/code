import React from 'react'

import { NextPageWithLayout } from 'pages/_app'
import { getInterests } from 'props'

import { Head } from '@acter/components/layout/head'
import { ProfileInterestsForm } from '@acter/components/user/form/interests'
import {
  composeProps,
  ComposedGetServerSideProps,
} from '@acter/lib/compose-props'
import { InterestType } from '@acter/schema'

interface UserProfilePageProps {
  interestTypes: InterestType[]
}

export const UserProfileInterestsPage: NextPageWithLayout<UserProfilePageProps> = ({
  interestTypes,
}) => {
  return (
    <>
      <Head title="Profile - Acter" />
      <main>
        <ProfileInterestsForm interestTypes={interestTypes} />
      </main>
    </>
  )
}

export const getServerSideProps: ComposedGetServerSideProps = (ctx) =>
  composeProps(ctx, getInterests)

export default UserProfileInterestsPage
