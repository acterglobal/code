import React from 'react'

import { useRouter } from 'next/router'

import { NextPageWithLayout } from 'pages/_app'

import { NotLoggedInMessage } from '@acter/components/error-messages/not-logged'

const Custom401: NextPageWithLayout = () => {
  const router = useRouter()
  const { query } = router
  const prevPath = Object.keys(query).toString()

  return <NotLoggedInMessage previousPath={prevPath} />
}

export default Custom401
