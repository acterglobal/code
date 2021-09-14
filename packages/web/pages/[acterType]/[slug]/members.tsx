import { NextPage } from 'next'
import { Layout } from '@acter/components/layout'
import { Head } from '@acter/components/layout/head'
import {
  getUserProfile,
  getActerTypes,
  setActerType,
  getActer,
  getLinks,
  getInterests,
} from 'props'
import {
  composeProps,
  ComposedGetServerSideProps,
} from '@acter/lib/compose-props'
import { Acter, InterestType, Link as LinkType, User } from '@acter/schema'
import { useCreateActerConnection } from '@acter/lib/acter/use-create-connection'
import { useDeleteActerConnection } from '@acter/lib/acter/use-delete-connection'
import { useQuery } from '@apollo/client'
import QUERY_ACTER from '@acter/schema/queries/acter-by-slug.graphql'
import { ActerMembers } from '@acter/components/acter/members'
import { useUpdateActerConnection } from '@acter/lib/acter/use-update-connection'

interface MembersPageProps {
  acter: Acter
  user: User
  links: LinkType[]
  interestTypes: InterestType[]
}

export const ActerMembersPage: NextPage<MembersPageProps> = ({
  acter,
  user,
  interestTypes,
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

  const [
    createActerConnection,
    { loading: creatingConnection },
  ] = useCreateActerConnection(displayActer)

  const [
    updateActerConnection,
    { loading: updatingConnection },
  ] = useUpdateActerConnection(displayActer)

  const [
    deleteActerConnection,
    { loading: deletingConnection },
  ] = useDeleteActerConnection(displayActer)

  return (
    <Layout acter={displayActer} user={user} links={links}>
      <Head title={`${acter.name}  - members`} />
      <ActerMembers
        acter={displayActer}
        user={user}
        interestTypes={interestTypes}
        onJoin={createActerConnection}
        onLeave={deleteActerConnection}
        onConnectionStateChange={updateActerConnection}
        loading={creatingConnection || deletingConnection || updatingConnection}
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
    getInterests,
    getLinks
  )

export default ActerMembersPage
