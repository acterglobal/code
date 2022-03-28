import React from 'react'

import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useRouter } from 'next/router'

import { NextPageWithLayout } from 'pages/_app'

import { NotLoggedInMessage } from '@acter/components/error-messages/not-logged'

const Custom401: NextPageWithLayout = () => {
  const router = useRouter()
  const { query } = router
  const loginRedirectPath = Object.keys(query).toString()

  return <NotLoggedInMessage loginRedirectPath={loginRedirectPath} />
}

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'error-messages'])),
  },
})

export default Custom401
