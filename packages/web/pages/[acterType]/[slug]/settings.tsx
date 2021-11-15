import React, { useEffect, useState } from 'react'

import { useRouter } from 'next/router'

import { NextPageWithLayout } from 'pages/_app'

import { ActerLayout } from '@acter/components/acter/layout'
import { ActerSettings } from '@acter/components/acter/settings'
import { Head } from '@acter/components/layout/head'
import { useActer } from '@acter/lib/acter/use-acter'
import { useUpdateActer } from '@acter/lib/acter/use-update-acter'
import { useLinks } from '@acter/lib/links/use-links'
import { useUser } from '@acter/lib/user/use-user'
import { userHasRoleOnActer } from '@acter/lib/user/user-has-role-on-acter'
import { ActerConnectionRole } from '@acter/schema'

export const ActerSettingsPage: NextPageWithLayout = () => {
  const router = useRouter()
  const baseTitle = 'Settings - Acter'
  const [title, setTitle] = useState(baseTitle)
  const [fetching, setLoading] = useState(false)
  const { user, fetching: userLoading } = useUser()
  const { acter, fetching: getActerLoading } = useActer()
  const { links, fetching: linksLoading } = useLinks()
  const [{ fetching: updateActerLoading }, updateActer] = useUpdateActer(acter)

  useEffect(() => {
    setLoading(
      userLoading || getActerLoading || linksLoading || updateActerLoading
    )
  }, [userLoading, getActerLoading, linksLoading || updateActerLoading])

  useEffect(() => {
    if (acter?.name) setTitle(`${acter.name} - ${baseTitle}`)
  }, [acter])

  if (!acter || !user) return null

  const isAdmin = userHasRoleOnActer(user, ActerConnectionRole.ADMIN, acter)
  !isAdmin && router.push('/401')

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

export default ActerSettingsPage
