import React from 'react'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { Layout } from 'src/components/layout'
import { Typography } from '@material-ui/core'
import { Box, Link } from 'src/components/styled'

const Custom404: NextPage = () => {
  const router = useRouter()
  const handleRedirectBack = () => router.back()

  return (
    <Layout>
      <Head>
        <title>404 - Acter</title>
      </Head>
      <Box mt={20}>
        <Typography variant="body1">
          We're sorry, but we can't find that Acter. Please{' '}
          <Link onClick={handleRedirectBack}>go back</Link> and try again.
        </Typography>
      </Box>
    </Layout>
  )
}

export default Custom404
