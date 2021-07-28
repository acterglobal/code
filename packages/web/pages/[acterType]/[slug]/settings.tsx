import { NextPage } from 'next'
import { Layout } from '@acter/components/layout'
import { Head } from '@acter/components/layout/head'
import {
  composeProps,
  ComposedGetServerSideProps,
} from '@acter/lib/compose-props'
import {
  checkRole,
  getUserProfile,
  getActerTypes,
  getActer,
  setActerType,
  getLinks,
} from 'props'
import { ActerSettings } from '@acter/components/acter/settings'
import { Acter, ActerConnectionRole } from '@acter/schema'
import { useUpdateActer } from '@acter/lib/acter/use-update-acter'
import { useCreateLink } from '@acter/lib/links/use-create-link'
import { useUpdateLink } from '@acter/lib/links/use-update-link'
import { useDeleteLink } from '@acter/lib/links/use-delete-link'
import { useQuery } from '@apollo/client'
import QUERY_ACTER from '@acter/schema/queries/acter-by-slug.graphql'
import QUERY_LINKS_BY_ACTER from '@acter/schema/queries/links-by-acter.graphql'
import { ActerTypes } from '@acter/lib/constants'

interface ActerSettingsPageProps {
  acter: Acter
}

export const ActerSettingsPage: NextPage<ActerSettingsPageProps> = ({
  acter,
}) => {
  /* This query call fetches the cache data whenever cache updates */
  const { data: acterData } = useQuery(QUERY_ACTER, {
    variables: {
      acterTypeId: acter.ActerType.id,
      slug: acter.slug,
    },
  })

  const [updateActer, { loading }] = useUpdateActer(acterData)

  /* This query call fetches the cache data whenever cache updates */
  const { data: linksData } = useQuery(QUERY_LINKS_BY_ACTER, {
    variables: {
      acterId:
        acter.ActerType.name === ActerTypes.GROUP ? acter.Parent.id : acter.id,
    },
  })

  const { findFirstActer: displayActer } = acterData
  const { links: displayLinks } = linksData

  const [createLink] = useCreateLink(acter)
  const [updateLink] = useUpdateLink(acter)
  const [deleteLink] = useDeleteLink()

  return (
    <Layout acter={displayActer} links={displayLinks}>
      <Head title={`${acter.name} Settings - Acter`} />
      <main>
        <ActerSettings
          acter={displayActer}
          onSettingsChange={updateActer}
          loading={loading}
          links={displayLinks}
          onLinkSubmit={createLink}
          onLinkUpdate={updateLink}
          onLinkDelete={deleteLink}
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
    checkRole(ActerConnectionRole.ADMIN),
    getLinks
  )

export default ActerSettingsPage
