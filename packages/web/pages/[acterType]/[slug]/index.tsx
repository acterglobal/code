import React from 'react'

import { GetServerSideProps } from 'next'
import { withUrqlClient } from 'next-urql'

import { NextPageWithLayout } from 'pages/_app'

import { getUrlActerTypes } from '@acter/lib/acter-types/get-url-acter-types'
import { ActerTypes } from '@acter/lib/constants'
import { getUrqlClientOptions } from '@acter/lib/urql'

const UrlActerTypes = getUrlActerTypes()

export const ActerLandingPage: NextPageWithLayout = () => <></>

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { acterType, slug } = params
  const destination = UrlActerTypes.includes(acterType as ActerTypes)
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
