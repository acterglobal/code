import React from 'react'
import { NextPage } from 'next'
import Head from 'next/head'
import { Layout } from 'src/components/layout'
import { Typography } from '@material-ui/core'
import { Box } from 'src/components/styled'

const Custom500: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>500 - Acter</title>
      </Head>
      <Box mt={20}>
        <Typography variant="body1">
          We're sorry, but there seems to have been an error. We've been
          notified, and hope to get things fixed quickly.
        </Typography>
      </Box>
    </Layout>
  )
}

export default Custom500
