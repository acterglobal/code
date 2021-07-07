import React from 'react'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { Layout } from '@acter/components/layout'
import { Head } from '@acter/components/layout/head'
import { Typography } from '@material-ui/core'
import { Box, Link } from '@acter/components/styled'

const Custom404: NextPage = () => {
  const router = useRouter()
  const handleRedirectBack = () => router.push('api/auth/login')

  return (
    <Layout>
      <Head title="404 - Acter" />
      <Box mt={20}>
        <Typography variant="body1">
          You are not authorized to view this page. Please{' '}
          <Link onClick={handleRedirectBack}>login</Link> and try again.
        </Typography>
      </Box>
    </Layout>
  )
}

export default Custom404
