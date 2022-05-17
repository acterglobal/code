import React from 'react'

import { Typography } from '@material-ui/core'

import { NextPageWithLayout } from 'pages/_app'

import { Head } from '@acter/components/atoms/head'
import { Box } from '@acter/components/styled'

const InviteExpiredPage: NextPageWithLayout = () => {
  return (
    <>
      <Head title="Invite Expired - Acter" />

      <Box mt={20}>
        <Typography variant="body1">
          Sorry, your invitation has expired. Please reach out to the
          organisation admin, to receive a new invite.
        </Typography>
      </Box>
    </>
  )
}

export default InviteExpiredPage
