import React from 'react'

import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { NextPageWithLayout } from 'pages/_app'

import { NotAuthorizedMessage } from '@acter/components/error-messages/not-authorized'

const Custom403: NextPageWithLayout = () => {
  return <NotAuthorizedMessage />
}

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'error-messages'])),
  },
})

export default Custom403
