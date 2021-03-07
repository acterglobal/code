import React from 'react'
import { NextPage } from 'next'
import { providers } from 'next-auth/client'
import Head from 'next/head'
import { Layout } from 'src/components/layout'
import { Login } from 'src/components/user/auth/login'

const LoginPage: NextPage<any> = ({ providers }) => {
  return (
    <Layout>
      <Head>
        <title>Login</title>
      </Head>
      <Login providers={providers} />
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

export default LoginPage
