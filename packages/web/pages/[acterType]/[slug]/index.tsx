import React from 'react'

import { GetServerSideProps } from 'next'

import { NextPageWithLayout } from 'pages/_app'

import { UrlActerTypes } from '@acter/lib/constants'

const { NETWORKS, ORGANISATIONS } = UrlActerTypes

export const ActerLandingPage: NextPageWithLayout = () => <></>

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { acterType, slug } = params
  const destination = [NETWORKS, ORGANISATIONS].includes(
    acterType as UrlActerTypes
  )
    ? `/${acterType}/${slug}/forum`
    : '/404'
  return {
    props: {},
    redirect: {
      destination,
    },
  }
}

export default ActerLandingPage
