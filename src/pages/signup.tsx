import React from 'react'
import { NextPage } from 'next'
import { providers } from 'next-auth/client'
import Head from 'next/head'

import { Layout } from 'src/components/layout'
import { Signup } from 'src/components/user/auth/signup'

const SignupPage: NextPage<any> = ({ providers }) => {
  return (
    <Layout>
      <Signup providers={providers} />
    </Layout>
  )
}

export const getServerSideProps = async () => {
  const authProviders = await providers()
  console.log('getInitialProps', authProviders)
  return {
    props: { providers: authProviders },
  }
}

export default SignupPage
