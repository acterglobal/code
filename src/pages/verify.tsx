// TODO: fix the types for this file
/* eslint-disable */
import React from 'react'
import { NextPage } from 'next'
import { Layout } from '@acter/components/layout'
import { Head } from '@acter/components/layout/head'

import {
  Box,
  Typography,
  makeStyles,
  createStyles,
  Theme,
} from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      margin: 'auto',
      maxWidth: 500,
      textAlign: 'center',
    },
    heading: {
      marginTop: theme.spacing(2),
      fontWeight: theme.typography.fontWeightMedium,
      color: theme.palette.primary.main,
      textAlign: 'center',
    },
  })
)

const VerifyPage: NextPage<any> = () => {
  const classes = useStyles()
  return (
    <Layout>
      <Head title="Email send - Acter" />

      <Box className={classes.container}>
        <Typography variant="h4" className={classes.heading}>
          You're on your way
        </Typography>
        <Typography variant="body1">
          A signin link has been sent to your email address.
        </Typography>
      </Box>
    </Layout>
  )
}

export default VerifyPage
