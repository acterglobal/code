import React, { useState, useEffect } from 'react'
import { NextPage } from 'next'
import { Layout } from '@acter/components/layout'
import { Head } from '@acter/components/layout/head'
import {
  getUserProfile,
  getActerTypes,
  setActerType,
  getActer,
  getLinks,
} from 'props'
import {
  composeProps,
  ComposedGetServerSideProps,
} from '@acter/lib/compose-props'
import { Acter, ActerType, Link as LinkType, User } from '@acter/schema'
import { ActerActivities } from '@acter/components/acter/activities'
import { useCreateActer } from '@acter/lib/acter/use-create-acter'
import { updateActerGroups } from '@acter/lib/group/update-acter-groups'
import { useCreateActerConnection } from '@acter/lib/acter/use-create-connection'
import { useDeleteActerConnection } from '@acter/lib/acter/use-delete-connection'

interface ActivitiesPageProps {
  acter: Acter
  acterTypes: ActerType[]
  user: User
  links: LinkType[]
}

export const ActerActivitiesPage: NextPage<ActivitiesPageProps> = ({
  acter,
  acterTypes,
  user,
  links,
}) => {
  const [displayActer, setDisplayActer] = useState(acter)

  useEffect(() => {
    setDisplayActer(acter)
  }, [acter])

  const [createGroup] = useCreateActer({
    onCompleted: ({ createActer }) => {
      setDisplayActer(updateActerGroups(displayActer, createActer))
    },
  })

  const [createActerConnection, { loading: creatingConnection }] =
    useCreateActerConnection(displayActer)

  const [deleteActerConnection, { loading: deletingConnection }] =
    useDeleteActerConnection(displayActer)

  return (
    <Layout
      acter={displayActer}
      acterTypes={acterTypes}
      user={user}
      onGroupSubmit={createGroup}
      links={links}
    >
      <Head title={`${acter.name} Settings - Acter`} />

      <ActerActivities
        acter={acter}
        user={user}
        onJoin={createActerConnection}
        onLeave={deleteActerConnection}
        loading={creatingConnection || deletingConnection}
      />
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
    getLinks
  )

export default ActerActivitiesPage
