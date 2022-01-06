import React, { useEffect, useState } from 'react'

import { useRouter } from 'next/router'

import { NextPageWithLayout } from 'pages/_app'

import { ActerSettings } from '@acter/components/acter/settings'
import { Head } from '@acter/components/atoms/head'
import { ActerLayout } from '@acter/components/layout/acter'
import { LoadingSpinner } from '@acter/components/util/loading-spinner'
import { getPrivacySettings } from '@acter/lib/acter/get-privacy-settings'
import { useActer } from '@acter/lib/acter/use-acter'
import { useUser } from '@acter/lib/user/use-user'
import { userHasRoleOnActer } from '@acter/lib/user/user-has-role-on-acter'
import { ActerConnectionRole } from '@acter/schema'

export const ActerSettingsPage: NextPageWithLayout = () => {
  const router = useRouter()
  const baseTitle = 'Settings - Acter'
  const [title, setTitle] = useState(baseTitle)
  const { user, fetching: userLoading } = useUser()
  const { acter, fetching: acterLoading } = useActer()

  useEffect(() => {
    if (acter?.name) setTitle(`${acter.name} - ${baseTitle}`)
  }, [acter])

  const isAdmin = userHasRoleOnActer(user, ActerConnectionRole.ADMIN, acter)

  const isPrivate = getPrivacySettings(acter)

  useEffect(() => {
    if (!acterLoading && !userLoading) {
      if (!user && isPrivate) router.push('/401')
      if (!acter) router.push('/404')

      if (user && acter) {
        if (!isAdmin) router.push('/403')
      }
    }
  }, [acterLoading, acter, userLoading, user])

  if (acterLoading || userLoading) return <LoadingSpinner />

  return (
    <>
      <Head title={title} />
      <main>
        <ActerSettings />
      </main>
    </>
  )
}

ActerSettingsPage.getLayout = (page) => <ActerLayout>{page}</ActerLayout>

export default ActerSettingsPage
