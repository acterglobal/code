import React, { useEffect, useState } from 'react'

import { withUrqlClient } from 'next-urql'

import { NextPageWithLayout } from 'pages/_app'
import {
  checkRole,
  getActer,
  getActerTypes,
  setActerType,
  getLinks,
  getUserProfile,
} from 'props'

import { ActerLayout } from '@acter/components/acter/layout'
import { ActerSettings } from '@acter/components/acter/settings'
import { Head } from '@acter/components/layout/head'
import { useActer } from '@acter/lib/acter/use-acter'
import { useUpdateActer } from '@acter/lib/acter/use-update-acter'
import {
  composeProps,
  ComposedGetServerSideProps,
} from '@acter/lib/compose-props'
import { useLinks } from '@acter/lib/links/use-links'
import { getUrqlClientOptions } from '@acter/lib/urql'
import { ActerConnectionRole } from '@acter/schema'

export const ActerSettingsPage: NextPageWithLayout = () => {
  const baseTitle = 'Settings - Acter'
  const [title, setTitle] = useState(baseTitle)
  const [fetching, setLoading] = useState(false)
  const { acter, fetching: getActerLoading } = useActer()
  const { links, fetching: linksLoading } = useLinks()
  const [{ fetching: updateActerLoading }, updateActer] = useUpdateActer(acter)

  useEffect(() => {
    setLoading(getActerLoading || linksLoading || updateActerLoading)
  }, [getActerLoading, linksLoading || updateActerLoading])

  useEffect(() => {
    if (acter?.name) setTitle(`${acter.name} - ${baseTitle}`)
  }, [acter])

  return (
    <>
      <Head title={title} />
      <main>
        <ActerSettings
          onSettingsChange={updateActer}
          fetching={fetching}
          links={links}
        />
      </main>
    </>
  )
}

ActerSettingsPage.getLayout = (page) => <ActerLayout>{page}</ActerLayout>

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

export default withUrqlClient(getUrqlClientOptions)(ActerSettingsPage)
