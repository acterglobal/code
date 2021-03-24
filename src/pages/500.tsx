import React from 'react'
import { NextPage } from 'next'
import { Layout } from 'src/components/layout'
import { Typography } from '@material-ui/core'
import { Box } from 'src/components/styled'

const Custom500: NextPage = () => {
  return (
    <Layout headTitle="500 - Acter">
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
