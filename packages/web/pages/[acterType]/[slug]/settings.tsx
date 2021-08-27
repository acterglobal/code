import React, { useState } from 'react'
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
import {
  Acter,
  ActerConnectionRole,
  ActerType,
  User,
  Link as LinkType,
} from '@acter/schema'
import { useUpdateActer } from '@acter/lib/acter/use-update-acter'
import { useCreateActer } from '@acter/lib/acter/use-create-acter'
import { useCreateLink } from '@acter/lib/links/use-create-link'
import { useUpdateLink } from '@acter/lib/links/use-update-link'
import { useDeleteLink } from '@acter/lib/links/use-delete-link'
import { useQuery } from '@apollo/client'
import QUERY_ACTER from '@acter/schema/queries/acter-by-slug.graphql'

interface ActerSettingsPageProps {
  acter: Acter
  acterTypes: ActerType[]
  user: User
  links: LinkType[]
}

export const ActerSettingsPage: NextPage<ActerSettingsPageProps> = ({
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

  const [displayLinks, setDisplayLinks] = useState(links)
  const [createGroup] = useCreateActer(displayActer)
  const [updateGroup, { loading: updateGroupLoading }] = useUpdateActer(
    displayActer
  )

  const [createLink] = useCreateLink(acter, user, displayLinks, {
    onCompleted: setDisplayLinks,
  })
  const [updateLink] = useUpdateLink(acter, user, displayLinks, {
    onCompleted: setDisplayLinks,
  })
  const [deleteLink] = useDeleteLink(displayLinks, {
    onCompleted: setDisplayLinks,
  })

  return (
    <Layout
      acter={displayActer}
      acterTypes={acterTypes}
      user={user}
      onGroupSubmit={createGroup}
      links={displayLinks}
    >
      <Head title={`${acter.name} Settings - Acter`} />
      <main>
        <ActerSettings
          acter={displayActer}
          onSettingsChange={updateGroup}
          loading={updateGroupLoading}
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
