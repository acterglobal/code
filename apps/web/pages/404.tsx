import React from 'react'

import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { NextPageWithLayout } from 'pages/_app'

import { NotFoundMessage } from '@acter/components/error-messages/not-found'

const Custom404: NextPageWithLayout = () => {
  return <NotFoundMessage />
}

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'error-messages'])),
  },
})

export default Custom404
