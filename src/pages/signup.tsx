import React from 'react'
import { NextPage } from 'next'
import { providers } from 'next-auth/client'
import Head from 'next/head'
import { Layout } from 'src/components/layout'
import { Signin } from 'src/components/user/auth/signin'

const SignupPage: NextPage<any> = ({ providers }) => {
  return (
    <Layout>
      <Head>
        <title>Sign Up - Acter</title>
      </Head>
      <Signin providers={providers} variant="signup" />
    </Layout>
  )
}

export const getServerSideProps = async () => {
  const authProviders = await providers()
  return {
    props: { providers: authProviders },
  }
}

export default SignupPage
