import React from 'react'
import { NextPage } from 'next'

import { composeProps, ComposedGetServerSideProps } from 'lib/compose-props'

const DashboardPage: NextPage = () => {
  return <div></div>
}

export const getServerSideProps: ComposedGetServerSideProps = (ctx) =>
  composeProps(ctx)

export default DashboardPage
