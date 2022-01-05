import React from 'react'

import { useRouter } from 'next/router'

import { Typography } from '@material-ui/core'

import { NextPageWithLayout } from 'pages/_app'

import { Head } from '@acter/components/atoms/head'
import { Box, Link } from '@acter/components/styled'

const Custom404: NextPageWithLayout = () => {
  const router = useRouter()
  const handleRedirectBack = () => router.back()

  return (
    <>
      <Head title="404 - Acter" />
      <Box mt={20}>
        <Typography variant="body1">
          We're sorry, but we can't find that Acter. Please{' '}
          <Link onClick={handleRedirectBack}>go back</Link> and try again.
        </Typography>
      </Box>
    </>
  )
}

export default Custom404
