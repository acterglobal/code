import React from 'react'

import { useRouter } from 'next/router'

import { NextPageWithLayout } from 'pages/_app'

import { PageLoadingSpinner } from '@acter/components/util/page-loading-spinner'
import { acterAsUrl } from '@acter/lib/acter/acter-as-url'
import { useActer } from '@acter/lib/acter/use-acter'

export const ActerLandingPage: NextPageWithLayout = () => {
  const router = useRouter()
  const { acter, loading: acterLoading } = useActer()

  if (acterLoading) return <PageLoadingSpinner />
  if (!acter) return null

  router.push(acterAsUrl({ acter, extraPath: ['forum'] }))

  return <></>
}

export default ActerLandingPage
