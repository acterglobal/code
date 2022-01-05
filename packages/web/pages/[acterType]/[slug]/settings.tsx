import React, { useEffect, useState } from 'react'

import { NextPageWithLayout } from 'pages/_app'

import { ActerSettings } from '@acter/components/acter/settings'
import { Head } from '@acter/components/atoms/head'
import { Custom401 } from '@acter/components/errors'
import { ActerLayout } from '@acter/components/layout/acter'
import { LoadingSpinner } from '@acter/components/util/loading-spinner'
import { useActer } from '@acter/lib/acter/use-acter'
import { useUser } from '@acter/lib/user/use-user'
import { userHasRoleOnActer } from '@acter/lib/user/user-has-role-on-acter'
import { ActerConnectionRole } from '@acter/schema'

export const ActerSettingsPage: NextPageWithLayout = () => {
  const baseTitle = 'Settings - Acter'
  const [title, setTitle] = useState(baseTitle)
  const { user, fetching: userLoading } = useUser()
  const { acter, fetching: acterLoading } = useActer()

  useEffect(() => {
    if (acter?.name) setTitle(`${acter.name} - ${baseTitle}`)
  }, [acter])

  if (userLoading || acterLoading) return <LoadingSpinner />

  const isAdmin = userHasRoleOnActer(user, ActerConnectionRole.ADMIN, acter)

  if (!user) return <Custom401 />

  if (user && !isAdmin) return <Custom401 user={user} isPrivate />

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
