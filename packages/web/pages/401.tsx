import React from 'react'
import { NextPage } from 'next'
import { Layout } from '@acter/components/layout'
import { Head } from '@acter/components/layout/head'
import { Typography } from '@material-ui/core'
import { Box, Link } from '@acter/components/styled'
import { useAuthRedirect } from '@acter/lib/url/use-auth-redirect'

const Custom401: NextPage = () => {
  const [redirectToLogin] = useAuthRedirect()

  return (
    <Layout>
      <Head title="404 - Acter" />
      <Box mt={20}>
        <Typography variant="body1">
          You are not authorized to view this page. Please{' '}
          <Link onClick={redirectToLogin}>login</Link> and try again.
        </Typography>
      </Box>
    </Layout>
  )
}

export default Custom401
