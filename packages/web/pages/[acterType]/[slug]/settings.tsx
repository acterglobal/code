import { useEffect, useState } from 'react'

import { NextPageWithLayout } from 'pages/_app'
import {
  checkRole,
  getActer,
  getActerTypes,
  setActerType,
  getLinks,
  getUserProfile,
} from 'props'

import { ActerSettings } from '@acter/components/acter/settings'
import { Head } from '@acter/components/layout/head'
import { useActer } from '@acter/lib/acter/use-acter'
import { useUpdateActer } from '@acter/lib/acter/use-update-acter'
import {
  composeProps,
  ComposedGetServerSideProps,
} from '@acter/lib/compose-props'
import { useCreateLink } from '@acter/lib/links/use-create-link'
import { useDeleteLink } from '@acter/lib/links/use-delete-link'
import { useLinks } from '@acter/lib/links/use-links'
import { useUpdateLink } from '@acter/lib/links/use-update-link'
import { ActerConnectionRole } from '@acter/schema'

export const ActerSettingsPage: NextPageWithLayout = () => {
  const baseTitle = 'Settings - Acter'
  const [title, setTitle] = useState(baseTitle)
  const [loading, setLoading] = useState(false)
  const { acter, loading: getActerLoading } = useActer()
  const { links, loading: linksLoading } = useLinks()
  const [updateActer, { loading: updateActerLoading }] = useUpdateActer(acter)

  useEffect(() => {
    setLoading(getActerLoading || linksLoading || updateActerLoading)
  }, [getActerLoading, linksLoading || updateActerLoading])

  useEffect(() => {
    if (acter?.name) setTitle(`${acter.name} - ${baseTitle}`)
  }, [acter])

  const [createLink] = useCreateLink(acter)
  const [updateLink] = useUpdateLink(acter)
  const [deleteLink] = useDeleteLink()

  return (
    <>
      <Head title={title} />
      <main>
        <ActerSettings
          onSettingsChange={updateActer}
          loading={loading}
          links={links}
          onLinkSubmit={createLink}
          onLinkUpdate={updateLink}
          onLinkDelete={deleteLink}
        />
      </main>
    </>
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
