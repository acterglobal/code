import React, { useEffect, useState } from 'react'

import { useRouter } from 'next/router'

import { NextPageWithLayout } from 'pages/_app'

import { ActerSettings } from '@acter/components/acter/settings'
import { Head } from '@acter/components/atoms/head'
import { ActerLayout } from '@acter/components/layout/acter'
import { LoadingSpinner } from '@acter/components/util/loading-spinner'
import { useAuthentication } from '@acter/lib/authentication/use-authentication'

export const ActerSettingsPage: NextPageWithLayout = () => {
  const router = useRouter()
  const baseTitle = 'Settings - Acter'
  const [title, setTitle] = useState(baseTitle)

  const { route: currentRoute } = router
  const { acter, fetching: acterLoading, redirect } = useAuthentication(
    currentRoute
  )

  useEffect(() => {
    if (acter?.name) setTitle(`${acter.name} - ${baseTitle}`)
  }, [acter])

  useEffect(() => {
    if (redirect) {
      router.push(redirect)
    }
  }, [redirect])

  if (acterLoading) return <LoadingSpinner />

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
