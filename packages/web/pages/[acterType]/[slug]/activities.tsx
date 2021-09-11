import React from 'react'
import { NextPage } from 'next'
import { Layout } from '@acter/components/layout'
import { Head } from '@acter/components/layout/head'
import { getActerTypes, setActerType, getActer, getLinks } from 'props'
import {
  composeProps,
  ComposedGetServerSideProps,
} from '@acter/lib/compose-props'
import { Acter, Link as LinkType } from '@acter/schema'
import { ActerActivities } from '@acter/components/acter/activities'
import { useCreateActerConnection } from '@acter/lib/acter/use-create-connection'
import { useDeleteActerConnection } from '@acter/lib/acter/use-delete-connection'
import { useQuery } from '@apollo/client'
import QUERY_ACTER from '@acter/schema/queries/acter-by-slug.graphql'

interface ActivitiesPageProps {
  acter: Acter
  links: LinkType[]
}

export const ActerActivitiesPage: NextPage<ActivitiesPageProps> = ({
  acter,
}) => {
  /* This query call fetches the cache data whenever cache updates */
  const { data } = useQuery(QUERY_ACTER, {
    variables: {
      acterTypeId: acter.ActerType.id,
      slug: acter.slug,
    },
  })

  const { findFirstActer: displayActer } = data

  const [
    createActerConnection,
    { loading: creatingConnection },
  ] = useCreateActerConnection(displayActer)

  const [
    deleteActerConnection,
    { loading: deletingConnection },
  ] = useDeleteActerConnection(displayActer)

  return (
    <Layout>
      <Head title={`${acter.name} Settings - Acter`} />

      <ActerActivities
        onJoin={createActerConnection}
        onLeave={deleteActerConnection}
        loading={creatingConnection || deletingConnection}
      />
    </Layout>
  )
}

export const getServerSideProps: ComposedGetServerSideProps = (ctx) =>
  composeProps(ctx, getActerTypes, setActerType, getActer, getLinks)

export default ActerActivitiesPage
