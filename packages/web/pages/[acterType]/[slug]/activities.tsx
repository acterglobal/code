import React from 'react'
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
import { useCreateActerConnection } from '@acter/lib/acter/use-create-connection'
import { useDeleteActerConnection } from '@acter/lib/acter/use-delete-connection'
import { useQuery } from '@apollo/client'
import QUERY_ACTER from '@acter/schema/queries/acter-by-slug.graphql'

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
  /* This query call fetches the cache data whenever cache updates */
  const { data } = useQuery(QUERY_ACTER, {
    variables: {
      acterTypeId: acter.ActerType.id,
      slug: acter.slug,
    },
  })

  const { findFirstActer: displayActer } = data

  const [createGroup] = useCreateActer(displayActer)

  const [
    createActerConnection,
    { loading: creatingConnection },
  ] = useCreateActerConnection(displayActer)

  const [
    deleteActerConnection,
    { loading: deletingConnection },
  ] = useDeleteActerConnection(displayActer)

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
