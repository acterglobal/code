import { NextPage } from 'next'
import Head from 'next/head'
import { Layout } from 'src/components/layout'
import { Login } from 'src/components/user/auth/login'

export const LoginPage: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Login</title>
      </Head>
      <Login />
    </Layout>
  )
}
