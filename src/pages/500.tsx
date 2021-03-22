import React from 'react'
import { NextPage } from 'next'
import Head from 'next/head'
import { Layout } from 'src/components/layout'
import { Box, Typography } from '@material-ui/core'
import { createStyles, withStyles, Theme } from '@material-ui/core/styles'

const Custom500: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>500 - Acter</title>
      </Head>
      <StyledBox>
        <Typography variant="body1">
          We're sorry, but there seems to have been an error. We've been
          notified, and hope to get things fixed quickly.
        </Typography>
      </StyledBox>
    </Layout>
  )
}

export default Custom500

export const StyledBox = withStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: theme.spacing(15),
    },
  })
)(Box)
