import React, { useState } from 'react'
import { NextPage } from 'next'
import { Layout } from 'src/components/layout'
import { Head } from 'src/components/layout/head'
import { composeProps, ComposedGetServerSideProps } from 'src/lib/compose-props'
import {
  checkRole,
  getUserProfile,
  getActerTypes,
  getActer,
  setActerType,
} from 'src/props'
import { ActerSettings } from 'src/components/acter/settings'
import { Acter, ActerConnectionRole, ActerType, User } from '@schema'
import { useUpdateActer } from 'src/lib/acter/use-update-acter'
import { useCreateActer } from 'src/lib/acter/use-create-acter'
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
  const [createActer] = useCreateActer(displayActer)
  const [updateActer, { loading: acterUpdateLoading }] = useUpdateActer(
    displayActer,
    setDisplayActer
  )

  return (
    <Layout
      acter={displayActer}
      acterTypes={acterTypes}
      user={user}
      onGroupSubmit={createActer}
    >
      <Head title={`${acter.name} Settings - Acter`} />
      <main>
        <ActerSettings
          acter={displayActer}
          onSettingsChange={updateActer}
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
