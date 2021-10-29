import React from 'react'

import { GetServerSideProps } from 'next'
import { withUrqlClient } from 'next-urql'

import { NextPageWithLayout } from 'pages/_app'

import { UrlActerTypes } from '@acter/lib/constants'
import { getUrqlClientOptions } from '@acter/lib/urql'

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

export default withUrqlClient(getUrqlClientOptions)(ActerLandingPage)
