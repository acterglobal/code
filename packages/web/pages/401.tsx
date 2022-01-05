import React from 'react'

import { Typography } from '@material-ui/core'

import { NextPageWithLayout } from 'pages/_app'

import { Head } from '@acter/components/atoms/head'
import { Box, Link } from '@acter/components/styled'
import { useAuthRedirect } from '@acter/lib/url/use-auth-redirect'

const Custom401: NextPageWithLayout = () => {
  const { loginUrl } = useAuthRedirect()

  return (
    <>
      <Head title="401 - Acter" />
      <Box mt={20}>
        <Typography variant="body1">
          You are not authorized to view this page. Please{' '}
          <Link href={loginUrl}>login</Link> and try again.
        </Typography>
      </Box>
    </>
  )
}

export default Custom401
