import React from 'react'

import { Typography } from '@material-ui/core'

import { NextPageWithLayout } from 'pages/_app'

import { Head } from '@acter/components/atoms/head'
import { Box } from '@acter/components/styled'

const Custom500: NextPageWithLayout = () => {
  return (
    <>
      <Head title="500 - Acter" />

      <Box mt={20}>
        <Typography variant="body1">
          We're sorry, but there seems to have been an error. We've been
          notified, and hope to get things fixed quickly.
        </Typography>
      </Box>
    </>
  )
}

export default Custom500
