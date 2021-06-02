import React, { useState } from 'react'
import { NextPage } from 'next'

import { Layout } from 'src/components/layout'
import { Head } from 'src/components/layout/head'

import { composeProps, ComposedGetServerSideProps } from 'src/lib/compose-props'
import { useNotificationMutation } from 'src/lib/apollo/use-notification-mutation'
import { useCreateActer } from 'src/lib/apollo/use-create-acter'

import {
  checkRole,
  getUserProfile,
  getActerTypes,
  getActer,
  setActerType,
} from 'src/props'

import { ActerSettings } from 'src/components/acter/settings'

import UPDATE_ACTER from 'api/mutations/acter-update.graphql'

import { Acter, ActerConnectionRole, ActerType, User } from '@schema'

interface ActerSettingsPageProps {
  acter: Acter
  acterTypes: ActerType[]
  user: User
}

export const ActerSettingsPage: NextPage<ActerSettingsPageProps> = ({
  acter,
  acterTypes,
  user,
}) => {
  const [displayActer, setDisplayActer] = useState(acter)
  const [
    updateActer,
    { loading: acterUpdateLoading },
  ] = useNotificationMutation(UPDATE_ACTER, {
    getSuccessMessage: () => 'Settings updated',
    onCompleted: (data) => {
      setDisplayActer(data.updateActer)
    },
  })
  const [_handleCreateActer] = useCreateActer(displayActer)

  return (
    <Layout
      acter={displayActer}
      acterTypes={acterTypes}
      user={user}
      onGroupSubmit={_handleCreateActer}
    >
      <Head title={`${acter.name} Settings - Acter`} />
      <main>
        <ActerSettings
          acter={displayActer}
          onSettingsChange={(acter) => {
            updateActer({
              variables: {
                ...acter,
                interestIds: acter.ActerInterests.map(
                  ({ Interest: { id } }) => id
                ),
                acterId: acter.id,
              },
            })
          }}
          loading={acterUpdateLoading}
        />
      </main>
    </Layout>
  )
}

export const getServerSideProps: ComposedGetServerSideProps = (ctx) =>
  composeProps(
    ctx,
    getUserProfile(true),
    getActerTypes,
    setActerType,
    getActer,
    checkRole(ActerConnectionRole.ADMIN)
  )

export default ActerSettingsPage
