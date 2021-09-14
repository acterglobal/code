import { NextPage } from 'next'
import { Layout } from '@acter/components/layout'
import { Head } from '@acter/components/layout/head'
import {
  composeProps,
  ComposedGetServerSideProps,
} from '@acter/lib/compose-props'
import {
  checkRole,
  getActer,
  getActerTypes,
  setActerType,
  getLinks,
  getUserProfile,
} from 'props'
import { ActerSettings } from '@acter/components/acter/settings'
import { ActerConnectionRole } from '@acter/schema'
import { useUpdateActer } from '@acter/lib/acter/use-update-acter'
import { useCreateLink } from '@acter/lib/links/use-create-link'
import { useUpdateLink } from '@acter/lib/links/use-update-link'
import { useDeleteLink } from '@acter/lib/links/use-delete-link'
import { useEffect, useState } from 'react'
import { useActer } from '@acter/lib/acter/use-acter'
import { useLinks } from '@acter/lib/links/use-links'

export const ActerSettingsPage: NextPage = () => {
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
    <Layout>
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
