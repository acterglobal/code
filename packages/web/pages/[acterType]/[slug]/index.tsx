import React from 'react'

import { GetServerSideProps } from 'next'

import { NextPageWithLayout } from 'pages/_app'

export const ActerLandingPage: NextPageWithLayout = () => <></>

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  return {
    props: {},
    redirect: {
      destination: `/${params.acterType}/${params.slug}/forum`,
    },
  }
}

export default ActerLandingPage
