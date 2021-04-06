import React from 'react'
import { NextPage } from 'next'
import { providers } from 'next-auth/client'
import { Layout } from 'src/components/layout'
import { Head } from 'src/components/layout/head'

import { Signin } from 'src/components/user/auth/signin'

const LoginPage: NextPage<any> = ({ providers }) => {
  return (
    <Layout>
      <Head title="Acter" />

      <Signin providers={providers} variant="signin" />
    </Layout>
  )
}

export const getServerSideProps = async () => {
  const authProviders = await providers()
  return {
    props: { providers: authProviders },
  }
}

export default LoginPage
