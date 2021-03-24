import React from 'react'
import { NextPage } from 'next'
import { providers } from 'next-auth/client'
import { Layout } from 'src/components/layout'
import { Box, Link as MuiLink, Typography } from '@material-ui/core'
import { Signin } from 'src/components/user/auth/signin'

const LoginPage: NextPage<any> = ({ providers }) => {
  return (
    <Layout headTitle="SignIn - Acter">
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
