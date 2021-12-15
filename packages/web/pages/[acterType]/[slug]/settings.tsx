import React, { useEffect, useState } from 'react'

import { useRouter } from 'next/router'

import { NextPageWithLayout } from 'pages/_app'

import { ActerLayout } from '@acter/components/acter/layout'
import { ActerSettings } from '@acter/components/acter/settings'
import { Head } from '@acter/components/atoms/head'
import { LoadingSpinner } from '@acter/components/util/loading-spinner'
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

  if (userLoading || acterLoading) return <LoadingSpinner />

  if (!acter || !user) return null

  const isAdmin = userHasRoleOnActer(user, ActerConnectionRole.ADMIN, acter)
  !isAdmin && router.push('/401')

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
