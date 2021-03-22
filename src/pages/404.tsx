import React from 'react'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { Layout } from 'src/components/layout'
import { Box, Link, Typography } from '@material-ui/core'
import { createStyles, withStyles, Theme } from '@material-ui/core/styles'

const Custom404: NextPage = () => {
  const router = useRouter()

  return (
    <Layout>
      <Head>
        <title>404 - Acter</title>
      </Head>
      <StyledBox>
        <Typography variant="body1">
          We're sorry, but we can't find that Acter. Please{' '}
          <StyledLink onClick={() => router.back()}>go back</StyledLink> and try
          again.
        </Typography>
      </StyledBox>
    </Layout>
  )
}

export default Custom404

export const StyledBox = withStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: theme.spacing(15),
    },
  })
)(Box)

export const StyledLink = withStyles((theme: Theme) =>
  createStyles({
    root: {
      cursor: 'pointer',
    },
  })
)(Link)
